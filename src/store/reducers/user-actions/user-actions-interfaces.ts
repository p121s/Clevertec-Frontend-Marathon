export interface IStateRegistration {
  registrationData: IRegistrationData;
  authData: IAuthData;
  resetPasswordData: IResetPass;
  changePassData: IChangePasswordData;
  answerServer: IAnswerServer;
  statusRegistr: number;
  statusAuth: number;
  statusChangePass: number,
  isChangePassword: boolean | null;
  isLoading: boolean;
}

export interface IRegistrationData {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface IAuthData {
  identifier: string;
  password: string;
}

export interface IResetPass {
  email: string;
}

export interface IChangePasswordData {
  password: string;
  passwordConfirmation: string;
  code: string;
}

export interface IAnswerServer {
  jwt: string;
  user: IUser;
}

interface IUser {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  phone: string;
}
