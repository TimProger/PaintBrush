<template>
  <div class="portfolio">
    <div class="portfolio__info">
      <h3>Info:</h3>
      <div><strong>Title:</strong> {{ portfolio.title }}</div>
      <div><strong>Description:</strong> {{ portfolio.description }}</div>
    </div>
    <v-button  @click="$router.push(`/portfolio/${user_id}/${portfolio._id}`)">Checkout portfolio</v-button>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import {IPortfolio} from "@/types/profile.types";
export default defineComponent({
  name: 'portfolio-item',
  props: {
    portfolio: {
      type: Object as PropType<IPortfolio>,
      required: true,
    },
    user_id: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="stylus" scoped>
@import '@/App.vars.styl';
@import '@/App.mixins.styl';
.portfolio
  padding 15px
  color $text-third
  border 2px solid $block-main
  margin-top 15px
  display flex
  flex-direction column
  justify-content space-between
  width 350px
  gap 40px

  &__info
    display flex
    flex-direction column
    justify-content space-between
    gap 5px

  &__portfolio
    display flex
    flex-direction column
    justify-content space-between
    gap 5px

  & button
    border 1px solid $block-main

.portfolio__btns
  display: flex;
</style>