import MaskedInput from 'react-text-mask';
import styled from 'styled-components';

import { LabelStyledProps, OpenClosePasswordBtnProps } from './masked-input-intefaces';

export const WrapperInput = styled.div`
  position: relative;
  margin-bottom: 26px;
`;

export const LabelStyled = styled.label<LabelStyledProps>`
  ${(props) =>
    props.isFocus
      ? `
        display: block;
        position: absolute;
        top: 6px;
        left: 12px;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.2px;
        color: #a7a7a7;
      `
      : `
        display: block;
        position: absolute;
        top: 19px;
        left: 12px;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.1px;
        color: #363636;
      `}
`;

export const MaskedInputStyled = styled(MaskedInput)`
  width: 100%;
  height: 56px;
  background: #f9f9fa;
  border-radius: 4px;
  border: none;
  border-bottom: 1px solid #bfc4c9;
  padding: 19px 12px;

  &::placeholder {
    display: none;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid #bfc4c9;
  }
`;

export const OpenClosePasswordBtn = styled.button<OpenClosePasswordBtnProps>`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  background: url(${(props) => props.img}) center / cover no-repeat;
  border: none;
`;

export const ParagraphNotice = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #a7a7a7;
  margin: 2px 12px 18px;
`;
