import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

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