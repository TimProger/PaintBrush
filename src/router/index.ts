import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/Main/index.vue";
import NotFound from "@/views/NotFound/index.vue";
import Profile from "@/views/Profile/index.vue";
import UserPage from "@/views/UserPage/index.vue";
import Auth from "@/views/Auth/index.vue";

function lazyLoad(view: string) {
  return () => import(`@/views/${view}/index.vue`);
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main-page",
      component: lazyLoad("Main"),
    },
    {
      path: "/profile",
      name: "profile-page",
      component: lazyLoad("Profile"),
    },
    {
      path: "/users/:_id",
      component: lazyLoad("UserPage"),
    },
    {
      path: "/auth/:page",
      name: "auth-page",
      component: lazyLoad("Auth"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: lazyLoad("NotFound"),
    },
  ],
});

export default router;
