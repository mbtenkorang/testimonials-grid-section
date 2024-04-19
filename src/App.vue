<script setup>
import { ref, onMounted } from 'vue';
import UserTestimonial from './components/UserTestimonial.vue';

const _isLoading = ref(true)
const _testimonialData = ref([]);

const fetchData = async () => {
  try {
    const response = await fetch("./assets/db/data.json");
    const jsonData = await response.json();
    _testimonialData.value = jsonData;
    _isLoading.value = false;
  } catch (error) {
    console.error("Error loading data", error)
  }
}

onMounted(() => fetchData())

</script>

<template>
  <h1 class="hidden">Testimonials</h1>
  <p v-if="_isLoading">Loading testimonials...</p>

  <UserTestimonial v-else
    v-for="{id,user_name, avatar_url,user_status,feedback_title,feedback_text} in _testimonialData"
    :user_name="user_name" :user_status="user_status" :avatar_url="avatar_url" :feedback_title="feedback_title"
    :feedback_text="feedback_text" :key="id" />


</template>

<style scoped></style>
