<script setup lang="ts">
import DataCards from './components/DataCards.vue';
import MainCard from './components/MainCard.vue';


</script>

<template>
  <main class="p-0 m-0 w-full max-w-full min-h-screen bg-blue-very-dark flex flex-col justify-center items-center">
      <section class="w-full max-w-[69.375rem] h-full min-h-[32.375rem] grid  grid-col-4 grid-flow-col p-0 m-0 ">
        <MainCard />

        <div class=" col-span-3">
          <DataCards />
        </div>
      </section>  
  </main>
</template>

<style scoped>

</style>
