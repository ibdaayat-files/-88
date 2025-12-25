
export type Category = 'Windows' | 'macOS' | 'General' | 'VSCode' | 'Browser';

export interface Shortcut {
  id: string;
  keys: string[];
  description: string;
  category: Category;
  importance: 'high' | 'medium' | 'low';
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
