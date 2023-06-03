import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import arrowSubMenu from '../../images/svg/arrow-submenu-active.svg';
import arrowSubMenuNotActive from '../../images/svg/arrow-submenu-not-active.svg';

import { MenuStyledProps, SubMenuStyledProps, WrapperNavProps } from './menu-interfaces';

export const WrapperNav = styled.div<WrapperNavProps>`
  @media screen and (max-width: 768px) {
    position: fixed;
    display: ${(props) => (props.isVisible ? 'block' : 'none')};
    top: 0;
    left: 0;
    width: 100vw;
    height: ${document.documentElement.clientHeight}px;
    z-index: 40;
  }
`;

export const Nav = styled.nav<MenuStyledProps>`
  width: 377px;
  margin: 0 6px 0 0;
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isMenuOpen ? 'block' : 'none')};
    position: absolute;
    top: 90px;
    width: 502px;
    background: #f9f9fa;
    box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
      0px 1px 5px rgba(191, 196, 201, 0.24);
    border-radius: 10px;
    z-index: 50;
    padding: 32px;
    margin: 0;
  }

  @media screen and (max-width: 320px) {
    width: 288px;
    top: 76px;
    padding: 16px;
  }
`;

export const ManuItem = styled(NavLink)`
  position: relative;
  width: 255px;
  display: block;
  padding: 8px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  text-decoration: none;
  letter-spacing: 0.1px;
  color: #363636;
  margin-bottom: 42px;

  &.active {
    background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    border-bottom: 1px solid transparent;
    border-image: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
    border-image-slice: 1;
  }
`;

export const WrapperArrowSubMenu = styled.div<SubMenuStyledProps>`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  background: url(${(props) => (props.isActive ? arrowSubMenu : arrowSubMenuNotActive)}) center / cover no-repeat;
  transform: ${(props) => (props.isSubMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const WrapperSubMenu = styled.div<SubMenuStyledProps>`
  display: ${(props) => (props.isSubMenuOpen ? 'block' : 'none')};
  position: relative;
  top: -35px;
`;

export const WrapperSunMenuItem = styled.div`
  display: block;
  padding: 8px 8px 8px 24px;
`;

export const SubMenuItem = styled(NavLink)`
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #363636;

  &:hover {
    color: #ff5253;
  }

  &.active {
    background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
  }

  &.active + span {
    background: #363636;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const CountPlace = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #a7a7a7;
  margin-left: 6px;
`;

export const Hr = styled.hr`
  @media screen and (max-width: 768px) {
    position: relative;
    left: -32px;
    border: 1px solid #bfc4c9;
    margin-bottom: 32px;
    width: 502px;
  }

  @media screen and (max-width: 320px) {
    width: 288px;
    left: -16px;
  }
`;

export const WrapperUserMinScreen = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
