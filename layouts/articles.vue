<template>
  <div class="flex flex-col min-h-screen">
    <!-- NAVBAR -->
    <div>
      <header
        class="flex shadow-sm bg-[#0b0e37] font-[sans-serif] min-h-[70px] md:mb-10"
      >
        <div
          class="relative flex flex-wrap items-center justify-between w-full px-6 py-3 sm:px-10 lg:gap-y-4 gap-y-6 gap-x-4"
        >
          <div class="flex">
            <div class="">
              <NuxtLink to="/" class="text-2xl font-bold text-white sm:text-xl">
                NewsPlug
              </NuxtLink>
            </div>
          </div>

        
        </div>
      </header>
    </div>

    <!-- MAIN CONTENT -->
    <div class="container p-4 mx-auto md:p-0">
      <slot
        :filtered-items="filteredItems"
        :loading="loading"
        :error="error"
      />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { useArticles } from "~/composables/useArticles";
import Footer from "~/components/Footer.vue";

// Extract necessary data and methods from useArticles composable
const { username, filteredItems, loading, error, filterArticles } = useArticles();
</script>

<style scoped>
.router-link-exact-active {
  color: white;
  background-color: #15184d;
  padding: 10px 5px;
  border-radius: 9px;
}
</style>
