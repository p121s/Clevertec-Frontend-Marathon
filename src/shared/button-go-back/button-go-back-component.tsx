import { useNavigate } from 'react-router-dom';

import * as S from './button-go-back-styled';

export const ButtonGoBack = (): JSX.Element => {
  const navidate = useNavigate();

  const handlerCoBack = () => {
    navidate('/auth');
  };

  return <S.ButtonGoBackStyled onClick={handlerCoBack} />;
};
