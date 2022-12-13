<template>
  <div class="app">
    <Navbar></Navbar>
    <div class="wrapper" v-if="!isLoading">
      <router-view></router-view>
    </div>
    <div class="loading" v-else>
      Loading
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import {mapActions, mapState} from "vuex";
import {Storage} from "@/utils/storage";
export default {
  name: 'v-app',
  components: {
    Navbar
  },
  methods: {
    ...mapActions({
      FindUserByID: 'FindUserByID',
    }),
  },
  computed: {
    ...mapState({
      user: state => state.profile.user,
      isLoggedIn: state => state.profile.isLoggedIn,
      isLoading: state => state.profile.isLoading,
      error: state => state.profile.error
    }),
  },
  beforeMount() {
    if(Storage.get('id')){
      this.$store.commit("setLoading", true)
      this.FindUserByID(Storage.get('id'))
          .then((res)=>{
            Storage.set("id", res.data.data._id);
            this.$store.commit("LogIn", res.data.data)
            if(this.$store.state.profile.user) {
              this.$router.replace("/profile");
            }
          })
    }
  }
}
</script>

<style lang="stylus">
@import '@/App.vars.styl';
@import '@/App.mixins.styl';

@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css');

*{
  font-family 'Open Sans', 'sans-serif', 'FontAwesome'
  margin: 0
  padding: 0
}

body
  background $block-sec
  width 100%
  height 100vh
  display flex
  align-items center
  flex-direction column


#app, .app
  width: 100%
  height: 100%
  display flex
  align-items center
  justify-content center
  flex-direction column

.wrapper
  display flex
  align-items center
  flex-direction column
  width: 1000px
  height: 100%;

  .loading
    color $white

h1
  color $white

</style>