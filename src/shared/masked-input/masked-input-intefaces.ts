import { ReactNode } from 'react';

export interface MaskedInputProps {
  id: string;
  mask: Array<string | RegExp>;
  guide: boolean;
  placeholderChar: string;
  value: string;
  type: string;
  placeholder: string;
  notice?: ReactNode | string;
  onChange: () => void;
}

export interface LabelStyledProps {
  isFocus: boolean;
}

export interface OpenClosePasswordBtnProps {
  img: string;
}
