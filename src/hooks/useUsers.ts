import { ref, onMounted } from "vue";
import { $api } from "@/http";

export function useUsers() {
  const users = ref([]);
  const isUsersLoading = ref(true);
  const fetching = async () => {
    try {
      const response = await $api.get("/users");
      users.value = response.data.data;
    } catch (e) {
      alert("Ошибка");
    } finally {
      isUsersLoading.value = false;
    }
  };

  onMounted(fetching);

  return {
    users,
    isUsersLoading,
  };
}
