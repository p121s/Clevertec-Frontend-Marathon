import * as S from './button.styles';
import { IButton } from './button-interfaces';

export const Button = ({ size = 'small', width, children }: IButton): JSX.Element => (
  <S.StyledButton type='button' size={size} width={width}>
    {children}
  </S.StyledButton>
);
