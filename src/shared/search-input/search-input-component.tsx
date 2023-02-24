import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import searchImg from '../../images/svg/search.svg';
import { getSearchText } from '../../store/reducers/sort-search-books';
import { useAppSelector } from '../../store/store';

import * as S from './search-inpur-styled';
import { SearchInputProps } from './search-input-interfaces';

export const SearchInput = ({ isVisible }: SearchInputProps): JSX.Element => {
  const dispatch = useDispatch();
  const searchText = useAppSelector(state => state.sortSearchBooksReducer.searchText);

  const handlerSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(getSearchText(e.target.value));
  };

  return (
    <S.WrapperInput isVisible={isVisible}>
      <S.SearchImg src={searchImg} alt='search' />
      <S.Input
        type='text'
        placeholder='Поиск книги или автора…'
        data-test-id='input-search'
        value={searchText}
        onChange={handlerSearchText}
      />
    </S.WrapperInput>
  );
};
