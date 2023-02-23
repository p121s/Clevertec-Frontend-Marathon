import { useSelector } from 'react-redux';

import { useResize } from '../../hooks/use-resize';
import sortDownImg from '../../images/svg/sort-down.svg';
import sortUpImg from '../../images/svg/sort-up.svg';

import { SortButtonProps } from './sort-button-interfaces';
import * as S from './sort-button-styled';

export const SortButton = ({ onClick }: SortButtonProps): JSX.Element => {
  const { isMobile } = useResize();
  const isDescendingRanking = useSelector((state: any) => state.sortSearchBooksReducer.isDescendingRanking);

  return (
    <S.WrapperSortButton>
      <S.SortImg src={isDescendingRanking ? sortDownImg : sortUpImg} alt='sort' />
      <S.Button type='button' onClick={onClick} data-test-id='sort-rating-button'>
        {isMobile ? <img src={isDescendingRanking ? sortDownImg : sortUpImg} alt='sort' /> : <span>По рейтингу</span>}
      </S.Button>
    </S.WrapperSortButton>
  );
};
