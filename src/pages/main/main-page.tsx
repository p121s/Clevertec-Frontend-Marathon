import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Menu } from '../../components/menu';
import { Loader } from '../../shared/loader';
import { Toast } from '../../shared/toasts/toast';

import * as S from './main-page-styled';

export const MainPage = (): JSX.Element => {
  const isLoadingBooks = useSelector((state: any) => state.allBooksReducer.isLoading);
  const isLoadingCategories = useSelector((state: any) => state.allCategoriesReducer.isLoading);
  const isLoadedBooks = useSelector((state: any) => state.allBooksReducer.isLoaded);
  const isLoadedCategories = useSelector((state: any) => state.allCategoriesReducer.isLoaded);
  const isErrorBooks = useSelector((state: any) => state.allBooksReducer.isError);
  const isErrorCategories = useSelector((state: any) => state.allCategoriesReducer.isError);

  useEffect(() => {
    if (isLoadedBooks && isLoadedCategories) {
      if (isErrorBooks || isErrorCategories) {
        toast.error(<Toast type='error'>Что-то пошло не так. Обновите страницу через некоторое время.</Toast>);
      }
    }
  }, [isErrorBooks, isErrorCategories, isLoadedBooks, isLoadedCategories]);

  return (
    <React.Fragment>
      {isLoadingBooks || isLoadingCategories ? <Loader /> : ''}
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
