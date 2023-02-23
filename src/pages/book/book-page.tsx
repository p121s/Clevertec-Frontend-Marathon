import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { InfoTables } from '../../components/info-tables';
import { InfoTablesProps } from '../../components/info-tables/info-tables-interfaces';
import { Menu } from '../../components/menu';
import { SwiperBook } from '../../components/swiper';
import { useResize } from '../../hooks/use-resize';
import noAvatar from '../../images/Ellipse.png';
import { Button } from '../../shared/button';
import { Loader } from '../../shared/loader';
import { Rate } from '../../shared/rating';
import { getCategoriesFetch } from '../../store/reducers/all-categories';
import { getOneBookFetch } from '../../store/reducers/one-book';

import { IBook, IComment } from './book-page-interfaces';
import * as S from './book-page-styled';

import 'moment/locale/ru';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

export const BookPage = (): JSX.Element => {
  const params = useParams();
  const dispatch = useDispatch();
  const book: IBook = useSelector((state: any) => state.oneBookReducer.book);
  const isLoadingBook = useSelector((state: any) => state.oneBookReducer.isLoading);
  const categories = useSelector((state: any) => state.allCategoriesReducer.menu)[0].submenu;
  const [isReviewsOpen, setIsReviewsOpen] = useState<boolean>(false);
  const [dataForInfoTables, setDataForInfoTables] = useState({
    publish: '',
    issueYear: '',
    pages: '',
    cover: '',
    format: '',
    categories: [''],
    weight: '',
    ISBN: '',
    producer: '',
  });
  const { isTablet } = useResize();

  useEffect(() => {
    dispatch(getOneBookFetch(params));
  }, [dispatch, params]);

  useEffect(() => {
    if(!isTablet && !categories) {
      dispatch(getCategoriesFetch());
    }
  }, [categories, dispatch, isTablet]);

  useEffect(() => {
    if (book !== null) {
      setDataForInfoTables({
        publish: book.publish,
        issueYear: book.issueYear,
        pages: book.pages,
        cover: book.cover,
        format: book.format,
        categories: book.categories as string[],
        weight: book.weight,
        ISBN: book.ISBN,
        producer: book.producer,
      });
    }
  }, [book]);

  const handlerOpenReviews = () => {
    setIsReviewsOpen(!isReviewsOpen);
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
                <S.LinkBreadCrumbs to={`/${params.category}`} data-test-id='breadcrumbs-link'>
                  {categories?.find((category: { path: string | undefined }) => category.path === params.category).name}
                </S.LinkBreadCrumbs>
                <S.Slash>/</S.Slash>
                <span data-test-id='book-name'>{`${book?.title || ''}`}</span>
              </S.ContentBreadCrumbs>
            </S.BreadCrumbs>
          </S.BackgroundBreadCrumbs>
          {book && !isLoadingBook ? (
            <S.WrapperContent>
              <SwiperBook images={book?.images} />
              <S.BlockTitleAuthorBook>
                <S.TitleBook data-test-id='book-title'>{book?.title || ''}</S.TitleBook>
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
                <InfoTables data={dataForInfoTables} />
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
                      <S.Review key={comment.id}>
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
