import sortImg from '../../images/svg/sort-down.svg';

import * as S from './sort-button-styled';

export const SortButton = (): JSX.Element => (
    <S.WrapperSortButton>
        <S.SortImg src={sortImg} alt='sort' />
        <S.Button type='button'><span>По рейтингу</span></S.Button>
    </S.WrapperSortButton>
);