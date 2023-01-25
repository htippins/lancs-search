<template>
    <main class="container mx-auto">
        <div>
            <h1>Welcome to LancsSearch</h1>
        </div>
        <div class="flex gap-4 justify-center p-4 mr-32">
            <Link
                :href="route('organisation.index')"
                class="rounded-btn-index flex items-center justify-center text-center"
                >See full list</Link
            >
            <Link
                :href="route('organisation.index')"
                class="rounded-btn-index flex items-center justify-center text-center"
                >Professionals log in</Link
            >
            <Link
                :href="route('organisation.index')"
                class="rounded-btn-index flex items-center justify-center text-center"
                >Register</Link
            >
            <Link
                :href="route('organisation.index')"
                class="rounded-btn-index flex items-center justify-center text-center"
                >Register</Link
            >
        </div>
    </main>
</template>

<script setup>
import { Link } from "@inertiajs/inertia-vue3";

defineProps(["message"]);
</script>
