import searchImg from '../../images/svg/search.svg';

import * as S from './search-inpur-styled';
import { SearchInputProps } from './search-input-interfaces';

export const SearchInput = ({isVisible}: SearchInputProps): JSX.Element => (
 <S.WrapperInput isVisible={isVisible}>
    <S.SearchImg src={searchImg} alt='search' />
    <S.Input type='text' placeholder='Поиск книги или автора…' data-test-id='input-search' />
 </S.WrapperInput>
);