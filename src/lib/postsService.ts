import {
  collection,
  doc,
  setDoc,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  updateDoc,
  arrayUnion,
  arrayRemove
} from 'firebase/firestore';
import { db } from './firebase';
import { Article, Comment } from '../types';

const POSTS_KEY = 'asraworld_local_articles';
const COMMENTS_KEY = 'asraworld_local_comments';

// Seed initial community articles if empty
const INITIAL_ARTICLES: Article[] = [
  {
    id: 'seed_art_1',
    title: 'Bolalar huquqlarini asrash — millat kelajagining garovidir',
    category: 'opinion',
    text: `Bugungi globallashuv davrida har bir mamlakatning eng qimmatli boyligi — bu uning yosh avlodidir. Bolalar huquqlarini shunchaki qog'ozdagi qonun sifatida emas, balki kundalik hayotimizning ajralmas qoidasi sifatida qabul qilishimiz shart.

Har bir bola oilada iliqlik, maktabda erkinlik va jamiyatda xavfsizlikni his qilishi kerak. Biz kattalar ularning savollarini tinglashimiz, muammolariga jiddiy qarashimiz va ularning orzu-intilishlarini so'ndirmasligimiz lozim. Bolalar mehnati, zo'ravonlik va befarqlikka qarshi kurash barchamizning insoniy burchimizdir.`,
    authorId: 'system_author_1',
    authorName: 'Malika Karimova',
    authorHandle: 'malika_edu',
    authorPhotoURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    ts: Date.now() - 1000 * 60 * 60 * 24 * 2,
    likes: ['user_sample_1', 'user_sample_2', 'user_sample_3'],
    dislikes: []
  },
  {
    id: 'seed_art_2',
    title: 'Climate Action from Youth: Why Our Voices Matter Today',
    category: 'analysis',
    text: `It is often assumed that young people should simply wait until adulthood to care about environmental sustainability. However, the accelerating climate emergency directly affects the schools we attend, the air we breathe, and the ecosystems our generation will inherit.

Youth movements around the world have proved that awareness starts in our neighborhoods. From reducing plastic consumption in school cafeterias to planting urban micro-forests, every localized effort counts. Global leaders must recognize that climate decisions made without consulting young people are decisions made against our collective future.`,
    authorId: 'system_author_2',
    authorName: 'Alex Thorne',
    authorHandle: 'alex_climate',
    authorPhotoURL: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
    ts: Date.now() - 1000 * 60 * 60 * 18,
    likes: ['user_sample_4', 'user_sample_5'],
    dislikes: []
  }
];

const INITIAL_COMMENTS: Comment[] = [
  {
    id: 'seed_comm_1',
    articleId: 'seed_art_1',
    parentId: null,
    authorId: 'system_comm_1',
    authorName: 'Jasur Bek',
    authorHandle: 'jasurbek_99',
    authorPhotoURL: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    text: "Juda to'g'ri va o'z vaqtida ko'tarilgan masala! Maktablarda bolalarga o'z huquqlarini o'rgatish darslarini joriy qilish kerak.",
    ts: Date.now() - 1000 * 60 * 60 * 12,
    likes: ['user_sample_1'],
    dislikes: []
  },
  {
    id: 'seed_comm_2',
    articleId: 'seed_art_1',
    parentId: 'seed_comm_1',
    authorId: 'system_comm_2',
    authorName: 'Nilufar Rahimova',
    authorHandle: 'nilufar_r',
    authorPhotoURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    text: "@jasurbek_99 Fikringizga to'liq qo'shilaman. Ota-onalar ham bolaning fikrini tinglashni o'rganishlari zarur.",
    ts: Date.now() - 1000 * 60 * 60 * 6,
    likes: ['user_sample_2'],
    dislikes: [],
    replyToAuthor: 'Jasur Bek'
  }
];

export function normalizeArticle(raw: any, fallbackId?: string): Article {
  if (!raw || typeof raw !== 'object') {
    return {
      id: fallbackId || 'art_' + Date.now(),
      title: 'Untitled Article',
      category: 'General',
      text: '',
      authorId: 'anonymous',
      authorName: 'Anonymous',
      authorHandle: 'anonymous',
      authorPhotoURL: '',
      ts: Date.now(),
      likes: [],
      dislikes: [],
      commentCount: 0
    };
  }
  return {
    id: raw.id || fallbackId || 'art_' + Date.now(),
    title: raw.title || 'Untitled Article',
    category: raw.category || 'General',
    text: raw.text || '',
    authorId: raw.authorId || 'anonymous',
    authorName: raw.authorName || 'Anonymous',
    authorHandle: raw.authorHandle || '',
    authorPhotoURL: raw.authorPhotoURL || '',
    ts: typeof raw.ts === 'number' ? raw.ts : Date.now(),
    likes: Array.isArray(raw.likes) ? raw.likes : [],
    dislikes: Array.isArray(raw.dislikes) ? raw.dislikes : [],
    commentCount: typeof raw.commentCount === 'number' ? raw.commentCount : 0,
    topicId: raw.topicId
  };
}

export function normalizeComment(raw: any, fallbackId?: string): Comment {
  if (!raw || typeof raw !== 'object') {
    return {
      id: fallbackId || 'comm_' + Date.now(),
      articleId: '',
      parentId: null,
      authorId: 'anonymous',
      authorName: 'Anonymous',
      authorHandle: 'anonymous',
      authorPhotoURL: '',
      text: '',
      ts: Date.now(),
      likes: [],
      dislikes: [],
      replyToAuthor: undefined
    };
  }
  return {
    id: raw.id || fallbackId || 'comm_' + Date.now(),
    articleId: raw.articleId || '',
    parentId: raw.parentId || null,
    authorId: raw.authorId || 'anonymous',
    authorName: raw.authorName || 'Anonymous',
    authorHandle: raw.authorHandle || '',
    authorPhotoURL: raw.authorPhotoURL || '',
    text: raw.text || '',
    ts: typeof raw.ts === 'number' ? raw.ts : Date.now(),
    likes: Array.isArray(raw.likes) ? raw.likes : [],
    dislikes: Array.isArray(raw.dislikes) ? raw.dislikes : [],
    replyToAuthor: raw.replyToAuthor
  };
}

function getStoredArticles(): Article[] {
  try {
    const raw = localStorage.getItem(POSTS_KEY);
    if (!raw) return INITIAL_ARTICLES.map((a) => normalizeArticle(a));
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return INITIAL_ARTICLES.map((a) => normalizeArticle(a));
    return parsed.map((a) => normalizeArticle(a));
  } catch {
    return INITIAL_ARTICLES.map((a) => normalizeArticle(a));
  }
}

function saveStoredArticles(articles: Article[]) {
  try {
    const safeArticles = articles.map((a) => normalizeArticle(a));
    localStorage.setItem(POSTS_KEY, JSON.stringify(safeArticles));
  } catch {
    // Ignored
  }
}

function getStoredComments(): Comment[] {
  try {
    const raw = localStorage.getItem(COMMENTS_KEY);
    if (!raw) return INITIAL_COMMENTS.map((c) => normalizeComment(c));
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return INITIAL_COMMENTS.map((c) => normalizeComment(c));
    return parsed.map((c) => normalizeComment(c));
  } catch {
    return INITIAL_COMMENTS.map((c) => normalizeComment(c));
  }
}

function saveStoredComments(comments: Comment[]) {
  try {
    const safeComments = comments.map((c) => normalizeComment(c));
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(safeComments));
  } catch {
    // Ignored
  }
}

export function subscribeToArticles(callback: (articles: Article[]) => void) {
  let initialLoaded = false;
  const localArticles = getStoredArticles();
  callback(localArticles);

  try {
    const q = query(collection(db, 'asraworld_posts'), orderBy('ts', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const remoteArticles = snapshot.docs.map((d) => normalizeArticle(d.data(), d.id));
        saveStoredArticles(remoteArticles);
        callback(remoteArticles);
        initialLoaded = true;
      } else if (!initialLoaded) {
        callback(localArticles);
      }
    }, (err) => {
      console.warn('Firestore articles snapshot fallback to local:', err.message);
      callback(getStoredArticles());
    });
    return unsubscribe;
  } catch (err) {
    console.warn('Error subscribing to articles:', err);
    return () => {};
  }
}

export async function publishArticle(article: Omit<Article, 'id' | 'ts' | 'likes' | 'dislikes'>): Promise<string> {
  const id = 'art_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
  const newArticle: Article = {
    ...article,
    id,
    ts: Date.now(),
    likes: [],
    dislikes: []
  };

  // Local optimistic update
  const current = getStoredArticles();
  const updated = [newArticle, ...current];
  saveStoredArticles(updated);

  // Firestore update
  try {
    await setDoc(doc(db, 'asraworld_posts', id), newArticle);
  } catch (err) {
    console.warn('Could not publish article to Firestore, saved locally:', err);
  }

  return id;
}

export async function toggleArticleReaction(articleId: string, userId: string, type: 'like' | 'dislike'): Promise<void> {
  const current = getStoredArticles();
  const target = current.find((a) => a.id === articleId);
  if (!target) return;

  target.likes = Array.isArray(target.likes) ? target.likes : [];
  target.dislikes = Array.isArray(target.dislikes) ? target.dislikes : [];

  const hasLiked = target.likes.includes(userId);
  const hasDisliked = target.dislikes.includes(userId);

  if (type === 'like') {
    if (hasLiked) {
      target.likes = target.likes.filter((id) => id !== userId);
    } else {
      target.likes.push(userId);
      target.dislikes = target.dislikes.filter((id) => id !== userId);
    }
  } else {
    if (hasDisliked) {
      target.dislikes = target.dislikes.filter((id) => id !== userId);
    } else {
      target.dislikes.push(userId);
      target.likes = target.likes.filter((id) => id !== userId);
    }
  }

  saveStoredArticles([...current]);

  try {
    const postRef = doc(db, 'asraworld_posts', articleId);
    if (type === 'like') {
      if (hasLiked) {
        await updateDoc(postRef, { likes: arrayRemove(userId) });
      } else {
        await updateDoc(postRef, {
          likes: arrayUnion(userId),
          dislikes: arrayRemove(userId)
        });
      }
    } else {
      if (hasDisliked) {
        await updateDoc(postRef, { dislikes: arrayRemove(userId) });
      } else {
        await updateDoc(postRef, {
          dislikes: arrayUnion(userId),
          likes: arrayRemove(userId)
        });
      }
    }
  } catch (err) {
    console.warn('Could not sync article reaction to Firestore:', err);
  }
}

export function subscribeToComments(articleId: string, callback: (comments: Comment[]) => void) {
  const localComments = getStoredComments().filter((c) => c.articleId === articleId);
  callback(localComments);

  try {
    const q = query(
      collection(db, 'asraworld_comments'),
      where('articleId', '==', articleId)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const remote = snapshot.docs.map((d) => normalizeComment(d.data(), d.id));
        // Merge with local storage
        const allLocal = getStoredComments().filter((c) => c.articleId !== articleId);
        const merged = [...allLocal, ...remote];
        saveStoredComments(merged);
        callback(remote.sort((a, b) => a.ts - b.ts));
      } else {
        callback(localComments.sort((a, b) => a.ts - b.ts));
      }
    }, (err) => {
      console.warn('Firestore comments snapshot fallback:', err.message);
      callback(getStoredComments().filter((c) => c.articleId === articleId).sort((a, b) => a.ts - b.ts));
    });
    return unsubscribe;
  } catch {
    return () => {};
  }
}

export async function postComment(
  commentData: Omit<Comment, 'id' | 'ts' | 'likes' | 'dislikes'>
): Promise<Comment> {
  const id = 'comm_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
  const newComment: Comment = {
    ...commentData,
    id,
    ts: Date.now(),
    likes: [],
    dislikes: []
  };

  const all = getStoredComments();
  saveStoredComments([...all, newComment]);

  try {
    await setDoc(doc(db, 'asraworld_comments', id), newComment);
  } catch (err) {
    console.warn('Could not post comment to Firestore, saved locally:', err);
  }

  return newComment;
}

export async function toggleCommentReaction(commentId: string, userId: string, type: 'like' | 'dislike'): Promise<void> {
  const all = getStoredComments();
  const target = all.find((c) => c.id === commentId);
  if (!target) return;

  target.likes = Array.isArray(target.likes) ? target.likes : [];
  target.dislikes = Array.isArray(target.dislikes) ? target.dislikes : [];

  const hasLiked = target.likes.includes(userId);
  const hasDisliked = target.dislikes.includes(userId);

  if (type === 'like') {
    if (hasLiked) {
      target.likes = target.likes.filter((id) => id !== userId);
    } else {
      target.likes.push(userId);
      target.dislikes = target.dislikes.filter((id) => id !== userId);
    }
  } else {
    if (hasDisliked) {
      target.dislikes = target.dislikes.filter((id) => id !== userId);
    } else {
      target.dislikes.push(userId);
      target.likes = target.likes.filter((id) => id !== userId);
    }
  }

  saveStoredComments([...all]);

  try {
    const commRef = doc(db, 'asraworld_comments', commentId);
    if (type === 'like') {
      if (hasLiked) {
        await updateDoc(commRef, { likes: arrayRemove(userId) });
      } else {
        await updateDoc(commRef, {
          likes: arrayUnion(userId),
          dislikes: arrayRemove(userId)
        });
      }
    } else {
      if (hasDisliked) {
        await updateDoc(commRef, { dislikes: arrayRemove(userId) });
      } else {
        await updateDoc(commRef, {
          dislikes: arrayUnion(userId),
          likes: arrayRemove(userId)
        });
      }
    }
  } catch (err) {
    console.warn('Could not sync comment reaction to Firestore:', err);
  }
}
