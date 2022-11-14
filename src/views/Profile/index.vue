<template>
  <h1>Yo!</h1>
  <div v-if="isLoggedIn">
    <h1>{{ user.name }}</h1>
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

</style>
