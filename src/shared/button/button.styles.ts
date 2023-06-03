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
  font-weight: 600;
  font-size: ${(props) => (props.size === 'small' ? '12px' : '16px')};
  line-height: ${(props) => (props.size === 'small' ? '18px' : '150%')};
  letter-spacing: 0.2px;
  text-transform: uppercase;

  ${(props) =>
    props.typeBtn === 'primary'
      ? `
      background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
      color: white;
      border: none;
  `
      : props.typeBtn === 'secondary'
      ? `
      background: white;
      color: #363636;
      border: 1px solid #BFC4C9;
  `
      : props.typeBtn === 'text'
      ? `
      display: inline-flex;
      align-items: center;
      width: auto;
      height: 24px;
      gap: 16px;
      background: none;
      border: none;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      color: #363636;
      margin-left: 16px;

      & svg {
        position: relative;
        top: -1px;
      }
      `
      : ''}

  &:hover {
    ${(props) =>
      props.typeBtn === 'primary'
        ? `
        border: 1px solid #ff740f;
        box-shadow: 0px 2px 5px rgba(54, 54, 54, 0.1);
        border-radius: 30px;
        `
        : props.typeBtn === 'secondary'
        ? `
        border: 1px solid #A7A7A7;
        box-shadow: 0px 2px 5px rgba(54, 54, 54, 0.1);
        `
        : props.typeBtn === 'text' ? `
        & svg path {
          stroke: #363636;
        } 
        ` : ''}

    &:disabled {
      ${(props) =>
        props.typeBtn === 'primary'
          ? `
        border: none;
        box-shadow: none;
      `
          : props.typeBtn === 'secondary'
          ? `
        background: #F9F9FA;
        border: 1px solid #BFC4C9;
        box-shadow: none;  
      `
          : ''}
    }
  }

  &:active {
    ${props => props.typeBtn === 'primary' || props.typeBtn === 'secondary' ? `
    box-shadow: 0px 3px 4px rgba(222, 125, 11, 0.2), 0px 1px 10px rgba(249, 89, 8, 0.2);
    border-radius: 30px;
    ` : props.typeBtn === 'text' ? `
    background: linear-gradient(233.73deg, #F83600 -16.08%, #F9D423 327.37%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;


    & svg path {
      stroke: #F83600;
    }
    ` : ''}
    

    &:disabled {
      ${(props) =>
        props.typeBtn === 'primary'
          ? 'box-shadow: none;'
          : props.typeBtn === 'secondary'
          ? `
        background: #F9F9FA;
        box-shadow: none; 
      `
          : ''}
    }
  }

  &:disabled {
    ${(props) =>
      props.typeBtn === 'primary'
        ? 'background: #ebebeb;'
        : props.typeBtn === 'secondary'
        ? `
      color: #A7A7A7;
      background: #F9F9FA;
      `
        : ''}
  }

  @media screen and (max-width: 320px) {
    width: 100%;
    height: 40px;
  }
`;
