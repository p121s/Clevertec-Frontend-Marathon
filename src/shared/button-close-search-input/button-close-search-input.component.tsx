import closeInput from '../../images/svg/close-input.svg';

import { ButtonCloseProps } from './button-close-search-input.interfaces';
import * as S from './button-close-search-input.styled';

export const ButtonCloseSearchInput = ({ isVisible, onClick }: ButtonCloseProps): JSX.Element => (
  <S.ButtonCloseStyled isVisible={isVisible} onClick={onClick} data-test-id='button-search-close'>
    <img src={`${closeInput}`} alt='close' />
  </S.ButtonCloseStyled>
);
