<script setup>
import { ref, onMounted } from 'vue';
import ArticleDaniel from './components/ArticleDaniel.vue';
import ArticleJonathan from './components/ArticleJonathan.vue';
import ArticleJeanetter from './components/ArticleJeanetter.vue';
import ArticlePatrick from './components/ArticlePatrick.vue';
import ArticleKira from './components/ArticleKira.vue';

const _isLoading = ref(true)
const _data = ref([]);

const fetchData = async () => {
  try {
    const response = await fetch("./assets/db/data.json");
    const jsonData = await response.json();
    _data.value = jsonData;
    _isLoading.value = false;
  } catch (error) {
    console.error("Error loading data", error)
  }
}

onMounted(() => fetchData())

</script>

<template>
  <h1 v-if="_isLoading">Loading testimonials...</h1>
  <main v-else class="w-10/12 grid grid-cols-1">
    <ArticleDaniel :user-data="_data[0]" />
    <ArticleJonathan :user-data="_data[1]" />
    <ArticleJeanetter :user-data="_data[2]" />
    <ArticlePatrick :user-data="_data[3]" />
    <ArticleKira :user-data="_data[4]" />
  </main>
</template>

<style scoped></style>
