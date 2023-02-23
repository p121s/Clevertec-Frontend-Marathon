import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { NotificationBlock } from '../../shared/notification-block';
import { getBooksFetch } from '../../store/reducers/all-books';
import { sortAscendingDescending } from '../../store/reducers/sort-search-books';
import { CardBook } from '../card-book';
import { SearchSortPanel } from '../search-sort-panel';

import { BookProps } from './all-books-interfaces';
import * as S from './all-books-styled';

export const AllBooks = (): JSX.Element => {
  const allBooks = useSelector((state: any) => state.allBooksReducer.books);
  const [sortAllBooks, setSortAllBooks] = useState<BookProps[]>([]);
  const [categoryBooks, setCategoryBooks] = useState<BookProps[]>([]);
  const [searchBooks, setSearchBooks] = useState<BookProps[]>([]);
  const params = useParams();
  const categories = useSelector((state: any) => state.allCategoriesReducer.menu)[0].submenu;
  const dispatch = useDispatch();
  const [isLinear, setIsLinear] = useState<boolean>(false);
  const isDescendingRanking = useSelector((state: any) => state.sortSearchBooksReducer.isDescendingRanking);
  const searchText = useSelector((state: any) => state.sortSearchBooksReducer.searchText);

  console.log(searchText, searchBooks);

  useEffect(() => {
    dispatch(getBooksFetch());
  }, [dispatch]);

  useEffect(() => {
    const newArrAllBooks = allBooks.slice();
    let sortArr;

    if (isDescendingRanking) {
      sortArr = newArrAllBooks.sort((a: { rating: number }, b: { rating: number }) => +b.rating - +a.rating);
    } else {
      sortArr = newArrAllBooks.sort((a: { rating: number }, b: { rating: number }) => +a.rating - +b.rating);
    }

    setSortAllBooks(sortArr);
  }, [allBooks, isDescendingRanking]);

  useEffect(() => {
    if (params.category) {
      setCategoryBooks(
        sortAllBooks.filter((book: any) =>
          book?.categories.includes(
            categories.find((category: { path: string | undefined }) => category.path === params.category).name
          )
        )
      );
    } else {
      setCategoryBooks([]);
    }
  }, [categories, params.category, sortAllBooks]);

  useEffect(() => {
    if (params.category === 'all' || !params.category) {
      setSearchBooks(sortAllBooks.filter((book) => book.title.toLowerCase().includes(searchText.toLowerCase())));
    } else {
      setSearchBooks(categoryBooks.filter((book) => book.title.toLowerCase().includes(searchText.toLowerCase())));
    }
  }, [categoryBooks, params.category, searchText, sortAllBooks]);

  const handlerHighlightingInText = (title: string): ReactNode => {
    const firstPartTitle = title.slice(0, title.toLowerCase().indexOf(searchText.toLowerCase()));
    const hightlightedPart = title.slice(title.toLowerCase().indexOf(searchText.toLowerCase()), title.toLowerCase().indexOf(searchText.toLowerCase()) + searchText.length);
    const lastPartTitle = title.slice(title.toLowerCase().indexOf(searchText.toLowerCase()) + searchText.length);

    console.log(title.indexOf(searchText), searchText.length, title.indexOf(searchText) + searchText.length);
    

    return (
      <span>
        {firstPartTitle}
        <span style={{ color: '#FF5253' }} data-test-id='highlight-matches'>{hightlightedPart}</span>
        {lastPartTitle}
      </span>
    );
  };

  const showCardWindow = () => {
    setIsLinear(false);
  };

  const showCardList = () => {
    setIsLinear(true);
  };

  const handlerSort = () => {
    dispatch(sortAscendingDescending());
  };

  return (
    <React.Fragment>
      <SearchSortPanel
        isLinear={isLinear}
        showCardWindow={showCardWindow}
        showCardList={showCardList}
        handlerSort={handlerSort}
      />
      <S.WrapperCards isLinear={isLinear}>
        {!searchText && (params.category === 'all' || !params.category) ? (
          sortAllBooks.map((book: BookProps) => (
            <CardBook
              key={book.id}
              id={book.id}
              rating={book.rating}
              booking={book.booking}
              delivery={book.delivery}
              histories={book.histories}
              categories={book.categories}
              image={book.image || ''}
              title={book.title}
              authors={book.authors}
              issueYear={book.issueYear}
              isLinear={isLinear}
            />
          ))
        ) : categoryBooks.length > 0 && !searchText ? (
          categoryBooks.map((book: BookProps) => (
            <CardBook
              key={book.id}
              id={book.id}
              rating={book.rating}
              booking={book.booking}
              delivery={book.delivery}
              histories={book.histories}
              categories={book.categories}
              image={book.image || ''}
              title={book.title}
              authors={book.authors}
              issueYear={book.issueYear}
              isLinear={isLinear}
            />
          ))
        ) : searchBooks.length > 0 && searchText ? (
          searchBooks.map((book: BookProps) => (
            <CardBook
              key={book.id}
              id={book.id}
              rating={book.rating}
              booking={book.booking}
              delivery={book.delivery}
              histories={book.histories}
              categories={book.categories}
              image={book.image || ''}
              title={handlerHighlightingInText(book.title)}
              authors={book.authors}
              issueYear={book.issueYear}
              isLinear={isLinear}
            />
          ))
        ) : categoryBooks.length === 0 && !searchText ? (
          <NotificationBlock type='empty-category'>В этой категории книг ещё нет</NotificationBlock>
        ) : searchText && searchBooks.length === 0 ? (
          <NotificationBlock type='search-result-not-found'>По запросу ничего не найдено</NotificationBlock>
        ) : (
          ''
        )}
      </S.WrapperCards>
    </React.Fragment>
  );
};
