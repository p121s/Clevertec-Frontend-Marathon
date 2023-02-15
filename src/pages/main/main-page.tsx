import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Menu } from '../../components/menu';
import { Loader } from '../../shared/loader';

import * as S from './main-page-styled';

export const MainPage = (): JSX.Element => {
  const isLoadingBooks = useSelector((state: any) => state.allBooksReducer.isLoading);
  const isLoadingCategories = useSelector((state: any) => state.allCategoriesReducer.isLoading);

  return (
    <React.Fragment>
      {isLoadingBooks && isLoadingCategories ? <Loader /> : ''}
      <Header />
      <S.Main>
        <S.Section>
          <Menu />
          <S.WrapperContent>
            <Outlet />
          </S.WrapperContent>
        </S.Section>
      </S.Main>
      <Footer />
    </React.Fragment>
  );
};
