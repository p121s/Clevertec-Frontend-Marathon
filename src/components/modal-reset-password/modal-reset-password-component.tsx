import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import { Button } from '../../shared/button';
import { Input } from '../../shared/input';
import { ModalForUserActions } from '../../shared/modal-for-user-actions';
import { setNewPasswords } from '../../store/reducers/user-actions/user-actions';
import { useAppSelector } from '../../store/store';

import { IChangePassword } from './modal-reset-password-interfaces';
import * as S from './modal-reset-password-styled';

export const ModalResetPassword = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState<string>();
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>();
  const statusChangePassword = useAppSelector((state) => state.userActionsReducer.statusChangePass);

  console.log(statusChangePassword);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<IChangePassword>({
    mode: 'onBlur',
  });

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

  useEffect(() => {
    setPassword(watch('password'));
  }, [watch]);

  useEffect(() => {
    setPasswordConfirmation(watch('passwordConfirmation'));
  }, [watch]);

  const handlerGoRegistration = () => {
    navigate('/registration');
  };

  const handlerSubmit: SubmitHandler<IChangePassword> = (data) => {
    dispatch(setNewPasswords(data));
  };

  return (
    <ModalForUserActions title='Вход в личный кабинет' isLinkGoBack={false}>
      <form onSubmit={handleSubmit(handlerSubmit)} data-test-id='reset-password-form'>
        <Input
          id='password'
          type='password'
          placeholder='Пароль'
          notice={spanPassword}
          isValid={errors.passwordConfirmation?.type === 'coincidence' ? false : true}
          {...register('password', {
            required: 'Required',
            minLength: 8,
            validate: {
              isLetters: (v) => /[A-Z]+/g.test(v),
              isNumbers: (v) => /[\d]+/g.test(v),
            },
          })}
        />
        <Input
          id='passwordConfirmation'
          type='password'
          placeholder='Пароль'
          notice={errors.password?.type === 'required' && <span style={{color: '#F42C4F'}}>Поле не может быть пустым</span>}
          {...register('passwordConfirmation', {
            required: true,
            validate: {
              coincidence: () => password === passwordConfirmation,
            },
          })}
        />
        {statusChangePassword ? (
          <S.InfoParagraph>
            <S.Error>Error</S.Error>
          </S.InfoParagraph>
        ) : (
          <S.AccountParagraph>
            После сохранения войдите в библиотеку, используя новый пароль
          </S.AccountParagraph>
        )}
        <S.WrapperButton>
          <Button typeBtn='primary' width='full'>
            Вход
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
