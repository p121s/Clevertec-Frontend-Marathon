import React, { useState } from 'react';

import eyeCloseImg from '../../images/svg/eye-close.svg';
import eyeOpenImg from '../../images/svg/eye-open.svg';

import { MaskedInputProps } from './masked-input-intefaces';
import * as S from './masked-input-styled';

export const MaskedInput = React.forwardRef(
  (
    { id, mask, guide, placeholderChar, placeholder, type, notice, value, onChange, ...props }: MaskedInputProps,
    ref: any
  ): JSX.Element => {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [isClosePassword, setIsOpenPassword] = useState<boolean>(true);
    const thisTypePassword = 'text';

    const handlerFocus = () => {
      setIsFocus(true);
    };

    const handlerBlur = () => {
      setIsFocus(false);
    };

    const handlerOpenClosePassword = (e: any) => {
      e.preventDefault();
      setIsOpenPassword(!isClosePassword);
    };

    return (
      <S.WrapperInput>
        <S.LabelStyled htmlFor={id} isFocus={value ? true : isFocus}>
          {' '}
          {/* value ? true :  */}
          {placeholder}
        </S.LabelStyled>
        <S.MaskedInputStyled
          ref={ref}
          mask={mask}
          guide={guide}
          placeholderChar={placeholderChar}
          value={value}
          id={id}
          type={type === 'password' && isClosePassword ? type : thisTypePassword}
          onFocus={handlerFocus}
          onBlur={handlerBlur}
          onChange={onChange}
          {...props}
        />
        <S.ParagraphNotice>{notice}</S.ParagraphNotice>
        {type === 'password' ? (
          <S.OpenClosePasswordBtn img={isClosePassword ? eyeCloseImg : eyeOpenImg} onClick={handlerOpenClosePassword} />
        ) : (
          ''
        )}
      </S.WrapperInput>
    );
  }
);
