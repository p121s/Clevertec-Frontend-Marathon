import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { CardBookStyledProps } from './card-book-interfaces';

export const WrapperCard = styled(NavLink)<CardBookStyledProps>`
  text-decoration: none;
  ${(props) => (props.isLinear ? 'display: flex;' : '')}
  padding: ${(props) => (props.isLinear ? '16px' : '8px 8px 16px')};
  width: ${(props) => (props.isLinear ? '100%' : '190px')};
  max-width: 825px;
  ${(props) => (props.isLinear ? '' : 'max-hieght: 470px')};
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 10px;
  box-sizing: border-box;
  margin: 0;

  @media screen and (max-width: 545px) {
    width: 100%;
    padding: ${(props) => (props.isLinear ? '16px 16px 16px 8px' : '8px 16px 16px  ')};
  }
`;

export const ImgBook = styled.div<CardBookStyledProps>`
  width: ${(props) => (props.isLinear ? '120px' : '174px')};
  height: ${(props) => (props.isLinear ? '170px' : '242px')};
  border: 1px solid #a7a7a7;
  border-radius: 10px;
  background: url(${(props) => props.image}) center / cover no-repeat;
  margin: 0 auto;

  @media screen and (max-width: 320px) {
    width: ${(props) => (props.isLinear ? '70px' : '174px')};
    height: ${(props) => (props.isLinear ? '100px' : '242px')};
  }
`;

export const WrapperContentLinearCard = styled.div`
  width: 100%;
  margin-left: 16px;
`;

export const WrapperCardRateAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

export const TitleBook = styled.div<CardBookStyledProps>`
  ${(props) =>
    props.isLinear
      ? `
        margin-bottom: 8px;
      `
      : `
    height: 55px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
  color: #363636;
`;

export const TitleH2 = styled.h2<CardBookStyledProps>`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-size: ${(props) => (props.isLinear ? '24px' : '14px')};
  font-weight: ${(props) => (props.isLinear ? '700' : '600')};
  letter-spacing: 0.1px;

  @media screen and (max-width: 768px) {
    font-size: ${(props) => (props.isLinear ? '24px' : '12px')};
    font-weight: ${(props) => (props.isLinear ? '700' : '700')};
  }

  @media screen and (max-width: 320px) {
    font-size: ${(props) => (props.isLinear ? '14px' : '14px')};
    font-weight: ${(props) => (props.isLinear ? '600' : '600')};
  }
`;

export const AuthorBook = styled.div`
  height: 40px;
  color: #727272;
  margin-bottom: 16px;
`;

export const AuthorH2 = styled.h2<CardBookStyledProps>`
  font-size: ${(props) => (props.isLinear ? '16px' : '14px')};
  font-weight: 400;
  margin-bottom: ${(props) => (props.isLinear ? '28px' : '19px')};
  letter-spacing: 0.1px;

  @media screen and (max-width: 768px) {
    margin-bottom: ${(props) => (props.isLinear ? '' : '23px')};
  }

  @media screen and (max-width: 320px) {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: ${(props) => (props.isLinear ? '5px' : '32px')};
  }
`;
