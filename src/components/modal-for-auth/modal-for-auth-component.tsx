import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import { Button } from '../../shared/button';
import { Input } from '../../shared/input';
import { ModalForUserActions } from '../../shared/modal-for-user-actions';
import { setAuthUser } from '../../store/reducers/user-actions/user-actions';
import { useAppSelector } from '../../store/store';

import { ILoginData } from './modal-for-auth-interfaces';
import * as S from './modal-for-auth-styled';

export const ModalForAuth = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const statusAnswerAuth = useAppSelector((state) => state.userActionsReducer.statusAuth);

  console.log(statusAnswerAuth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<ILoginData>({
    mode: 'onBlur',
  });

  const handlerGoRegistration = () => {
    navigate('/registration');
  };

  const handlerSubmit: SubmitHandler<ILoginData> = (data) => {
    dispatch(setAuthUser(data));
  };

  return (
    <ModalForUserActions title='Вход в личный кабинет' isLinkGoBack={false}>
      <form onSubmit={handleSubmit(handlerSubmit)} data-test-id='auth-form'>
        <Input
          id='identifier'
          type='text'
          placeholder='Логин'
          notice={
            errors.identifier?.type === 'required' && (
              <span style={{ color: '#F42C4F' }}>Поле не может быть пустым</span>
            )
          }
          {...register('identifier', {
            required: true,
          })}
        />
        <Input
          id='password'
          type='password'
          placeholder='Пароль'
          notice={
            errors.password?.type === 'required' && <span style={{ color: '#F42C4F' }}>Поле не может быть пустым</span>
          }
          isValid={!watch('password') || errors.password?.type === 'required' ? false : true}
          {...register('password', {
            required: true,
          })}
        />
        {statusAnswerAuth === 400 ? (
          <S.InfoParagraph>
            <S.Error>Неверный логин или пароль!</S.Error>
            <S.InfoLink to='forgot-pass'>Восстановить?</S.InfoLink>
          </S.InfoParagraph>
        ) : (
          <S.AccountParagraph>
            <NavLink to='/forgot-pass'>Забыли логин или пароль?</NavLink>
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
