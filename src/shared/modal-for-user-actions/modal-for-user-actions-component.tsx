import { ButtonGoBack } from '../button-go-back';

import { ModalForUserActionsProps } from './modal-for-user-actions-interfaces';
import * as S from './modal-for-user-actions-styled';

export const ModalForUserActions = ({
  linkGoBackTitle,
  step,
  title,
  isLinkGoBack,
  children,
}: ModalForUserActionsProps): JSX.Element => (
  <S.ModalForm data-test-id='auth'>
    {isLinkGoBack ? (
      <S.WrapperLinkBack>
        <ButtonGoBack />
        <S.TitleLinkGoBack>{linkGoBackTitle}</S.TitleLinkGoBack>
      </S.WrapperLinkBack>
    ) : (
      ''
    )}
    <S.WrapperTitle>
      <S.ModalTitle>{title}</S.ModalTitle>
      {step ? <S.Steps>{step} шаг из 3</S.Steps> : ''}
    </S.WrapperTitle>
    {children}
  </S.ModalForm>
);
