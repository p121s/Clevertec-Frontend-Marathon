import { useDispatch } from 'react-redux';

import { isTablet } from '../../constants/screen-sizes';
import logo from '../../images/logo.png';
import { openClose } from '../../store/reducers/open-close-menu/open-close-menu';
import { useAppSelector } from '../../store/store';
import { User } from '../user';

import * as S from './header-styled';

export const Header = (): JSX.Element => {
  const dispatch = useDispatch();
  const isOpenMenu = useAppSelector(state => state.openCloseMenuReducer.isMenuOpen);

  const handlerClick = () => {
    dispatch(openClose());
  };

  return (
    <S.WrapperHeader>
      <S.BurgerMenu onClick={handlerClick} isVisible={isTablet} isOpenMenu={isOpenMenu} data-test-id='button-burger' />
      <S.CleverLandLogoLink to='/' isVisible={!isTablet}>
        <img src={logo} height='40px' alt='' />
      </S.CleverLandLogoLink>
      <S.WrappperH1>
        <h1>Библиотека</h1>
      </S.WrappperH1>
      <User />
    </S.WrapperHeader>
  );
};
