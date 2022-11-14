import Vuex, { createStore } from "vuex";
import { ProfileModule } from "@/store/modules";
import Vue, { InjectionKey } from "vue";

export const store = new Vuex.Store({
  modules: {
    profile: ProfileModule,
  },
});

export type Store = typeof store;
export const key: InjectionKey<Store> = Symbol();
