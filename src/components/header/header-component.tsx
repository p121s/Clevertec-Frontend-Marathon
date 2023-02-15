import { useDispatch, useSelector } from 'react-redux';

import { useResize } from '../../hooks/use-resize';
import logo from '../../images/logo.png';
import { openClose } from '../../store/reducers/open-close-menu';
import { User } from '../user';

import * as S from './header-styled';

export const Header = (): JSX.Element => {
  const dispatch = useDispatch();
  const isOpenMenu = useSelector((state: any) => state.openCloseMenuReducer.isMenuOpen)
  const { isTablet } = useResize();

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
