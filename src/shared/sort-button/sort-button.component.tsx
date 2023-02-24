import { isMobile } from '../../constants/screen-sizes';
import sortDownImg from '../../images/svg/sort-down.svg';
import sortUpImg from '../../images/svg/sort-up.svg';
import { useAppSelector } from '../../store/store';

import { SortButtonProps } from './sort-button-interfaces';
import * as S from './sort-button-styled';

export const SortButton = ({ onClick }: SortButtonProps): JSX.Element => {
  const isDescendingRanking = useAppSelector(state => state.sortSearchBooksReducer.isDescendingRanking);

  return (
    <S.WrapperSortButton>
      <S.SortImg src={isDescendingRanking ? sortDownImg : sortUpImg} alt='sort' />
      <S.Button type='button' onClick={onClick} data-test-id='sort-rating-button'>
        {isMobile ? <img src={isDescendingRanking ? sortDownImg : sortUpImg} alt='sort' /> : <span>По рейтингу</span>}
      </S.Button>
    </S.WrapperSortButton>
  );
};
