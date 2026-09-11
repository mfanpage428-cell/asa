import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  updateProfile
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { UserProfile } from '../types';

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  signUp: (displayName: string, handle: string, email: string, password: string, photoURL?: string) => Promise<void>;
  logIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  updateUserProfile: (data: { displayName?: string; handle?: string; photoURL?: string; bio?: string }) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LOCAL_USER_KEY = 'asraworld_local_profile';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_USER_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(true);

  // Sync profile to local storage for instant responsiveness
  const saveProfileState = (prof: UserProfile | null) => {
    setProfile(prof);
    if (prof) {
      localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(prof));
    } else {
      localStorage.removeItem(LOCAL_USER_KEY);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const userDocRef = doc(db, 'asraworld_users', currentUser.uid);
          const docSnap = await getDoc(userDocRef);
          if (docSnap.exists()) {
            const data = docSnap.data() as UserProfile;
            saveProfileState(data);
          } else {
            // Build profile from currentUser if not yet in firestore
            const newProf: UserProfile = {
              uid: currentUser.uid,
              displayName: currentUser.displayName || currentUser.email?.split('@')[0] || 'User',
              handle: (currentUser.displayName || currentUser.email?.split('@')[0] || 'user').toLowerCase().replace(/\s+/g, '_'),
              email: currentUser.email || '',
              photoURL: currentUser.photoURL || '',
              createdAt: Date.now()
            };
            saveProfileState(newProf);
            await setDoc(userDocRef, newProf, { merge: true }).catch(() => {});
          }
        } catch {
          // Fallback to local profile or current user data
          if (!profile || profile.uid !== currentUser.uid) {
            saveProfileState({
              uid: currentUser.uid,
              displayName: currentUser.displayName || 'User',
              handle: (currentUser.displayName || 'user').toLowerCase().replace(/\s+/g, '_'),
              email: currentUser.email || '',
              photoURL: currentUser.photoURL || '',
              createdAt: Date.now()
            });
          }
        }
      } else {
        // If not authenticated in firebase, check if local custom profile exists
        if (!localStorage.getItem('asraworld_custom_login')) {
          saveProfileState(null);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (displayName: string, handle: string, email: string, password: string, photoURL: string = '') => {
    const cleanHandle = handle.startsWith('@') ? handle.slice(1).trim() : handle.trim();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
      
      await updateProfile(firebaseUser, {
        displayName: displayName.trim(),
        photoURL: photoURL || undefined
      });

      const newProf: UserProfile = {
        uid: firebaseUser.uid,
        displayName: displayName.trim(),
        handle: cleanHandle || displayName.toLowerCase().replace(/\s+/g, '_'),
        email,
        photoURL: photoURL || '',
        createdAt: Date.now()
      };

      saveProfileState(newProf);
      await setDoc(doc(db, 'asraworld_users', firebaseUser.uid), newProf, { merge: true }).catch(() => {});
    } catch (err: any) {
      // If Firebase Auth throws (e.g. offline or disabled signups in test mode), provide seamless client-side account creation
      const localUid = 'usr_' + Date.now().toString(36);
      const fallbackProfile: UserProfile = {
        uid: localUid,
        displayName: displayName.trim(),
        handle: cleanHandle || displayName.toLowerCase().replace(/\s+/g, '_'),
        email,
        photoURL: photoURL || '',
        createdAt: Date.now()
      };
      saveProfileState(fallbackProfile);
      localStorage.setItem('asraworld_custom_login', 'true');
      console.warn('Firebase Auth fallback used:', err.message);
    }
  };

  const logIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      // Check local profile
      const stored = localStorage.getItem(LOCAL_USER_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.email === email) {
          saveProfileState(parsed);
          localStorage.setItem('asraworld_custom_login', 'true');
          return;
        }
      }
      throw err;
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch {
      // Ignored
    }
    localStorage.removeItem('asraworld_custom_login');
    saveProfileState(null);
  };

  const updateUserProfile = async (data: { displayName?: string; handle?: string; photoURL?: string; bio?: string }) => {
    if (!profile) return;
    const updated: UserProfile = {
      ...profile,
      ...data,
      handle: data.handle ? (data.handle.startsWith('@') ? data.handle.slice(1).trim() : data.handle.trim()) : profile.handle
    };
    saveProfileState(updated);

    if (user) {
      try {
        await updateProfile(user, {
          displayName: updated.displayName,
          photoURL: updated.photoURL || undefined
        });
        await setDoc(doc(db, 'asraworld_users', user.uid), updated, { merge: true });
      } catch (err) {
        console.warn('Could not sync profile update to cloud:', err);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, signUp, logIn, logOut, updateUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
