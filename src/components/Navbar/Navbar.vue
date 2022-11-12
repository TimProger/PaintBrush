<template>
  <div class="navbar">
    <div class="navbar__logo" @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <v-button @click="$router.push('/')">Главная</v-button>
      <v-button @click="$router.push('/profile')">Профиль</v-button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
@import '@/App.vars.styl';
@import '@/App.mixins.styl';

.navbar
  height 50px
  background-color $lightgray
  box-shadow 2px 2px 4px $gray
  display flex
  align-items center
  justify-content space-between
  padding 0 15px

  &__logo
    cursor pointer

  &__logo
    cursor pointer

</style>
