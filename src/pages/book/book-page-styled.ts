import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

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

export const WrapperSwiper = styled.div`
  position: relative;
  width: 445px;
  height: 700px;
  float: left;
  margin-right: 30px;
  margin-bottom: 42px;

  @media screen and (max-width: 768px) {
    display: block;
    width: 136px;
    height: 233px;
    margin-bottom: 48px;
  }

  @media screen and (max-width: 320px) {
    display: block;
    width: 188px;
    height: 294.56px;
    margin: 0 auto 16.44px;
    float: none;
  }
`;

export const SwiperImg = styled(Swiper)`
  width: 445px;
  height: 593px;
  margin-bottom: 17px;

  &.swiper-slide-thumb-active {
    border: 1px solid #f83600;
  }

  @media screen and (max-width: 768px) {
    width: 136px;
    height: 232px;
    margin-bottom: 25px;
    padding-bottom: 34px;
  }

  @media screen and (max-width: 320px) {
    width: 188px;
    height: 293.56px;
    margin-bottom: 25px;
    padding-bottom: 34px;
  }

  .swiper-pagination-bullet {
    @media screen and (max-width: 768px) {
      width: 7px;
      height: 7px;
      background: #bfc4c9;
      border: none;
    }
  }

  .swiper-pagination-bullet-active {
    @media screen and (max-width: 768px) {
      width: 9px;
      height: 9px;
      background: #363636;
      border: none;
    }
  }
`;

export const SwiperImgMini = styled(Swiper)`
  width: 445px;
  height: 86px;

  @media screen and (max-width: 768px) {
    width: 136px;
    height: 233px;
  }

  @media screen and (max-width: 320px) {
    display: block;
    width: 188px;
    height: 294.59px;
    margin: 0 auto 16.44px;
    float: none;
  }
`;

export const Slide = styled(SwiperSlide)`
  width: 445px;
  height: 593px;
  border: 1px solid #a7a7a7;
  border-radius: 10px;

  & img {
    border-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    width: 136px;
    height: 198px;
  }

  @media screen and (max-width: 320px) {
    display: block;
    width: 188px;
    height: 259.59px;
    margin: 0 auto 16.44px;
    float: none;
  }

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SlideMini = styled(SwiperSlide)`
  width: 65px;
  height: 86px;
  border: 1px solid #a7a7a7;
  border-radius: 3px;

  & img {
    border-radius: 3px;
  }

  &.swiper-slide-thumb-active {
    border: 1px solid #f83600;
  }

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
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

export const WrapperTables = styled.div`
  display: flex;

  @media screen and (max-width: 320px) {
    flex-direction: column;
  }
`;

export const Table = styled.table`
  width: 50%;

  @media screen and (max-width: 320px) {
    width: 100%;
  }
`;

export const Tr = styled.tr`
  padding: 16px 0;
`;

export const TdName = styled.td`
  width: 50%;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #a7a7a7;
  padding: 8px 0;
  vertical-align: top;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }
  @media screen and (max-width: 320px) {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2px;
  }
`;

export const TdData = styled.td`
  width: 50%;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #363636;
  padding: 8px 0;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }

  @media screen and (max-width: 320px) {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2px;
  }
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
