<script setup>
const props = defineProps({
    userData: {
        type: Object,
    }
})
</script>

<template>
    <article>
        <div class="heading">
            <img :src="userData.avatar_url" :alt="userData.user_name">
            <div>
                <h2>{{ userData.user_name }}</h2>
                <p>{{ userData.user_status }}</p>
            </div>
        </div>
        <div>
            <h3>
                {{ userData.feedback_title }}
            </h3>
            <p>
                "{{ userData.feedback_text }}"
            </p>
        </div>
    </article>
</template>
