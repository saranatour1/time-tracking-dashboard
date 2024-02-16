<script setup lang="ts">
import DataCards from './components/DataCards.vue';
import MainCard from './components/MainCard.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import data from "./components/data.json";
import { Activity, Timeframe } from './utils/constants';

const active = ref("Daily");
const activeItems = ref<Activity[]|null>(null);
const changeActive = (str: string) => {
 
  let timeframeKey: keyof Timeframe;

  switch (str) {
    case 'Daily':
      timeframeKey = 'daily';
      break;
    case 'Weekly':
      timeframeKey = 'weekly';
      break;
    case 'Monthly':
      timeframeKey = 'monthly';
      break;
    default:
      timeframeKey = 'daily';
      return;
  }

  activeItems.value = data.map((activity) => ({
    title: activity.title,
    color: activity.color,
    icon: activity.icon,
    timeframes: {
      current: activity.timeframes[timeframeKey].current,
      previous: activity.timeframes[timeframeKey].previous
    }
  }));
};

onMounted(() => {
  changeActive("Daily");
});
onUnmounted(() => {
  changeActive("");
});
</script>

<template>
  <main class="p-0 m-0 w-full max-w-full min-h-screen bg-blue-very-dark flex flex-col justify-center items-center">
      <section class="w-full max-w-[69.375rem] h-full min-h-[32.375rem] grid  grid-col-4 grid-flow-col p-0 m-0 ">
        <MainCard :active="active" @change-route="str=> changeActive(str)"/>

        <div class=" col-span-3">
          <DataCards :activities="activeItems"/>
        </div>
      </section>  
  </main>
</template>

<style scoped>

</style>
