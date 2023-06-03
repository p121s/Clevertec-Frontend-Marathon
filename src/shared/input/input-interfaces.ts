import { ReactNode } from 'react';

export interface InputProps {
  id: string;
  name?: string;
  type: string;
  placeholder: string;
  notice?: ReactNode | string;
  isValid?: boolean;
}

export interface OpenClosePasswordBtnProps {
  img: string;
}
