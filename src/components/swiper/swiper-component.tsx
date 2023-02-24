import { useState } from 'react';
import { FreeMode, Pagination, Thumbs } from 'swiper';
import { ThumbsEvents } from 'swiper/types';

import { isTablet } from '../../constants/screen-sizes';
import noImage from '../../images/bgCat.png';

import { ImageBook,SwiperProps } from './swiper.interfaces';
import * as S from './swiper-styled';

export const SwiperBook = ({images}: SwiperProps): JSX.Element => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const handleSwiper = (thumbs: ThumbsEvents) => {
    setThumbsSwiper(thumbs);
  };

  const pagination = {
    clickable: true,
    dynamicMainBullets: 8,
    dynamicBullets: true,
    renderBullet(index: number, className: string) {
      return `<div class="${className}"></div>`;
    },
  };

  return (
    <S.WrapperSwiper>
      <S.SwiperImg
        spaceBetween={0}
        pagination={isTablet ? pagination : false}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Thumbs, Pagination]}
        data-test-id='slide-big'
      >
        {images.length === 0 ? (
          <S.Slide>
            <img src={`${noImage}`} alt='Book' />
          </S.Slide>
        ) : (
          images.map((image: ImageBook) => (
            <S.Slide
              key={`slide-${image.url}`}
              className={`${({ isActive }: any) => (isActive ? '.swiper-slide-visible' : '')}`}
            >
              <img src={`https://strapi.cleverland.by${image.url}`} alt='Book' />
            </S.Slide>
          ))
        )}
      </S.SwiperImg>
      {isTablet || images.length === 0 || images.length === 1 ? (
        ''
      ) : (
        <S.SwiperImgMini
          onSwiper={handleSwiper}
          spaceBetween={10}
          slidesPerView='auto'
          centeredSlides={true}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
        >
          {images.length === 0 ? (
            <S.SlideMini data-test-id='slide-mini'>
              <img src={`${noImage}`} alt='Book' />
            </S.SlideMini>
          ) : (
            images.map((image: ImageBook) => (
              <S.SlideMini
                key={`slide-mini-${image.url}`}
                className={`${({ isActive }: any) => (isActive ? '.swiper-slide-thumb-active' : '')}`}
                data-test-id='slide-mini'
              >
                {isTablet ? '' : <img src={`https://strapi.cleverland.by${image.url}`} alt='Book' />}
              </S.SlideMini>
            ))
          )}
        </S.SwiperImgMini>
      )}
    </S.WrapperSwiper>
  );
};
