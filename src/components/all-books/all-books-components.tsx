import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { NotificationBlock } from '../../shared/notification-block';
import { getBooksFetch } from '../../store/reducers/all-books/all-books';
import { sortAscendingDescending } from '../../store/reducers/sort-search-books';
import { useAppSelector } from '../../store/store';
import { CardBook } from '../card-book';
import { SearchSortPanel } from '../search-sort-panel';

import { BookProps } from './all-books-interfaces';
import * as S from './all-books-styled';

export const AllBooks = (): JSX.Element => {
  const allBooks = useAppSelector((state) => state.allBooksReducer.books);
  const [sortAllBooks, setSortAllBooks] = useState<BookProps[]>([]);
  const [categoryBooks, setCategoryBooks] = useState<BookProps[]>([]);
  const [searchBooks, setSearchBooks] = useState<BookProps[]>([]);
  const params = useParams();
  const categories = useAppSelector((state) => state.allCategoriesReducer.menu)[0].submenu;
  const dispatch = useDispatch();
  const [isLinear, setIsLinear] = useState<boolean>(false);
  const isDescendingRanking = useAppSelector((state) => state.sortSearchBooksReducer.isDescendingRanking);
  const searchText = useAppSelector((state) => state.sortSearchBooksReducer.searchText);

  useEffect(() => {
    dispatch(getBooksFetch());
  }, [dispatch]);

  useEffect(() => {
    const newArrAllBooks = allBooks.slice();
    let sortArr;

    if (isDescendingRanking) {
      sortArr = newArrAllBooks.sort((a, b) => +b.rating - +a.rating);
    } else {
      sortArr = newArrAllBooks.sort((a, b) => +a.rating - +b.rating);
    }

    setSortAllBooks(sortArr);
  }, [allBooks, isDescendingRanking]);

  useEffect(() => {
    if (params.category) {
      const nameCategory = categories?.find((category: { path: string | undefined }) => category.path === params.category)?.name;

      setCategoryBooks(sortAllBooks.filter((book: BookProps) => book?.categories.includes(nameCategory ?? '')));
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
    const hightlightedPart = title.slice(
      title.toLowerCase().indexOf(searchText.toLowerCase()),
      title.toLowerCase().indexOf(searchText.toLowerCase()) + searchText.length
    );
    const lastPartTitle = title.slice(title.toLowerCase().indexOf(searchText.toLowerCase()) + searchText.length);

    return (
      <span>
        {firstPartTitle}
        <span style={{ color: '#FF5253' }} data-test-id='highlight-matches'>
          {hightlightedPart}
        </span>
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
