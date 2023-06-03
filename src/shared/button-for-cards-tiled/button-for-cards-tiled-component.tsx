import { useDispatch } from 'react-redux';

import { getCardView } from '../../store/reducers/sort-search-view-books/sort-search-view-books';

import { ButtonForCardsTiledProps } from './button-for-cards-tiled.interfaces';
import * as S from './button-for-cards-tiled.styled';

export const ButtonForCardsTiled = ({ isActive }: ButtonForCardsTiledProps): JSX.Element => {
  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(getCardView());
  };

  return (
    <S.ButtonStyled isActive={isActive} onClick={handlerClick} data-test-id='button-menu-view-window'>
      <S.ListImg isActive={isActive} />
    </S.ButtonStyled>
  );
};
