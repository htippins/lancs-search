<template>
    <div class="w-2/3 mx-auto">
        <Box v-for="organisation in organisations" :key="organisation.id">
            <h1>Title: {{ organisation.title }}</h1>
            <div>Description: {{ organisation.description }}</div>
        </Box>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import Box from "../../Components/UI/Box.vue";

defineProps({
    organisations: Array,
});
</script>
