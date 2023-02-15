import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import arrowReviews from '../../images/svg/arrow-reviews.svg';

import { ArrowReviewsProps, ReviewImageProps } from './book-page-interfaces';

export const Main = styled.main`
  min-height: calc(100vh - 208px);

  @media screen and (max-width: 768px) {
    min-height: calc(100vh - 182px);
  }

  @media screen and (max-width: 320px) {
    min-height: calc(100vh - 191px);
  }
`;

export const BackgroundBreadCrumbs = styled.div`
  position: absolute;
  top: 91px;
  left: 0;
  width: 100%;
  margin-top: 27px;
  background-color: #f9f9fa;

  @media screen and (max-width: 320px) {
    top: 65px;
  }
`;

export const BreadCrumbs = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 1110px;
  padding: 20px 0;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    margin: 0 64px;
  }

  @media screen and (max-width: 320px) {
    margin: 0 16px;
  }
`;

export const ContentBreadCrumbs = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: #a7a7a7;
`;

export const Slash = styled.span`
  position: relative;
  top: 3px;
  margin: 15px;
  font-size: 20px;
  font-weight: bold;
`;

export const LinkBreadCrumbs = styled(NavLink)`
  display: inline;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: #a7a7a7;
  text-decoration: none;
`;

export const WrapperContent = styled.div`
  margin: 133px 0 42px;
  min-height: calc(100vh - 343px);

  @media screen and (max-width: 768px) {
    min-height: calc(100vh - 182px);
  }

  @media screen and (max-width: 320px) {
    min-height: calc(100vh - 191px);
  }
`;

export const BlockTitleAuthorBook = styled.div`
  flex-grow: 1;
`;

export const TitleBook = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.1px;
  color: #363636;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 32px;
  }

  @media screen and (max-width: 320px) {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 8px;
  }
`;

export const AuthorBook = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.1px;
  color: #a7a7a7;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
  }

  @media screen and (max-width: 320px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 42px;
  }
`;

export const BoldText = styled.b`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.1px;
  color: #363636;

  @media screen and (max-width: 768px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: 320px) {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }
`;

export const AboutBook = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #363636;
  margin-top: 62px;
  margin-bottom: 42px;

  & pre {
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: #363636;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
  }

  @media screen and (max-width: 768px) {
    clear: both;
  }

  @media screen and (max-width: 320px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const WrapperRate = styled.div`
  position: relative;
  clear: both;
`;

export const Hr = styled.hr`
  width: 350px;
  margin: 16px 0;
  border: 1px solid #ebebeb;

  @media screen and (max-width: 768px) {
    width: 305px;
  }
  @media screen and (max-width: 320px) {
    width: 209px;
    margin: 8px 0;
  }
`;

export const RateCount = styled.span`
  position: absolute;
  top: 60px;
  left: 160px;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.1px;
  color: #363636;

  @media screen and (max-width: 768px) {
    top: 57px;
  }

  @media screen and (max-width: 320px) {
    top: 53px;
  }
`;

export const WrapperDetailedInformation = styled.div`
  margin: 57px 0;
`;

export const WrapperReviews = styled.div`
  margin-bottom: 45px;
`;

export const ArrowReviews = styled.button<ArrowReviewsProps>`
  display: inline-block;
  position: relative;
  top: 6px;
  left: 29px;
  width: 24px;
  height: 24px;
  background: url(${arrowReviews}) center / cover no-repeat;
  border: none;
  transform: ${(props) => (props.isReviewsOpen ? 'rotate(180deg)' : 'rotate(0)')};
`;

export const ReviewsBlock = styled.div``;

export const CountReviews = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #a7a7a7;
  margin-left: 6px;
`;

export const Review = styled.div`
  width: 730px;
  margin-bottom: 45px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ReviewUserData = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  margin-bottom: 18px;

  @media screen and (max-width: 320px) {
    margin-bottom: 11px;
  }
`;

export const Avatar = styled.div<ReviewImageProps>`
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: url(${(props) => props.image}) center / cover no-repeat;
`;
export const WrapperNameDate = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 24px;
  flex-wrap: wrap;

  @media screen and (max-width: 320px) {
    flex-direction: column;
    gap: 3px;
  }
`;

export const NameUser = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #727272;

  @media screen and (max-width: 320px) {
    font-size: 15px;
    line-height: 20px;
  }
`;

export const DateReview = styled(NameUser)``;

export const ReviewText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #363636;

  @media screen and (max-width: 320px) {
    font-size: 15px;
    line-height: 20px;
  }
`;
