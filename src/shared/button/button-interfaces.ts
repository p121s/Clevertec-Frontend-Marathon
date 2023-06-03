import { ReactNode } from 'react';

export interface IButton {
  children: ReactNode;
  size?: 'large' | 'small';
  width?: number | 'full';
  typeBtn: 'primary' | 'secondary' | 'text';
  disabled?: boolean;
  img?: boolean;
  onClick?: () => void;
}

export interface ButtonStyledProps {
  type?: 'submit' | 'button';
  size?: 'large' | 'small';
  width?: number | 'full';
  typeBtn: 'primary' | 'secondary' | 'text';
  img?: string;
}
