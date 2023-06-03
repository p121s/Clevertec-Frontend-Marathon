import { useDispatch } from 'react-redux';

import { getLinearView } from '../../store/reducers/sort-search-view-books/sort-search-view-books';

import { ButtonForCardsListProps } from './button-for-cards-list.interfaces';
import * as S from './button-for-cards-list.styled';

export const ButtonForCardsList = ({ isActive }: ButtonForCardsListProps): JSX.Element => {
  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(getLinearView());
  };

  return (
    <S.ButtonStyled isActive={isActive} onClick={handlerClick} data-test-id='button-menu-view-list'>
      <S.ListImg isActive={isActive} />
    </S.ButtonStyled>
  );
};
