import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import burger from '../../images/svg/burger.svg';
import closeMenu from '../../images/svg/close-menu.svg';

import { ButtonBurgerStyledProps, LogoLinkStylrdProps } from './header-interfaces';

export const WrapperHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 105px;
  padding: 32px 0 15px;

  @media screen and (max-width: 768px) {
    height: 96px;
  }

  @media screen and (max-width: 320px) {
    height: 76px;
  }
`;

export const WrappperH1 = styled.div`
  flex-grow: 2;
  margin-left: 125px;

  & h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.1px;
    color: #363636;

    @media screen and (max-width: 320px) {
      font-size: 18px;
      line-height: 28px;
    }
  }

  @media screen and (max-width: 768px) {
    margin-left: 24px;
  }
`;

export const BurgerMenu = styled.button<ButtonBurgerStyledProps>`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  border: none;
  background: none;
  width: 32px;
  height: 32px;
  background: url(${props => props.isOpenMenu ? closeMenu : burger}) center / contain no-repeat;
  z-index: 50;
`;

export const CleverLandLogoLink = styled(NavLink)<LogoLinkStylrdProps>`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
`;
