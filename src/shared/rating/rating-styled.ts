import styled from 'styled-components';

import star from '../../images/Star.png';

import { RateProps } from './rating-interfaces';

const BlockSizes = styled.div`
  width: 150px;
  height: 19px;
`;

export const RateBook = styled(BlockSizes)<RateProps>`
  background: linear-gradient(90deg, #ffbc1f ${(props) => props.rating * 20}%, #ffffff ${(props) => props.rating * 20}%);
  margin: ${(props) => (props.isLinear ? '0' : '18px 0')};

  @media screen and (max-width: 320px) {
    margin: ${(props) => (props.isLinear ? '0 0 18px 0' : '18px 0')};
  }
`;

export const Stars = styled(BlockSizes)`
  background: url(${star}) repeat-x;
`;

export const NoRatings = styled(BlockSizes)`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: #a7a7a7;
`;
