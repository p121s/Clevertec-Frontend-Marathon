import { ReactNode } from 'react';

export interface ModalForUserActionsProps {
  linkGoBackTitle?: string;
  step?: number;
  title: string;
  children: ReactNode;
  isLinkGoBack: boolean;
}
