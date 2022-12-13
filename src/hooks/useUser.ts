import { ref, onMounted } from "vue";
import { $api } from "@/http";

export function useUser(id: string) {
  const user = ref();
  const isUserLoading = ref(true);
  const fetching = async () => {
    try {
      const response = await $api.get(`/users/${id}`);
      user.value = response.data.data;
    } catch (e) {
      alert("Ошибка");
    } finally {
      isUserLoading.value = false;
    }
  };

  onMounted(fetching);

  return {
    user,
    isUserLoading,
  };
}
