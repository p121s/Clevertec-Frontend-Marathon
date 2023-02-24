import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import { isTablet } from '../../constants/screen-sizes';
import { getCategoriesFetch } from '../../store/reducers/all-categories/all-categories';
import { closeMenu } from '../../store/reducers/open-close-menu/open-close-menu';
import { useAppSelector } from '../../store/store';

import { MenuItem, SubMenuItem } from './menu-interfaces';
import * as S from './menu-styled';

export const Menu = (): JSX.Element => {
  const location = useLocation();
  const params = useParams();
  const dispatch = useDispatch();
  const isMenuOpen = useAppSelector(state => state.openCloseMenuReducer.isMenuOpen);
  const allBooks = useAppSelector(state => state.allBooksReducer.books);
  const menu = useAppSelector(state => state.allCategoriesReducer.menu);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(true);
  const idNavigationTests = ['navigation-showcase', 'navigation-terms', 'navigation-contract'];
  const idBurgerTests = ['burger-showcase', 'burger-terms', 'burger-contract'];

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
              <S.WrapperSunMenuItem>
                <S.SubMenuItem
                  key={item1.id}
                  to={item1.path}
                  className={(isActive) => (isActive ? 'active' : '')}
                  onClick={handleCloseMenu}
                  data-test-id={
                    i === 0
                      ? isTablet
                        ? `burger-${item1.path === 'all' ? 'books' : item1.path}`
                        : `navigation-${item1.path === 'all' ? 'books' : item1.path}`
                      : ''
                  }
                >
                  {item1.name}
                </S.SubMenuItem>
                <S.CountPlace
                  key={`count_${item1.id}`}
                  data-test-id={
                    isTablet ? `burger-book-count-for-${item1.path}` : `navigation-book-count-for-${item1.path}`
                  }
                >
                  {item1.path === 'all'
                    ? ''
                    : allBooks?.filter((book: { categories: string[] }) => book.categories.includes(item1.name)).length}
                </S.CountPlace>
              </S.WrapperSunMenuItem>
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
              to={`/${item.path}`}
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
