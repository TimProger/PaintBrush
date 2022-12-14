<template>
  <div v-if="isLoggedIn" class="profile__container">
    <h1>Profile</h1>
    <div>
      <h3>Name: {{ user.name }}</h3>
      <h3>Email: {{ user.email }}</h3>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
  export default defineComponent({
    name: 'v-profile',
    data: () => ({
      name: 'Bob'
    }),
    computed: {
      ...mapState({
        user: state => state.profile.user,
        isLoggedIn: state => state.profile.isLoggedIn,
        isLoading: state => state.profile.isLoading,
        error: state => state.profile.error
      }),
    },
    beforeMount() {
      !this.isLoggedIn && this.$router.replace('/auth/login')
    }
  })
</script>

<style lang="stylus" scoped>
@import '@/App.vars.styl';
@import '@/App.mixins.styl';

.profile

  &__container
    width: 100%
    margin-top: 100px
    color $text-third
    display flex
    flex-direction column
    gap 20px

</style>
