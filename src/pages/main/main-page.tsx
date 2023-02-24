import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Menu } from '../../components/menu';
import { Loader } from '../../shared/loader';
import { Toast } from '../../shared/toasts/toast';
import { useAppSelector } from '../../store/store';

import * as S from './main-page-styled';

export const MainPage = (): JSX.Element => {
  const isLoadingBooks = useAppSelector(state => state.allBooksReducer.isLoading);
  const isLoadingCategories = useAppSelector(state => state.allCategoriesReducer.isLoading);
  const isLoadedBooks = useAppSelector(state => state.allBooksReducer.isLoaded);
  const isLoadedCategories = useAppSelector(state => state.allCategoriesReducer.isLoaded);
  const isErrorBooks = useAppSelector(state => state.allBooksReducer.isError);
  const isErrorCategories = useAppSelector(state => state.allCategoriesReducer.isError);

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
