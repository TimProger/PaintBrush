export interface IUser {
  _id: string;
  name: string;
  email: string;
}

export interface IProfileModuleState {
  user: IUser | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface IRegisterForm {
  email: string;
  name: string;
  password: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}
