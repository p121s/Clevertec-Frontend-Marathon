import { Button } from '../button';

import { ModalNotificationProps } from './modal-notification-interfaces';
import * as S from './modal-notification-styled';

export const ModalNotification = ({ title, text, buttonText, onClick }: ModalNotificationProps): JSX.Element => {
  
  
  const handleClick = () => {
    if(onClick) {
      onClick();
    }
  };
  
  return (
  <S.Modal data-test-id='status-block'>
    <S.ModalTitle>{title}</S.ModalTitle>
    <S.ModalText>{text}</S.ModalText>
    {buttonText ? (
      <Button typeBtn='primary' size='large' width='full' onClick={handleClick}>
        {buttonText}
      </Button>
    ) : (
      ''
    )}
  </S.Modal>
);
    };
