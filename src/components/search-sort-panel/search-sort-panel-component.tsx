import { useState } from 'react';

import { ButtonCloseSearchInput } from '../../shared/button-close-search-input';
import { ButtonForCardsList } from '../../shared/button-for-cards-list';
import { ButtonForCardsTiled } from '../../shared/button-for-cards-tiled';
import { ButtonOpenSearchInput } from '../../shared/button-open-search-input';
import { SearchInput } from '../../shared/search-input';
import { SortButton } from '../../shared/sort-button';

import { SearchSortSanelProps } from './search-sort-panel-interfaces';
import * as S from './search-sort-panel-styled';

export const SearchSortPanel = ({ isLinear, showCardWindow, showCardList }: SearchSortSanelProps): JSX.Element => {
  const [isVisibleButtonOpen, setisVisibleButtonOpen] = useState<boolean>(true);
  const [isVisibleSearchInput, setisVisibleSearchInput] = useState<boolean>(false);
  const [isVisibleButtonClose, setisVisibleButtonClose] = useState<boolean>(false);

  const handlerOpenSearchInput = () => {
    setisVisibleButtonOpen(false);
    setisVisibleSearchInput(true);
    setisVisibleButtonClose(true);
  };

  const handlerCloseSearchInput = () => {
    setisVisibleButtonOpen(true);
    setisVisibleSearchInput(false);
    setisVisibleButtonClose(false);
  };

  return (
    <S.WrapperPanel>
      <ButtonOpenSearchInput isVisible={isVisibleButtonOpen} onClick={handlerOpenSearchInput} />
      <SearchInput isVisible={isVisibleSearchInput} />
      <SortButton />
      <S.RightBlock>
        <S.WrapperChangeViewCards>
          <ButtonForCardsTiled isActive={!isLinear} onClick={showCardWindow} />
          <ButtonForCardsList isActive={isLinear} onClick={showCardList} />
        </S.WrapperChangeViewCards>
      </S.RightBlock>
      <ButtonCloseSearchInput isVisible={isVisibleButtonClose} onClick={handlerCloseSearchInput} />
    </S.WrapperPanel>
  );
};
