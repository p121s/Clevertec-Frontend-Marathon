import { RateProps } from './rating-interfaces';
import * as S from './rating-styled';

export const Rate = ({ rating, isLinear }: RateProps) => (
  <S.RateBook isLinear={isLinear} rating={rating}>
    {rating > 0 ? <S.Stars /> : <S.NoRatings>Ещё нет оценок</S.NoRatings>}
  </S.RateBook>
);
