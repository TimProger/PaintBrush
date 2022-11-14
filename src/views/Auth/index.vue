<template>
  <div id="auth" v-if="$route.params.page === 'login'">
    <v-auth />
  </div>
  <div id="auth" v-else>
    <v-reg />
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import VAuth from "@/components/AuthForm";
  import VReg from "@/components/RegisterForm";

  export default defineComponent({
    name: 'v-auth-page',
    components: {VAuth, VReg},
    data: () => ({
    }),
  })
</script>

<style lang="stylus" scoped>
@import '@/App.vars.styl';
@import '@/App.mixins.styl';

#auth
  width: 100%
  display flex
  align-items center
  flex-direction column
  gap 20px

</style>
