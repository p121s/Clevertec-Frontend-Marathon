// eslint-dsable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import { SearchInputProps } from './search-input-interfaces';

export const WrapperInput = styled.div<SearchInputProps>`
  position: relative;
  margin-right: 16px;

  @media screen and (max-width: 680px) {
    display: ${(props) => (props.isVisible ? 'block' : 'none')};
  }

  @media screen and (max-width: 350px) {
    display: ${(props) => (props.isVisible ? 'block' : 'none')};
  }
`;

export const SearchImg = styled.img`
  position: absolute;
  left: 20px;
  top: 13px;
  width: 12px;
  height: 12px;
  z-index: 15;

  @media screen and (max-width: 825px) {
    left: 13px;
    top: 13px;
  }

  @media screen and (max-width: 350px) {
    display: none;
  }
`;

export const Input = styled.input`
  width: 350px;
  height: 38px;
  padding-left: 40px;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 30px;
  border: none;
  color: #363636;
  caret-color: rgb(248, 54, 0);

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    color: #a7a7a7;
    line-height: 18px;
    letter-spacing: 0.1px;

    @media screen and (max-width: 680px) {
      color: transparent;
    }
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 910px) {
    width: 274px;
  }

  @media screen and (max-width: 680px) {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    padding-left: 0;
  }

  @media screen and (max-width: 680px) {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100vw - 128px);
    height: 40px;
    padding-left: 32px;
    border-radius: 30px;
    z-index: 15;

    &::placeholder {
      color: #a7a7a7;
    }
  }

  @media screen and (max-width: 450px) {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100vw - 32px);
    height: 40px;
    padding-left: 16px;
    border-radius: 30px;
    z-index: 15;

    &::placeholder {
      color: #a7a7a7;
    }
  }

  @media screen and (max-width: 320px) {
    height: 34px;
  }

`;
