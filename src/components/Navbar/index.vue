<template>
  <div class="navbar">
    <div class="navbar__wrapper">
      <div class="navbar__logo" @click="$router.push('/')">PaintBrush</div>
      <div class="navbar__btns">
        <v-button @click="$router.push('/')">Главная</v-button>
        <v-button @click="$router.push('/profile')">{{ isLoggedIn ? 'Профиль' : 'Войти' }}</v-button>
        <v-button v-show="isLoggedIn" @click="HandleExit">Выйти</v-button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {Storage} from "@/utils/storage";

export default {
  name: 'v-navbar',
  computed: {
    ...mapState({
      isLoggedIn: state => state.profile.isLoggedIn,
    }),
  },
  methods: {
    HandleExit: function(e) {
      Storage.delete('id')
      this.$store.commit("LogOut")
      this.$router.replace('/auth/login')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '@/App.vars.styl';
@import '@/App.mixins.styl';

.navbar
  height 50px
  background-color $block-main
  box-shadow 2px 2px 4px $block-sec
  width: 100%
  display flex
  align-items center
  justify-content center
  position fixed
  top 0

  &__wrapper
    display flex
    align-items center
    justify-content space-between
    width: 1000px

  &__logo
    cursor pointer
    color $block-sec

  &__btns
    display flex
    gap 10px

</style>
