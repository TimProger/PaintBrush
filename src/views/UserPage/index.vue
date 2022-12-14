<template>
  <div class="user__container" v-if="!isUserLoading">
    <h1>{{user.name}}'s profile</h1>
    <h2>{{user.email}}</h2>
    <div v-if="user.portfolio.length > 0">
      <h2>Portfolios</h2>
      <portfolio-list
        :portfolios="user.portfolio"
        :user_id="user._id"
      />
    </div>
  </div>
</template>

<script lang="ts">

import {useUser} from "@/hooks/useUser";
import {useRoute} from "vue-router";
import PortfolioList from "@/components/PortfolioList/index.vue";

export default {
  components: {
    PortfolioList
  },

  setup: () => {
    const route = useRoute();
    const id = route.params._id;
    // @ts-ignore
    const {user, isUserLoading} = useUser(id);
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

.user

  &__container
    margin-top: 100px
    color $text-third
    display flex
    width: 100%
    flex-direction column
    gap 30px

</style>