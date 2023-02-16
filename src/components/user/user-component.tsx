import { useResize } from '../../hooks/use-resize';

import * as S from './user.styled';

export const User = (): JSX.Element => {
  
  const {isTablet} = useResize();
  
  return (
  <S.WrapperUser isVisible={!isTablet}>
    <S.UserData>
      <S.NameUser>Привет, Иван!</S.NameUser>
    </S.UserData>
    <S.UserAvatar />
  </S.WrapperUser>
);
};
