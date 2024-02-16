
<script setup lang="ts">
import { computed } from 'vue';
import iconWork from '../assets/icon-work.svg';
import iconPlay from '../assets/icon-play.svg';
import iconStudy from '../assets/icon-study.svg';
import iconExercise from '../assets/icon-exercise.svg';
import iconSocial from '../assets/icon-social.svg';
import iconSelfCare from '../assets/icon-self-care.svg';

import DotsIcon from "./DotsIcon.vue";


const icons: Record<string, string> = {
  "Work": iconWork,
  "Play": iconPlay,
  "Study": iconStudy,
  "Exercise": iconExercise,
  "Social": iconSocial,
  "Self Care": iconSelfCare
};

interface Timeframe {
  current: number;
  previous: number;
}


const props = defineProps<{ title: string, color: string, icon: string, timeframes: Timeframe }>();

const colorStyle = computed(() => ({ backgroundColor: props.color }));

</script>

<template>
  <div class=" rounded-xl flex flex-col   overflow-clip  " :class="`bg-[${props.color}]`" :style="colorStyle">
    <img :src="icons[props.title]" alt="" loading="lazy" class="w-16 ml-auto -translate-y-1 h-full max-h-16 p-1">
    <div
      class="mt-auto h-full max-h-[255px] bg-blue-lightest hover:bg-blue-le p-4 rounded-xl flex flex-col justify-around items-start transition-colors cursor-pointer">
      <div class="flex items-center justify-between self-start w-full">
        <span class=" font-rubik text-white font-semibold text-lg tracking-wider">{{ props.title }}</span>
        <DotsIcon />
      </div>

      <div class=" flex flex-col ">
        <span class=" text-4xl text-white font-rubik">{{ props.timeframes.current }}hrs</span>
        <span class="text-white/60 mt-2 font-rubik">Last week - {{ props.timeframes.previous }}hrs</span>
      </div>
    </div>
  </div>
</template>
