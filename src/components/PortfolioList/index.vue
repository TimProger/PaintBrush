<template>
  <div v-if="portfolios.length > 0">
    <transition-group name="portfolio-list">
      <portfolio-item
          v-for="portfolio in portfolios"
          :portfolio="portfolio"
          :user_id="user_id"
          :key="portfolio._id"
      />
    </transition-group>
  </div>
  <h2 v-else style="color: red">
    Список пользователей пуст
  </h2>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import PortfolioItem from "@/components/PortfolioItem/index.vue";
import {IPortfolio} from "@/types/profile.types";

export default defineComponent({
  name: 'portfolio-list',
  components: {PortfolioItem},
  props: {
    portfolios: {
      type: Array as PropType<IPortfolio[]>,
      required: true
    },
    user_id: {
      type: String,
      required: true
    }
  },
  setup: (props) => {
    console.log(props)
  }
})
</script>

<style scoped>
</style>