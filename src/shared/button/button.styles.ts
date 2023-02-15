import styled from 'styled-components';

import { ButtonStyledProps } from './button-interfaces';

export const StyledButton = styled.button<ButtonStyledProps>`
  width: ${(props) =>
    props.width
      ? `${props.width === 'full' ? '100%' : `${props.width}px`}`
      : props.size === 'small'
      ? '120px'
      : '160px'};
  height: ${(props) => (props.size === 'small' ? '40px' : '52px')};
  border-radius: ${(props) => (props.size === 'small' ? '20px' : '30px')};
  background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
  color: white;
  border: none;
  font-weight: 600;
  font-size: ${(props) => (props.size === 'small' ? '12px' : '16px')};
  line-height: 18px ${(props) => (props.size === 'small' ? '18px' : '150%')};
  letter-spacing: 0.2px;
  text-transform: uppercase;

  &:hover {
    border: 1px solid #ff740f;
    box-shadow: 0px 2px 5px rgba(54, 54, 54, 0.1);
    border-radius: 30px;
  }

  &:active {
    box-shadow: 0px 3px 4px rgba(222, 125, 11, 0.2), 0px 1px 10px rgba(249, 89, 8, 0.2);
    border-radius: 30px;
  }

  @media screen and (max-width: 320px) {
    width: 100%;
    height: 40px;
  }
`;
