import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Loader } from '../../shared/loader';
import { Menu } from '../../shared/menu';

import * as S from './main-page-styled';

export const MainPage = () => {
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
