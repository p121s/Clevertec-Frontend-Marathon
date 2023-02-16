import { ButtonForCardsListProps } from './button-for-cards-list.interfaces';
import * as S from './button-for-cards-list.styled';

export const ButtonForCardsList = ({ isActive, onClick }: ButtonForCardsListProps): JSX.Element => (
    <S.ButtonStyled isActive={isActive} onClick={onClick} data-test-id='button-menu-view-list'>
      <S.ListImg isActive={isActive} />
    </S.ButtonStyled>
  );
