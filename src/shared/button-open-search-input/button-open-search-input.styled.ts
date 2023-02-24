import styled from 'styled-components';

import { ButtonOpenStyledProps } from './button-open-search-input.interfaces';

export const ButtonOpenStyled = styled.button<ButtonOpenStyledProps>`
  display: none;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 30px;
  border: none;
  background-color: white;
  margin-right: 16px;

  @media screen and (max-width: 350px) {
    display: ${props => props.isVisible ? 'inline-block' : 'none'};
    width: 32px;
    height: 32px;
  }
`;
