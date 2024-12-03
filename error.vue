<template>
  <div class="max-w-sm mx-auto text-center mt-7 card">
    <p class="font-bold mt-7 text-7xl">{{ error.statusCode }}</p>
    <p class="text-6xl mt-7">Oooops.</p>
    <p class="mt-7">{{ error.message }}</p>
  </div>
</template>

<script setup>
defineProps(['error']);
</script>

<style lang="scss" scoped></style>
