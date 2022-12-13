<template>
  <div class="main__container">
    <h1>Добро пожаловать на главную.</h1>
    <portfolio-list
        :users="users"
        v-if="!isUsersLoading"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import {useUsers} from "@/hooks/useUsers";
import PortfolioList from "@/components/PortfolioList/index";
export default defineComponent({
  name: 'v-main',
  components: {
    PortfolioList
  },
  setup(props) {
    const {users, isUsersLoading} = useUsers();
    return {
      users,
      isUsersLoading,
    }
  }
});
</script>

<style lang="stylus" scoped>
@import '@/App.vars.styl';
@import '@/App.mixins.styl';

.main__container
  margin-top: 100px
  color $text-third

</style>
