<template>
    <h1 class="text-2xl mb-4">Your organisations</h1>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Box v-for="organisation in organisations" :key="organisation.id">
            <div
                class="flex flex-row md:flex-col gap-2 md:items-center justify-between"
            >
                <div>Left</div>
                <div>Right</div>
            </div>
        </Box>
    </section>
</template>

<script setup>
import Box from "../../Components/UI/Box.vue";

defineProps({ organisations: Array });
</script>
