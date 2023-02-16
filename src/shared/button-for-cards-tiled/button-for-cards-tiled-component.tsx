import { ButtonForCardsTiledProps } from './button-for-cards-tiled.interfaces';
import * as S from './button-for-cards-tiled.styled';

export const ButtonForCardsTiled = ({ isActive, onClick }: ButtonForCardsTiledProps): JSX.Element => (
  <S.ButtonStyled isActive={isActive} onClick={onClick} data-test-id='button-menu-view-window'>
    <S.ListImg isActive={isActive} />
  </S.ButtonStyled>
);
