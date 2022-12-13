<template>
  <div class="user__container">
    <div v-if="!isUserLoading">
      <h1>{{user.name}}</h1>
      <h2>{{user.email}}</h2>
      <div>

      </div>
    </div>
  </div>
</template>

<script>

import {useUser} from "@/hooks/useUser";
import {useRoute} from "vue-router";

export default {
  setup: (props) => {
    const route = useRoute();
    const id = route.params._id;
    const {user, isUserLoading} = useUser(id);
    console.log('user', user)
    return {
      user,
      isUserLoading,
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '@/App.vars.styl';
@import '@/App.mixins.styl';

.user__container
  margin-top: 100px
  color $text-third
  display flex
  width: 100%

</style>