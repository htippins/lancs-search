<template>
    <div v-for="organisation in organisations" :key="organisation.id">
        <h1>Title: {{ organisation.title }}</h1>
        <div>Description: {{ organisation.description }}</div>
        <div>{{ organisation.category_id }}</div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/inertia-vue3";

defineProps({
    organisations: Array,
});
</script>
