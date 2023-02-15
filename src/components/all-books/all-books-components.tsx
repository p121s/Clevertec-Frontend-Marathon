import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { books } from '../../mock-data/data/books-data';
import { getBooksFetch } from '../../store/reducers/all-books';
import { CardBook } from '../card-book';
import { CardBookProps } from '../card-book/card-book-interfaces';
import { SearchSortPanel } from '../search-sort-panel';

import * as S from './all-books-styled';

export const AllBooks = () => {
  const allBooks = useSelector((state: any) => state.allBooksReducer.books);
  const menu = useSelector((state: any) => state.allCategoriesReducer.menu);
  const dispatch = useDispatch();
  const [isLinear, setIsLinear] = useState<boolean>(false);  

  useEffect(() => {
    dispatch(getBooksFetch());
  }, [dispatch])

  const showCardWindow = () => {
    setIsLinear(false);
  };

  const showCardList = () => {
    setIsLinear(true);
  };

  return (
    <React.Fragment>
      <SearchSortPanel isLinear={isLinear} showCardWindow={showCardWindow} showCardList={showCardList} />
      <S.WrapperCards isLinear={isLinear}>
        {books.length && menu[0].submenu !== null
          ? allBooks.map((book: CardBookProps) => (
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
          : ''}
      </S.WrapperCards>
    </React.Fragment>
  );
};
