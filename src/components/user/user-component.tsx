import * as S from './user.styled';

export const User = (): JSX.Element => (
  <S.WrapperUser>
    <S.UserData>
      <S.NameUser>Привет, Иван!</S.NameUser>
    </S.UserData>
    <S.UserAvatar />
  </S.WrapperUser>
);
