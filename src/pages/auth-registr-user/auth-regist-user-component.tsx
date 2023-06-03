import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { ModalForAuth } from '../../components/modal-for-auth';
import { ModalForRegistration } from '../../components/modal-for-registration';
import { ModalForForgotPass } from '../../components/modal-forgot-pass';
import { Loader } from '../../shared/loader';
import { ModalNotification } from '../../shared/modal-notification';
import { clearStatusAuth, clearStatusRegistr, setRegistrationData } from '../../store/reducers/user-actions/user-actions';
import { useAppSelector } from '../../store/store';

import * as S from './auth-registr-user-styled';

export const AuthRegistrationUser = (): JSX.Element => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useAppSelector((state) => state.userActionsReducer.isLoading);
  const statusAnsverRegistr = useAppSelector((state) => state.userActionsReducer.statusRegistr);
  const statusAnsverAuth = useAppSelector((state) => state.userActionsReducer.statusAuth);
  const token = useAppSelector((state) => state.userActionsReducer.answerServer).jwt;
  const userData = useAppSelector((state) => state.userActionsReducer.registrationData);
  const isChangePass = useAppSelector((state) => state.userActionsReducer.isChangePassword);

  console.log(statusAnsverRegistr, statusAnsverAuth);

  const handleNewRegistration = () => {
    dispatch(clearStatusRegistr());
  };

  const handleRepeatRequest = () => {
    dispatch(setRegistrationData(userData));
  };

  const repeatAuth = () => {
    dispatch(clearStatusAuth());
  };

  return (
    <S.WrapperPage>
      <S.Cleverland>Cleverland</S.Cleverland>
      {params.useractions === 'registration' && !statusAnsverRegistr ? (
        <ModalForRegistration />
      ) : statusAnsverRegistr === 400 ? (
        <ModalNotification
          title='Данные не сохранились'
          text='Такой логин или e-mail уже записан в системе. Попробуйте зарегистрироваться по другому логину или e-mail.'
          buttonText='назад к регистрации'
          onClick={handleNewRegistration}
        />
      ) : statusAnsverRegistr && statusAnsverRegistr !== 400 ? (
        <ModalNotification
          title='Данные не сохранились'
          text='Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.'
          buttonText='повторить'
          onClick={handleRepeatRequest}
        />
      ) : token ? (
        <ModalNotification
          title='Регистрация успешна'
          text='Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль'
          buttonText='вход'
        />
      ) : (
        ''
      )}
      {params.useractions === 'auth' && (!statusAnsverAuth || statusAnsverAuth === 400) ? (
        <ModalForAuth />
      ) : statusAnsverAuth && statusAnsverAuth !== 400 ? (
        <ModalNotification
          title='Вход не выполнен'
          text='Что-то пошло не так. Попробуйте ещё раз.'
          buttonText='повторить'
          onClick={repeatAuth}
        />
      ) : (
        ''
      )}
      {params.useractions === 'forgot-pass' && !isChangePass ? <ModalForForgotPass /> : ''}
      {/* <ModalNotification title='Данные не сохранились' text='Что-то пошло не так. Попробуйте ещё раз' buttonText='повторить' /> */}
      {isLoading ? <Loader /> : ''}
    </S.WrapperPage>
  );
};
