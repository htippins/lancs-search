<template>
    <header class="border-b border-gray-200 w-full">
        <div class="container mx-auto">
            <nav class="p-4 flex items-center justify-between">
                <div class="text-lg font-medium">
                    <Link href="/organisation">Browse</Link>
                </div>
                <div class="text-xl text-indigo-600 font-bold text-center">
                    <Link href="/">LancsSearch</Link>
                </div>
                <div>
                    <Link
                        href="/organisation/create"
                        class="bg-indigo-600 hover:bg-indigo-500 text-white font-medium p-2 rounded-md"
                        >+ Submit an organisation</Link
                    >
                </div>
            </nav>
        </div>
        <div v-if="flashSuccess" class="bg-red-900">
            {{ flashSuccess }}
        </div>
    </header>

    <main class="container mx-auto p-4">
        <slot>Default</slot>
    </main>
</template>

<script setup>
import { computed } from "vue";
import { Link, usePage } from "@inertiajs/inertia-vue3";

const page = usePage();
const flashSuccess = computed(() => page.props.value.flash.success);
</script>
