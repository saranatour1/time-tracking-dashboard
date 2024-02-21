<script setup lang="ts">
  import avatar from "../assets/image-jeremy.png";
  const routes = ["Daily", "Weekly", "Monthly"];
  const props = defineProps<{active:string}>();
  const emits = defineEmits(['change-route']);
</script>

<template>
  <div class="flex flex-col justify-start items-start   w-full max-w-[15.875rem] bg-blue-lightest  rounded-xl max-md:max-w-full max-md:h-fit max-md:col-span-3 max-md:mb-4  max-md:mt-4">
    <div class=" p-6 flex flex-col justify-start gap-y-8 items-start bg-blue-card w-full h-2/3 rounded-xl max-md:flex-row max-md:justify-start max-md:gap-4 max-md:h-auto">
      <img :src="avatar" alt="jeremy" class=" w-24 inline-block border-2 border-white rounded-full">
      <span class="flex flex-col">
        <small class=" font-rubik text-lg text-white/40">Report for</small>
        <span class=" font-rubik text-4xl text-white font-normal break-words tracking-wider">Jeremy <br /> Robson</span>
      </span>
    </div>

    <div class=" flex flex-col items-start gap-y-4 p-4 mt-4 max-md:flex-row">
      <button @click="$emit('change-route',route)" v-for="route in routes" class="  hover:text-white cursor-pointer ps-4 font-rubik border-none outline-none"  :class="route === props.active ? 'text-white':'text-white/40'" > {{ route }}</button>
    </div>
  </div>
</template>