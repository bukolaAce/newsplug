<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";
import Loading from "~/components/Loading.vue";
definePageMeta({
  layout: "articles",
});


const route = useRoute();
const article = ref(null);
const loading = ref(true);

onMounted(async () => {
  const slug = route.params.id;
  try {
    const { data: articles } = await axios.get(
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=4c74f1905563413aa70dea00f7468dfc"
    );

    article.value = articles.articles.find((a) => {
      return slugify(a.title) === slug;
    });
  } catch (error) {
    console.error("Error fetching article:", error);
  } finally {
    loading.value = false;
  }
});

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};
</script>

<template>
  <section class="">
    <div v-if="loading"><Loading /></div>

    <div
      v-else-if="article"
      class="items-center justify-center space-y-4 md:flex"
    >
      <div class="flex items-center justify-center">
        <img
          :src="`${article.urlToImage}`"
          alt="image"
          class="rounded-lg sm:w-4/5"
        />
      </div>
      <div class="w-full space-y-5">
        <h1 class="md:text-3xl text-2xl text-[#0b0e37] font-bold flex">
          {{ article.title }}
        </h1>
        <p class="text-lg text-gray-600">{{ article.content }}</p>
        <p>
          <NuxtLink
            :to="article.url"
            target="_blank"
            class="text-[#0b0e37] underline"
            >Read more on {{ article.source.name }}</NuxtLink
          >
        </p>
      </div>
    </div>

    <div v-else>
      <p class="flex items-center justify-center text-3xl font-bold text-center text-blue-800">Article not found.</p>
    </div>
  </section>
</template>

<style scoped></style>
