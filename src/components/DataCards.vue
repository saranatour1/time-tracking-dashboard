<script setup lang="ts">
  import DefaultCard from "./DefaultCard.vue";
import { Activity } from '../utils/constants';

  const props = defineProps<{activities:Activity[]|null}>();
</script>


<template>
  <div  class=" grid  grid-cols-3 w-full h-full gap-6 max-md:grid-cols-1 max-sm:grid-col-1 ">
    <DefaultCard v-for="info in props.activities" :title="info.title" :color="info.color" :icon="info.icon" :timeframes="info.timeframes" />
  </div>
</template>