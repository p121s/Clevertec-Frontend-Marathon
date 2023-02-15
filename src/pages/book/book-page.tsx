/* eslint-disable complexity */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { FreeMode, Pagination, Thumbs } from 'swiper';

import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { useResize } from '../../hooks/use-resize';
import noImage from '../../images/bgCat.png';
import noAvatar from '../../images/Ellipse.png';
import { Button } from '../../shared/button';
import { Loader } from '../../shared/loader';
import { Menu } from '../../shared/menu';
import { Rate } from '../../shared/rating';
import { getOneBookFetch } from '../../store/reducers/one-book';

import { IBook, IComment, ImageBook } from './book-page-interfaces';
import * as S from './book-page-styled';

import 'moment/locale/ru';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';



export const BookPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const book: IBook = useSelector((state: any) => state.oneBookReducer.book);
  const isLoadingBook = useSelector((state: any) => state.oneBookReducer.isLoading);
  const bookId = useSelector((state: any) => state.oneBookReducer.id);
  const menu = useSelector((state: any) => state.allCategoriesReducer.menu);
  const [isReviewsOpen, setIsReviewsOpen] = useState<boolean>(false);
  const { isTablet } = useResize();

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const pagination = {
    clickable: true,
    dynamicMainBullets: 8,
    dynamicBullets: true,
    renderBullet(index: number, className: string) {
      return `<div class="${className}"></div>`;
    },
  };

  useEffect(() => {
    dispatch(getOneBookFetch(params));
  }, [dispatch, params]);

  const handlerOpenReviews = () => {
    setIsReviewsOpen(!isReviewsOpen);
  };

  const handleSwiper = (thumbs: any) => {
    setThumbsSwiper(thumbs);
  };

  return (
    <React.Fragment>
      {isLoadingBook ? <Loader /> : ''}
      <Header />
      {isTablet ? <Menu /> : ''}
      <S.Main>
        <section>
          <S.BackgroundBreadCrumbs>
            <S.BreadCrumbs>
              <S.ContentBreadCrumbs>
                <S.LinkBreadCrumbs
                to='/'
                  // to={
                  //   menu[0].submenu
                  //     ? `/${menu[0].submenu.find((category: any) => category.name === params.category).path}`
                  //     : '/'
                  // }
                >
                  {params.category}
                </S.LinkBreadCrumbs>
                <S.Slash>/</S.Slash>
                {`${book?.title || ''}`}
              </S.ContentBreadCrumbs>
            </S.BreadCrumbs>
          </S.BackgroundBreadCrumbs>
          {book && !isLoadingBook ? (
            <S.WrapperContent>
              <S.WrapperSwiper>
                <S.SwiperImg
                  spaceBetween={0}
                  pagination={isTablet ? pagination : false}
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                  modules={[FreeMode, Thumbs, Pagination]}
                  data-test-id='slide-big'
                >
                  {book?.images.length === 0 ? (
                    <S.Slide>
                      <img src={`${noImage}`} alt='Book' />
                    </S.Slide>
                  ) : (
                    book?.images.map((image: ImageBook) => (
                      <S.Slide
                        key={`slide-${image.url}`}
                        className={`${({ isActive }: any) => (isActive ? '.swiper-slide-visible' : '')}`}
                      >
                        <img src={`https://strapi.cleverland.by${image.url}`} alt='Book' />
                      </S.Slide>
                    ))
                  )}
                </S.SwiperImg>
                {isTablet || book?.images.length === 0 || book?.images.length === 1 ? (
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
                    {book?.images.length === 0 ? (
                      <S.SlideMini data-test-id='slide-mini'>
                        <img src={`${noImage}`} alt='Book' />
                      </S.SlideMini>
                    ) : (
                      book?.images.map((image: ImageBook) => (
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
              <S.BlockTitleAuthorBook>
                <S.TitleBook>{book?.title}</S.TitleBook>
                <S.AuthorBook>{`${book?.authors.join(', ')}, ${book?.issueYear}`}</S.AuthorBook>
              </S.BlockTitleAuthorBook>
              <Button width={isTablet ? 306 : 350} size='large'>
                Забронировать
              </Button>
              <S.AboutBook>
                <S.BoldText>О книге</S.BoldText>
                <S.Hr />
                <pre>{book?.description}</pre>
              </S.AboutBook>
              <S.WrapperRate>
                <S.BoldText>Рейтинг</S.BoldText>
                <S.Hr />
                <Rate rating={book?.rating || 0} />
                <S.RateCount>{book?.rating === 0 ? '' : book?.rating}</S.RateCount>
              </S.WrapperRate>
              <S.WrapperDetailedInformation>
                <S.BoldText>Подробная информация</S.BoldText>
                <S.Hr />
                <S.WrapperTables>
                  <S.Table>
                    <tbody>
                      <S.Tr>
                        <S.TdName>Издательство</S.TdName>
                        <S.TdData>{book?.publish}</S.TdData>
                      </S.Tr>
                      <S.Tr>
                        <S.TdName>Год издания</S.TdName>
                        <S.TdData>{book?.issueYear}</S.TdData>
                      </S.Tr>
                      <S.Tr>
                        <S.TdName>Страниц</S.TdName>
                        <S.TdData>{book?.pages}</S.TdData>
                      </S.Tr>
                      <S.Tr>
                        <S.TdName>Переплёт</S.TdName>
                        <S.TdData>{book?.cover}</S.TdData>
                      </S.Tr>
                      <S.Tr>
                        <S.TdName>Формат</S.TdName>
                        <S.TdData>{book?.format}</S.TdData>
                      </S.Tr>
                    </tbody>
                  </S.Table>
                  <S.Table>
                    <tbody>
                      <S.Tr>
                        <S.TdName>Жанр</S.TdName>
                        <S.TdData>{book?.categories.join(', ')}</S.TdData>
                      </S.Tr>
                      <S.Tr>
                        <S.TdName>Вес</S.TdName>
                        <S.TdData>{book?.weight}</S.TdData>
                      </S.Tr>
                      <S.Tr>
                        <S.TdName>ISBN</S.TdName>
                        <S.TdData>{book?.ISBN}</S.TdData>
                      </S.Tr>
                      <S.Tr>
                        <S.TdName>Изготовитель</S.TdName>
                        <S.TdData>{book?.producer}</S.TdData>
                      </S.Tr>
                    </tbody>
                  </S.Table>
                </S.WrapperTables>
              </S.WrapperDetailedInformation>
              <S.WrapperReviews>
                <S.BoldText>Отзывы</S.BoldText>
                <S.CountReviews>{book.comments ? book.comments.length : 0}</S.CountReviews>
                {book.comments && book.comments.length ? (
                  <S.ArrowReviews
                    isReviewsOpen={isReviewsOpen}
                    onClick={handlerOpenReviews}
                    data-test-id='button-hide-reviews'
                  />
                ) : (
                  ''
                )}
                {isReviewsOpen ? book?.comments.length === 0 ? '' : <S.Hr /> : ''}
                {isReviewsOpen ? (
                  <S.ReviewsBlock>
                    {book?.comments.map((comment: IComment) => (
                      <S.Review>
                        <S.ReviewUserData>
                          <S.Avatar
                            image={
                              comment.user.avatarUrl === null
                                ? noAvatar
                                : `https://strapi.cleverland.by${comment.user.avatarUrl}`
                            }
                          />
                          <S.WrapperNameDate>
                            <S.NameUser>{`${comment.user.firstName} ${comment.user.lastName}`}</S.NameUser>
                            <S.DateReview>{moment(comment.createdAt).format('DD MMMM YYYY')}</S.DateReview>
                          </S.WrapperNameDate>
                        </S.ReviewUserData>
                        <Rate rating={comment?.rating || 0} />
                        <S.ReviewText>{comment.text}</S.ReviewText>
                      </S.Review>
                    ))}
                  </S.ReviewsBlock>
                ) : (
                  ''
                )}
              </S.WrapperReviews>
              <Button width={isTablet ? 'full' : 350} size='large' data-test-id='button-rating'>
                оценить книгу
              </Button>
            </S.WrapperContent>
          ) : (
            ''
          )}
        </section>
      </S.Main>
      <Footer />
    </React.Fragment>
  );
};
