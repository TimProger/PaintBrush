export interface IUser {
  _id: string;
  name: string;
  email: string;
  portfolio: IPortfolio[];
}

export interface IPortfolio {
  title: string;
  images: string[];
  main_image: string;
  link: string;
  date: string;
  likes: string[];
  description: string;
  _id: string;
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
