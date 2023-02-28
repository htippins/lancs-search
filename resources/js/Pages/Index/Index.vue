<template>
    <main>
        <div class="h-3/4 bg-hero bg-cover bg-bottom">
            <div class="pl-32 pb-10">
                <div class="text-5xl md:text-[60px] pt-16 w-96">
                    <h1
                        class="bg-yellow-400 mb-2 leading-snug transform transition duration-700 hover:scale-x-105 pl-1"
                    >
                        Lancashire
                    </h1>
                    <h1
                        class="bg-yellow-400 mb-2 leading-snug transform transition duration-700 hover:scale-x-105 pl-1"
                    >
                        Support
                    </h1>
                    <h1
                        class="bg-yellow-400 mb-2 leading-snug transform transition duration-700 hover:scale-x-105 pl-1"
                    >
                        Network
                    </h1>
                </div>
            </div>
        </div>
        <div class="pl-32">
            <h2 class="pt-10">
                A centralised database of NHS and third-sector organisations
                offering social and mental health support in Lancashire.
            </h2>
            <div>
                <button class="border-2 p-2 rounded-md mt-5">
                    <Link :href="route('organisation.index')">
                        See full list here
                    </Link>
                </button>
            </div>
        </div>
    </main>

    <!-- <main class="container mx-auto">
        <div class="flex justify-center flex-col w-1/2 mx-auto gap-8 mb-10">
            <h1 class="text-center text-2xl">
                Welcome to Lancashire Support Network
            </h1>
            <p>
                The purpose of this site is to serve as a centralised database
                of NHS and third-sector organisations that offer support to the
                community for a variety of social and mental health issues in
                Lancashire.
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
                :href="route('user-account.create')"
                class="rounded-btn-index flex items-center justify-center text-center hover:bg-[#9BCCB4]"
                >Register</Link
            >
        </div>
    </main> -->
</template>

<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import { CheckIcon } from "@heroicons/vue/24/outline";

defineProps(["message"]);
</script>
