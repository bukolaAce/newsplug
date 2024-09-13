<script setup>
import { ref } from "vue";

</script>
<template>
  <div class="flex flex-col items-center justify-center w-full gap-6 md:flex-row ">
    <!-- First Loading -->
    <div class="flex flex-col gap-4 md:w-[40rem] w-[20rem]">
      <div class="w-full h-32 bg-gray-400 skeleton"></div>
      <div class="h-4 bg-gray-400 skeleton w-28 "></div>
      <div class="w-full h-4 bg-gray-400 skeleton "></div>
      <div class="w-full h-4 bg-gray-400 skeleton "></div>
    </div>
    <!-- Second Loading -->
    <div class="flex flex-col gap-4 md:w-[40rem] w-[20rem]">
      <div class="w-full h-32 bg-gray-400 skeleton "></div>
      <div class="h-4 bg-gray-400 skeleton w-28 "></div>
      <div class="w-full h-4 bg-gray-400 skeleton "></div>
      <div class="w-full h-4 bg-gray-400 skeleton "></div>
    </div>
    <!-- Third Loading -->
    <div class="flex flex-col gap-4 md:w-[40rem] w-[20rem]">
      <div class="w-full h-32 bg-gray-400 skeleton "></div>
      <div class="h-4 bg-gray-400 skeleton w-28 "></div>
      <div class="w-full h-4 bg-gray-400 skeleton "></div>
      <div class="w-full h-4 bg-gray-400 skeleton "></div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
