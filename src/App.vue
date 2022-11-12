<template>
  <div class="app">
    <Navbar></Navbar>
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="stylus">
@import '@/App.vars.styl';
@import '@/App.mixins.styl';

</style>