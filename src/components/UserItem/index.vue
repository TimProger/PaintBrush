<template>
  <div class="user">
    <div class="user__info">
      <h3>Info:</h3>
      <div><strong>Name:</strong> {{ user.name }}</div>
      <div><strong>Email:</strong> {{ user.email }}</div>
    </div>
    <div v-if="user.portfolio.length > 0" class="user__portfolio">
      <h3>Portfolio:</h3>
      <div><strong>Title:</strong> {{ user.portfolio[0].title }}</div>
      <div><strong>Description:</strong> {{ user.portfolio[0].description }}</div>
      <div><strong>Date:</strong> {{new Date(user.portfolio[0].date).toLocaleDateString()}}</div>
    </div>
    <v-button  @click="$router.push(`/users/${user._id}`)">Go</v-button>
  </div>
</template>

<script lang="ts">
import {PropType} from "vue";
import {IUser} from "@/types/profile.types";

export default {
  name: 'user-item',
  props: {
    user: {
      type: Object as PropType<IUser>,
      required: true,
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '@/App.vars.styl';
@import '@/App.mixins.styl';
.user
  padding 15px
  color $text-third
  border 2px solid $block-main
  margin-top 15px
  display flex
  flex-direction column
  justify-content space-between
  gap 20px

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
</style>