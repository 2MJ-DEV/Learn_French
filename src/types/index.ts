export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  audioUrl?: string;
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  title: string;
  content: string;
  vocabulary: VocabularyItem[];
}

export interface VocabularyItem {
  word: string;
  translation: string;
  context: string;
}

export interface UserProgress {
  currentBook: string;
  booksCompleted: number;
  readingLevel: string;
  totalReadingTime: number;
  badges: string[];
}