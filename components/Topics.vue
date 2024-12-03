<template>
  <div>
    <div class="card bg-[#15184d] md:w-96 shadow-xl ">
      <figure>
        <img :src="`${item.urlToImage}`" alt="image" />
      </figure>
      <div class="card-body">
        <!-- Display the passed content via the slot -->
        <slot :item="item">
          <!-- Default content in case no slot content is provided -->
          <h1 class="text-xl text-[#ffffff]">
            {{ item.description }}
            <NuxtLink :to="`/${slugify(item.title)}`" class="underline md:text-xs text-[20px]">
              Read More
            </NuxtLink>
          </h1>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  item: Object,
});

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')        // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, '')    // Remove all non-word chars
    .replace(/\-\-+/g, '-')      // Replace multiple hyphens with a single hyphen
    .replace(/^-+/, '')          // Trim hyphens from the start of the string
    .replace(/-+$/, '');         // Trim hyphens from the end of the string
};
</script>

<style lang="scss" scoped></style>