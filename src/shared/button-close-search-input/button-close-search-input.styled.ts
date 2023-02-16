import styled from 'styled-components';

import { ButtonCloseProps } from './button-close-search-input.interfaces';

export const ButtonCloseStyled = styled.button<ButtonCloseProps>`
  position: absolute;
  top: 12px;
  right: 10px;
  width: 16px;
  height: 16px;
  background: none;
  display: ${(porps) => (porps.isVisible ? 'block' : 'none')};
  z-index: 16;
  border: none;

  @media screen and (max-width: 350px) {
    top: 8px;
    right: 16px;
  }
`;
