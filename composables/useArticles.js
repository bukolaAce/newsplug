import { ref, onMounted } from 'vue';
import axios from 'axios';

export function useArticles() {
  const username = ref(""); // This will be used for the search input
  const allItems = ref([]); // Store all articles fetched initially
  const filteredItems = ref([]); // Store filtered articles based on search
  const error = ref(null); // Handle errors
  const loading = ref(true); // Loading state

  // Fetch all articles from the BBC news API on mount
  const fetchAllArticles = async () => {
    try {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=4c74f1905563413aa70dea00f7468dfc`
      );
      allItems.value = data.articles; // Store all articles
      filteredItems.value = data.articles; // Initially, all items are displayed
    } catch (err) {
      console.error("Error fetching data:", err);
      error.value = "An error occurred while fetching data.";
    } finally {
      loading.value = false; // End loading state
    }
  };

  // Filter articles based on the search input
  const filterArticles = () => {
    if (!username.value) {
      filteredItems.value = allItems.value; // Show all articles if search is empty
    } else {
      const searchQuery = username.value.toLowerCase();
      filteredItems.value = allItems.value.filter((item) =>
        item.title.toLowerCase().includes(searchQuery)
      );
    }
  };

  // Fetch all articles when the composable is used
  onMounted(() => {
    fetchAllArticles();
  });

  return {
    username,
    allItems,
    filteredItems,
    error,
    loading,
    filterArticles,
    fetchAllArticles
  };
}
