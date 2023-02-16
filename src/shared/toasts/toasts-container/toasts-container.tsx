import * as S from './toasts-container-styled';

export const ContainerFroToasts = (): JSX.Element => (
  <S.ToastsContainerStyled position='top-center' autoClose={5000} closeOnClick={true} />
);
