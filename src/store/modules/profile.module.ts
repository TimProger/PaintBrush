import {
  IUser,
  IProfileModuleState,
  IRegisterForm,
  ILoginForm,
} from "@/types/profile.types";
import { $api } from "@/http";

export const ProfileModule = {
  name: "profile",
  state: (): IProfileModuleState => ({
    user: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  }),
  mutations: {
    LogIn(state: IProfileModuleState, user: IUser) {
      state.isLoading = false;
      state.user = user;
      state.isLoggedIn = true;
      state.error = null;
    },
    LogOut(state: IProfileModuleState) {
      state.isLoading = false;
      state.user = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    setError(state: IProfileModuleState, error: string) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = error;
    },
    setLoading(state: IProfileModuleState, bool: boolean) {
      state.isLoading = bool;
      state.user = null;
      state.isLoggedIn = false;
      state.error = null;
    },
  },
  actions: {
    async Register(state: any, form: IRegisterForm) {
      let AuthForm = new URLSearchParams();
      AuthForm.append("name", form.name);
      AuthForm.append("email", form.email);
      AuthForm.append("password", form.password);
      return await $api.post("users/add", AuthForm);
    },
    async Login(state: any, form: ILoginForm) {
      let AuthForm = new URLSearchParams();
      AuthForm.append("email", form.email);
      AuthForm.append("password", form.password);
      return await $api.post("users/auth", AuthForm);
    },
    async FindUserByID({ commit }: any, id: string) {
      return await $api.get("users/" + id);
    },
  },
};
