import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import { useResize } from '../../hooks/use-resize';
import { getCategoriesFetch } from '../../store/reducers/all-categories';
import { closeMenu } from '../../store/reducers/open-close-menu';

import { MenuItem, SubMenuItem } from './menu-interfaces';
import * as S from './menu-styled';

export const Menu = (): JSX.Element => {
  const location = useLocation();
  const params = useParams();
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: any) => state.openCloseMenuReducer.isMenuOpen);
  const allBooks = useSelector((state: any) => state.allBooksReducer.books);
  const menu = useSelector((state: any) => state.allCategoriesReducer.menu);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(true);
  const idNavigationTests = ['navigation-showcase', 'navigation-terms', 'navigation-contract'];
  const idBurgerTests = ['burger-showcase', 'burger-terms', 'burger-contract'];
  const { isTablet } = useResize();

  const isMainPath = location.pathname.replace(`${params.category}`, '') === '/';  

  useEffect(() => {
    dispatch(getCategoriesFetch());
  }, [dispatch]);

  const handlerOpenCloseSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };

  const handlerCloseSubMenu = () => {
    setIsSubMenuOpen(false);
    handleCloseMenu();
  };

  return (
    <React.Fragment>
      <S.Nav isMenuOpen={isMenuOpen} data-test-id='burger-navigation'>
        {menu.map((item: MenuItem, i: number) => {
          const { submenu } = item;
          let submenuItems;

          if (submenu) {
            submenuItems = submenu.map((item1: SubMenuItem) => (
              <S.SubMenuItem
                key={item1.id}
                to={`/${item1.path}`}
                className={(isActive) => (isActive ? 'active' : '')}
                onClick={handleCloseMenu}
                data-test-id={i === 0 ? (isTablet ? 'burger-books' : 'navigation-books') : ''}
              >
                {item1.name}
                <S.CountPlace key={`count_${item1.id}`}>12</S.CountPlace>
              </S.SubMenuItem>
            ));
          }

          return submenu ? (
            <React.Fragment key={`frag_${item.id}`}>
              <S.ManuItem
                key={item.id}
                to={item.path}
                className={isMainPath ? 'active' : ''}
                onClick={handlerOpenCloseSubMenu}
                data-test-id={isTablet ? idBurgerTests[i] : idNavigationTests[i]}
              >
                {item.title}
                <S.WrapperArrowSubMenu isSubMenuOpen={isSubMenuOpen} isActive={isMainPath} />
              </S.ManuItem>
              {allBooks.length ? (
                <S.WrapperSubMenu key={`sub_${item.id}`} isSubMenuOpen={isSubMenuOpen}>
                  {submenuItems}
                </S.WrapperSubMenu>
              ) : (
                ''
              )}
            </React.Fragment>
          ) : (
            <S.ManuItem
              key={item.id}
              to={item.path}
              className={(isActive) => (isActive ? 'active' : '')}
              onClick={handlerCloseSubMenu}
              data-test-id={isTablet ? idBurgerTests[i] : idNavigationTests[i]}
            >
              {item.title}
            </S.ManuItem>
          );
        })}
        <S.WrapperUserMinScreen>
          <S.Hr />
          <S.ManuItem to='/profile' className={(isActive) => (isActive ? 'active' : '')} onClick={handlerCloseSubMenu}>
            Профиль
          </S.ManuItem>
          <S.ManuItem to='/quit' className={(isActive) => (isActive ? 'active' : '')} onClick={handlerCloseSubMenu}>
            Выход
          </S.ManuItem>
        </S.WrapperUserMinScreen>
      </S.Nav>
      <S.WrapperNav isVisible={isMenuOpen} onClick={handleCloseMenu} />
    </React.Fragment>
  );
};
