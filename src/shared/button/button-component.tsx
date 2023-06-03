import { SyntheticEvent } from 'react';

import * as S from './button.styles';
import { IButton } from './button-interfaces';

export const Button = ({ typeBtn, size = 'small', width, children, img, onClick }: IButton): JSX.Element => {

  const handlerClick = (e: SyntheticEvent) => {    
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <S.StyledButton typeBtn={typeBtn} size={size} width={width} onClick={handlerClick}>
      {children}
      {img ? (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M15 6L21 12M21 12L15 18M21 12H3'
            stroke='#BFC4C9'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ) : (
        ''
      )}
    </S.StyledButton>
  );
};
