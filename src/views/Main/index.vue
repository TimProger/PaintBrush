<template>
  <div class="main__container">
    <h1>Добро пожаловать на главную.</h1>
    <user-list
        :users="users"
        v-if="!isUsersLoading"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import {useUsers} from "@/hooks/useUsers";
import UserList from "@/components/UserList/index";
export default defineComponent({
  name: 'v-main',
  components: {
    UserList
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

.main

  &__container
    margin-top: 100px
    color $text-third

</style>
