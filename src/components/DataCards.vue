<script setup lang="ts">
import data from "./data.json";
import DefaultCard from "./DefaultCard.vue";


const dailyInfo = data.map(activity => ({
  title: activity.title,
  color:activity.color,
  icon:activity.icon,
  timeframe:{
    current: activity.timeframes.daily.current,
  previous: activity.timeframes.daily.previous
  }
}))


</script>


<template>
  <div  class=" grid  grid-cols-3 w-full h-full gap-6 ">
    <DefaultCard v-for="info in dailyInfo" :title="info.title" :color="info.color" :icon="info.icon" :timeframes="info.timeframe" />
  </div>
</template>