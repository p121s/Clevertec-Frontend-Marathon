import { ReactNode } from 'react';

export interface NotificationBlockProps {
  children: ReactNode;
  type: 'empty-category' | 'search-result-not-found';
}
