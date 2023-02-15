import { ToastStyledProps } from './toast-interfaces';
import * as S from './toast-styled';

export const Toast = ({type, children}: ToastStyledProps) => <S.ToastStyled type={type} data-test-id='error'>
    {children}
</S.ToastStyled>