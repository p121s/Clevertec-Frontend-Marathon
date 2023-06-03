import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import searchImg from '../../images/svg/search.svg';
import searchFocusImg from '../../images/svg/search-focus.svg';
import { getSearchText } from '../../store/reducers/sort-search-view-books/sort-search-view-books';
import { useAppSelector } from '../../store/store';

import * as S from './search-inpur-styled';
import { SearchInputProps } from './search-input-interfaces';

export const SearchInput = ({ isVisible }: SearchInputProps): JSX.Element => {
  const dispatch = useDispatch();
  const searchText = useAppSelector((state) => state.sortSearchViewBooksReducer.searchText);
  const [currentSearchImg, setCurrentSearchImg] = useState<string>(searchImg);

  const handlerFocusInput = () => {
    setCurrentSearchImg(searchFocusImg);
  };

  const handlerBlurInput = () => {
    setCurrentSearchImg(searchImg);
  };

  const handlerSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(getSearchText(e.target.value));
  };

  return (
    <S.WrapperInput isVisible={isVisible}>
      <S.SearchImg src={currentSearchImg} alt='search' />
      <S.Input
        type='text'
        placeholder='Поиск книги или автора…'
        data-test-id='input-search'
        value={searchText}
        onBlur={handlerBlurInput}
        onFocus={handlerFocusInput}
        onChange={handlerSearchText}
      />
    </S.WrapperInput>
  );
};
