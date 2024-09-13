<script setup>
import Topics from "~/components/Topics.vue";
import Loading from "~/components/Loading.vue";
import { useArticles } from "~/composables/useArticles";

const { username, filteredItems, loading, error, filterArticles } =
  useArticles();
</script>

<template>
  <section class="flex flex-col items-center w-full ">
    <!-- NAVBAR -->
    <div class="flex flex-col w-full mb-5 md:mb-10">
      <header
        class="flex shadow-sm bg-[#0b0e37] font-[sans-serif] min-h-[70px]"
      >
        <div
          class="relative flex flex-wrap items-center justify-between w-full px-6 py-3 sm:px-10 lg:gap-y-4 gap-y-6 gap-x-4"
        >
          <div class="flex">
            <div class="">
              <NuxtLink to="/" class="text-2xl font-bold text-white sm:text-xl"
                >NewsPlug</NuxtLink
              >
            </div>
          </div>

          <div
            class="flex px-4 bg-gray-100 border-2 border-transparent rounded max-md:order-1 h-11 lg:w-[30%] max-md:w-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              class="mr-4 rotate-90 fill-gray-400"
            >
              <path
                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"
              ></path>
            </svg>
            <input
              v-model="username"
              @input="filterArticles"
              placeholder="Search"
              class="w-full outline-none bg-transparent text-[#333] text-sm"
            />
          </div>
        </div>
      </header>
    </div>

    <!-- LOADING -->
    <div v-if="loading" class="md:w-[95%]"><Loading /></div>

    <!-- DISPLAY FILTERED ITEMS -->
    <div v-else-if="filteredItems.length">
      <div class="grid gap-5 md:grid-cols-3 sm:grid-cols-2">
        <div v-for="item in filteredItems" :key="item.title" class="px-2 mb-4 md:px-0">
          <Topics :item="item" />
        </div>
      </div>
    </div>

    <!-- NO ARTICLES FOUND -->
    <div v-else>
      <p>Article not found.</p>
    </div>
  </section>
</template>

<style scoped></style>
