<template>
  <div class="portfolio__container" v-if="!isPortfolioLoading">
    <h1>{{user.name}}'s portfolio</h1>
    <div><strong>Title:</strong> {{ portfolio.title }}</div>
    <div><strong>Description:</strong> {{ portfolio.description }}</div>
  </div>
</template>

<script lang="ts">

import {useRoute} from "vue-router";
import {usePortfolio} from "@/hooks/usePortfolio";

export default {
  setup: () => {
    const route = useRoute();
    const user_id = route.params.user_id;
    const portfolio_id = route.params.portfolio_id;
    // @ts-ignore
    const {user, portfolio, isPortfolioLoading} = usePortfolio(user_id, portfolio_id);
    console.log('user', portfolio)
    return {
      user,
      portfolio,
      isPortfolioLoading,
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '@/App.vars.styl';
@import '@/App.mixins.styl';

.portfolio

  &__container
    margin-top: 100px
    color $text-third
    display flex
    width: 100%
    flex-direction column
    gap 20px

</style>