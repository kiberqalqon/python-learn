export type Theme = 'light' | 'dark';

export interface Settings {
  theme: Theme;
}

export interface PythonTopic {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  content: string;
}