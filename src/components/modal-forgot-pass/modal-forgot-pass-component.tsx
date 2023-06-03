import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../shared/button';
import { Input } from '../../shared/input';
import { ModalForUserActions } from '../../shared/modal-for-user-actions';
import { resetPassword } from '../../store/reducers/user-actions/user-actions';
import { useAppSelector } from '../../store/store';

import { IForgotPass } from './modal-forgot-pass-interfaces';
import * as S from './modal-forgot-pass-styled';

export const ModalForForgotPass = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isChangePass = useAppSelector((state) => state.userActionsReducer.isChangePassword);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPass>({
    mode: 'onBlur',
  });

  const handlerSubmit: SubmitHandler<IForgotPass> = (data) => {
    dispatch(resetPassword(data));
  };

  const handlerGoRegistration = () => {
    navigate('/registration');
  };

  return (
    <ModalForUserActions title='Восстановление пароля' isLinkGoBack={true} linkGoBackTitle='вход в личный кабинет'>
      <form onSubmit={handleSubmit(handlerSubmit)} data-test-id='send-email-form'>
        <Input
          id='email'
          type='email'
          placeholder='E-mail'
          notice={
            errors.email?.type === 'required' ? (
              <React.Fragment>
                <span style={{ color: '#F42C4F' }}>Поле не может быть пустым</span>
                <br />
                <span>На это email будет отправлено письмо с инструкциями по восстановлению пароля</span>
              </React.Fragment>
            ) : isChangePass === false ? (
              <React.Fragment>
                <span style={{ color: '#F42C4F' }}>Введите корректный e-mail</span>
                <br />
                <span>На это email будет отправлено письмо с инструкциями по восстановлению пароля</span>
              </React.Fragment>
            ) : (
              <span>На это email будет отправлено письмо с инструкциями по восстановлению пароля</span>
            )
          }
          {...register('email', {
            required: true,
            validate: {
              email: (v) => /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(v),
            },
          })}
        />
        <S.WrapperButton>
          <Button typeBtn='primary' width='full'>
            Восстановить
          </Button>
        </S.WrapperButton>
        <S.AccountParagraph>
          Нет учётной записи?
          <Button typeBtn='text' img={true} onClick={handlerGoRegistration}>
            Регистрация
          </Button>
        </S.AccountParagraph>
      </form>
    </ModalForUserActions>
  );
};
