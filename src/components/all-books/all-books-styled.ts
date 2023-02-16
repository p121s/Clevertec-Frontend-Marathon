import styled from 'styled-components';

import { CardBookStyledProps } from './all-books-interfaces';

export const Section = styled.section`
  display: flex;
  margin: 47px 0 62px;
`;

export const WrapperContent = styled.div`
  width: 100%;
`;

export const WrapperCards = styled.div<CardBookStyledProps>`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  flex-direction: ${(props) => (props.isLinear ? 'column' : 'row')};
  gap: ${(props) => (props.isLinear ? '16px' : '24px 21px')};

  @media screen and (max-width: 768px) {
    gap: ${(props) => (props.isLinear ? '16px' : '32px 35px')};
  }
`;
