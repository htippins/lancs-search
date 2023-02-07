<template>
    <main class="mx-auto">
        <div class="grid grid-cols-5 h-screen w-screen">
            <div class="h-full z-20 rounded-r-xl col-span-3">
                <div
                    class="text-[60px] pt-16 leading-snug transform transition duration-700 hover:scale-x-105 w-1/4"
                >
                    <h1>Lancashire</h1>
                    <h1>Support</h1>
                    <h1>Network</h1>
                </div>
                <h2 class="mt-2">
                    A centralised database of NHS and third-sector organisations
                    offering social and mental health support.
                </h2>
                <div>
                    <button class="border-2 p-2 rounded-md mt-5">
                        <Link :href="route('organisation.index')">
                            See full list here
                        </Link>
                    </button>
                </div>
            </div>
            <div class="w-full h-full z-10 col-span-2 bg-no-repeat">
                <img
                    src="./Assets/hero-img.jpg"
                    alt=""
                    class="w-full h-full rounded-l-lg"
                />
            </div>
        </div>
        <section>
            <div class="border-2 p-4 w-1/2 mx-auto rounded-md mt-20 leading-10">
                <div class="flex items-center gap-2 justify-center">
                    <CheckIcon class="h-4 w-4" />
                    <p>Click on the link above to see the full list</p>
                </div>
                <div class="flex items-center gap-2 justify-center">
                    <CheckIcon class="h-4 w-4" />
                    <p>Verified organisations</p>
                </div>
                <div class="flex items-center gap-2 justify-center">
                    <CheckIcon class="h-4 w-4" />
                    <p>
                        Filter to find by organisation name, locality,
                        demographic or age group
                    </p>
                </div>
                <div class="flex items-center gap-2 justify-center">
                    <CheckIcon class="h-4 w-4" />
                    <p>
                        Add organisations that might be helpful to others by
                        creating an account
                    </p>
                </div>
                <div class="flex items-center gap-2 justify-center">
                    <CheckIcon class="h-4 w-4" />
                    <p>
                        Add organisations that might be helpful to others by
                        creating an account
                    </p>
                </div>
                <div class="flex items-center gap-2 justify-center">
                    <CheckIcon class="h-4 w-4" />
                    <p>
                        Add organisations that might be helpful to others by
                        creating an account
                    </p>
                </div>
            </div>
        </section>
    </main>
    <!-- <section class="h-96 w-full">
        <div>HEllo</div>
        <div>HEllo</div>
        <div>HEllo</div>
        <div>HEllo</div>
        <div>HEllo</div>
        <div>HEllo</div>
        <div>HEllo</div>
    </section> -->

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
