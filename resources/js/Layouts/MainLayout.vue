<template>
    <header class="border-b border-gray-200 w-full">
        <div class="container mx-auto">
            <nav class="p-4 flex items-center justify-between">
                <div class="text-xl text-[#81b29a] font-bold text-center">
                    <Link href="/" class="tracking-tight">lsn</Link>
                </div>
                <div class="flex gap-4 items-center" v-if="user">
                    <div class="text-sm text-gray-500">
                        Hello, {{ user.name }}!
                    </div>
                    <Link
                        :href="route('organisation.create')"
                        class="bg-[#81b29a] hover:bg-[#9BCCB4] text-white font-medium p-2 rounded-md"
                        >+ Submit an organisation</Link
                    >
                    <div>
                        <Link
                            :href="route('logout')"
                            method="delete"
                            as="button"
                            >Logout</Link
                        >
                    </div>
                </div>
                <div v-else class="flex items-center gap-2">
                    <Link :href="route('user-account.create')">Register</Link>
                    |
                    <Link :href="route('login')">Sign in</Link>
                </div>
            </nav>
        </div>
    </header>

    <main class="container mx-auto p-4 w-full">
        <div
            v-if="flashSuccess"
            class="mb-4 border rounded-md shadow-sm border-green-200 bg-green-50 p-2"
        >
            {{ flashSuccess }}
        </div>
        <slot>Default</slot>
    </main>
</template>

<script setup>
import { computed } from "vue";
import { Link, usePage } from "@inertiajs/inertia-vue3";

const page = usePage();
const flashSuccess = computed(() => page.props.value.flash.success);

const user = computed(() => page.props.value.user);
</script>
