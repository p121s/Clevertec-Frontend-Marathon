import React, { useState } from 'react';

import eyeCloseImg from '../../images/svg/eye-close.svg';
import eyeOpenImg from '../../images/svg/eye-open.svg';

import { InputProps } from './input-interfaces';
import * as S from './input-styled';

export const Input = React.forwardRef(
  (
    { id, type, placeholder, notice, isValid, ...props }: InputProps,
    ref: ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined
  ): JSX.Element => {
    const [isClosePassword, setIsOpenPassword] = useState<boolean>(true);
    const thisTypePassword = 'text';  

    const handlerOpenClosePassword = (e: any) => {
      e.preventDefault();
      setIsOpenPassword(!isClosePassword);
    };

    return (
      <S.WrapperInput>
        <S.InputStyled
          ref={ref}
          id={id}
          type={type === 'password' && isClosePassword ? type : thisTypePassword}
          placeholder={placeholder}
          {...props}
        />
        <S.LabelStyled htmlFor={id}>{placeholder}</S.LabelStyled>
        {isValid ? <S.ValidData data-test-id='checkmark' /> : ''}
        <S.ParagraphNotice data-test-id='hint'>{notice}</S.ParagraphNotice>
        {type === 'password' ? (
          <S.OpenClosePasswordBtn
            img={isClosePassword ? eyeCloseImg : eyeOpenImg}
            onClick={handlerOpenClosePassword}
            data-test-id='eye-closed'
          />
        ) : (
          ''
        )}
      </S.WrapperInput>
    );
  }
);
