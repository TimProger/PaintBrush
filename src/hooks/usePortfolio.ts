import { ref, onMounted } from "vue";
import { $api } from "@/http";
import { IUser } from "@/types/profile.types";
import { AxiosResponse } from "axios";

export function usePortfolio(user_id: string, portfolio_id: string) {
  const user = ref();
  const portfolio = ref();
  const isPortfolioLoading = ref(true);
  const fetching = async () => {
    try {
      const response = await $api.get<AxiosResponse<IUser>>(
        `/users/${user_id}`
      );
      user.value = response.data.data;
      portfolio.value = response.data.data.portfolio.find(
        (el) => el._id === portfolio_id
      );
    } catch (e) {
      alert("Ошибка");
    } finally {
      isPortfolioLoading.value = false;
    }
  };

  onMounted(fetching);

  return {
    user,
    portfolio,
    isPortfolioLoading,
  };
}
