<template>
    <main class="container mx-auto">
        <div class="flex justify-center flex-col w-1/2 mx-auto gap-8 mb-10">
            <h1 class="text-center text-2xl">Welcome to LancsSearch</h1>
            <p>
                The purpose of LancsSearch is to serve as a centralised database
                of NHS and third-sector organisations that offer support to the
                community for a variety of social and mental health issues in
                East Lancashire.
            </p>
            <p>
                We encourage you to add organisations that you think others
                might find useful. You can do this by creating an account and
                clicking the "Submit an Organisation" button which will appear
                to those with registered accounts.
            </p>
            <p>
                Once you have created an account, you can also favourite
                organisations you want to remember for later.
            </p>
        </div>
        <div class="flex gap-4 justify-center p-4">
            <Link
                :href="route('organisation.index')"
                class="rounded-btn-index flex items-center justify-center text-center hover:bg-[#9BCCB4]"
                >See full list</Link
            >
            <Link
                :href="route('login')"
                class="rounded-btn-index flex items-center justify-center text-center hover:bg-[#9BCCB4]"
                >Log in</Link
            >
            <Link
                :href="route('organisation.index')"
                class="rounded-btn-index flex items-center justify-center text-center hover:bg-[#9BCCB4]"
                >Register</Link
            >
        </div>
    </main>
</template>

<script setup>
import { Link } from "@inertiajs/inertia-vue3";

defineProps(["message"]);
</script>
