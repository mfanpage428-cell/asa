export type Language = 'uz' | 'en' | 'ru';

export interface TopicSource {
  name: string;
  url: string;
}

export interface Topic {
  id: string;
  img: string;
  credit: string;
  title: Record<Language, string>;
  short: Record<Language, string>;
  fullArticle: Record<Language, string>;
  sources: TopicSource[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  text: string;
  authorId: string;
  authorName: string;
  authorHandle?: string;
  authorPhotoURL?: string;
  ts: number;
  likes: string[];
  dislikes: string[];
  commentCount?: number;
  topicId?: string;
}

export interface Comment {
  id: string;
  articleId: string;
  parentId: string | null;
  authorId: string;
  authorName: string;
  authorHandle?: string;
  authorPhotoURL?: string;
  text: string;
  ts: number;
  likes: string[];
  dislikes: string[];
  replyToAuthor?: string;
}

export interface UserProfile {
  uid: string;
  displayName: string;
  handle: string;
  email?: string;
  photoURL: string;
  bio?: string;
  createdAt: number;
}
