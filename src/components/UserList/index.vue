<template>
  <div v-if="users.length > 0">
    <transition-group name="users-list">
      <user-item
          v-for="user in users"
          :user="user"
          :key="user._id"
      />
    </transition-group>
  </div>
  <h2 v-else style="color: red">
    Список пользователей пуст
  </h2>
</template>

<script>
import UserItem from "@/components/UserItem";
export default {
  name: 'user-list',
  components: {UserItem},
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>