<script setup>
const props = defineProps({
    user_name: {
        type: String,
        required: true
    },
    avatar_url: {
        type: String,
        required: true
    },
    user_status: {
        type: String,
        default: "unknown"
    },
    feedback_title: {
        type: String,
        required: true
    },
    feedback_text: {
        type: String,
        required: true
    }
})
</script>

<template>
    <article class="container" :class="user_name.toLowerCase()">
        <div class="user-profile">
            <img :src="avatar_url" :alt="user_name" class="avatar">
            <div class="user-details">
                <h2>{{ user_name }}</h2>
                <p>{{ user_status }}</p>
            </div>
        </div>

        <p class="main-testimonial">
            {{ feedback_title }}
        </p>
        <p class="quote">
            " {{ feedback_text }} "
        </p>

    </article>
</template>