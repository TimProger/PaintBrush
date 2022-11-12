import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/Main.vue";
import NotFound from "@/views/NotFound.vue";
import Profile from "@/views/Profile.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main-page",
      component: Main,
    },
    {
      path: "/profile",
      name: "profile-page",
      component: Profile,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
