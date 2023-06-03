/* eslint-disable complexity */
import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../shared/button';
import { Input } from '../../shared/input';
import { MaskedInput } from '../../shared/masked-input';
import { ModalForUserActions } from '../../shared/modal-for-user-actions';
import { setRegistrationData } from '../../store/reducers/user-actions/user-actions';
import { useAppSelector } from '../../store/store';

import { IFormValues } from './modal-for-registration-interfaces';
import * as S from './modal-for-registration-styled';

export const ModalForRegistration = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
    getValues,
  } = useForm<IFormValues>({
    mode: 'all',
  });
  const [step, setStep] = useState<number>(1);
  const { username, password, firstName, lastName } = watch();
  const answerserver = useAppSelector((state) => state.userActionsReducer.answerServer);
  const userData = useAppSelector((state) => state.userActionsReducer.registrationData);

  console.log(watch('password'));

  const spanUserName = (
    <span style={{ color: errors.username?.type === 'required' ? '#F42C4F' : '#727272' }}>
      Используйте для логина{' '}
      <span
        style={{
          color: errors.username?.type === 'isLetters' || errors.username?.type === 'required' ? '#F42C4F' : '#727272',
        }}
      >
        латинский алфавит
      </span>{' '}
      и{' '}
      <span
        style={{
          color: errors.username?.type === 'isNumbers' || errors.username?.type === 'required' ? '#F42C4F' : '#727272',
        }}
      >
        цифры
      </span>
    </span>
  );

  const spanPassword = (
    <span style={{ color: errors.password?.type === 'required' ? '#F42C4F' : '#727272' }}>
      Пароль{' '}
      <span
        style={{
          color: errors.password?.type === 'minLength' || errors.password?.type === 'required' ? '#F42C4F' : '#727272',
        }}
      >
        не менее 8 символов,
      </span>{' '}
      <span
        style={{
          color: errors.password?.type === 'isLetters' || errors.password?.type === 'required' ? '#F42C4F' : '#727272',
        }}
      >
        с заглавной буквой
      </span>{' '}
      и{' '}
      <span
        style={{
          color: errors.password?.type === 'isNumbers' || errors.password?.type === 'required' ? '#F42C4F' : '#727272',
        }}
      >
        цифрой
      </span>
    </span>
  );

  const handlerChangeStep1 = () => {
    if (username && password && step === 1 && !Object.keys(errors).length) {
      const newStep = step < 3 ? step + 1 : step;

      setStep(newStep);
    }
  };

  const handlerChangeStep2 = () => {
    if (firstName && lastName && step === 2 && !Object.keys(errors).length) {
      const newStep = step < 3 ? step + 1 : step;

      setStep(newStep);
    }
  };

  const handlerGoLogIn = () => {
    navigate('/auth');
  };

  const handlerSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log('yes');

    dispatch(setRegistrationData(data));
  };

  return (
    <ModalForUserActions title='Регистрация' step={step} isLinkGoBack={false}>
      <form onSubmit={handleSubmit(handlerSubmit)} data-test-id='register-form'>
        {step === 1 && (
          <React.Fragment>
            <Input
              id='username'
              type='text'
              placeholder='Придумайте логин для входа'
              notice={spanUserName}
              {...register('username', {
                required: true,
                validate: {
                  isLetters: (v) => /[a-zA-Z]+/g.test(v),
                  isNumbers: (v) => /[\d]+/g.test(v),
                },
              })}
            />

            <Input
              id='password'
              type='password'
              placeholder='Пароль'
              notice={spanPassword}
              isValid={watch('password') && !errors.password ? true : false}
              {...register('password', {
                required: true,
                minLength: 8,
                validate: {
                  isLetters: (v) => /[A-Z]+/g.test(v),
                  isNumbers: (v) => /[\d]+/g.test(v),
                },
              })}
            />
            <S.WrapperButton>
              <Button typeBtn='primary' width='full' onClick={handlerChangeStep1}>
                Следующий шаг
              </Button>
            </S.WrapperButton>
          </React.Fragment>
        )}

        {step === 2 && (
          <React.Fragment>
            <Input
              id='firstName'
              type='text'
              placeholder='Имя'
              notice={
                errors.firstName?.type === 'required' && (
                  <span style={{ color: '#F42C4F' }}>Поле не может быть пустым</span>
                )
              }
              {...register('firstName', {
                required: true,
              })}
            />

            <Input
              id='lastName'
              type='text'
              placeholder='Фамилия'
              notice={
                errors.lastName?.type === 'required' && (
                  <span style={{ color: '#F42C4F' }}>Поле не может быть пустым</span>
                )
              }
              {...register('lastName', {
                required: true,
              })}
            />

            <S.WrapperButton>
              <Button typeBtn='primary' width='full' onClick={handlerChangeStep2}>
                Следующий шаг
              </Button>
            </S.WrapperButton>
          </React.Fragment>
        )}

        {step === 3 && (
          <React.Fragment>
            <Controller
              name='phone'
              control={control}
              rules={{
                required: true,
                validate: {
                  phoneNumber: (v) => /^\+375\s\(25|33\)\s([0-9]{3})-([0-9]{2})-([0-9]{2})$/.test(v),
                },
              }}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <MaskedInput
                  id='phone'
                  mask={[
                    '+',
                    '3',
                    '7',
                    '5',
                    ' ',
                    '(',
                    /\d/,
                    /\d/,
                    ')',
                    ' ',
                    /\d/,
                    /\d/,
                    /\d/,
                    '-',
                    /\d/,
                    /\d/,
                    '-',
                    /\d/,
                    /\d/,
                  ]}
                  guide={false}
                  type='text'
                  placeholder='Номер телефона'
                  placeholderChar='x'
                  value={value}
                  notice={
                    error?.type === 'phoneNumber' && (
                      <span style={{ color: '#F42C4F' }}>В формате +375 (xx) xxx-xx-xx</span>
                    )
                  }
                  onChange={onChange}
                />
              )}
            />

            <Input
              id='email'
              type='email'
              placeholder='E-mail'
              notice={
                errors.email?.type === 'email' && <span style={{ color: '#F42C4F' }}>Введите корректный e-mail</span>
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
                Зарегистрироваться
              </Button>
            </S.WrapperButton>
          </React.Fragment>
        )}

        <S.AccountParagraph>
          Есть учётная запись?
          <Button typeBtn='text' img={true} onClick={handlerGoLogIn}>
            Войти
          </Button>
        </S.AccountParagraph>
      </form>
    </ModalForUserActions>
  );
};
