import { isTablet } from '../../constants/screen-sizes';

import * as S from './user.styled';

export const User = (): JSX.Element => (
  <S.WrapperUser isVisible={!isTablet}>
    <S.UserData>
      <S.NameUser>Привет, Иван!</S.NameUser>
    </S.UserData>
    <S.UserAvatar />
  </S.WrapperUser>
);
