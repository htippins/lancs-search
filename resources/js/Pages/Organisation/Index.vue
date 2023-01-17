<template>
    <div class="w-2/3 mx-auto">
        <Box v-for="organisation in organisations" :key="organisation.id">
            <h1 class="text-2xl mb-2">{{ organisation.title }}</h1>
            <h2 class="mb-10 italic">{{ organisation.description }}</h2>
            <div class="flex gap-6">
                <p>
                    <span class="text-gray-500">Category: </span>
                    {{ organisation.category }}
                </p>
                <p>
                    <span class="text-gray-500">Demographic: </span>
                    {{ organisation.demographic }}
                </p>
            </div>

            <!-- Contact details -->
            <div class="mt-4">
                <p>Contact details</p>
                <div class="grid grid-cols-3 text-gray-600 text-md mt-2">
                    <p v-if="organisation.phone_num_1">
                        <font-awesome-icon icon="fa-solid fa-phone" />
                        {{ organisation.phone_num_1 }}
                    </p>
                    <p v-if="organisation.phone_num_2">
                        {{ organisation.phone_num_2 }}
                    </p>
                    <p v-if="organisation.text_num">
                        {{ organisation.text_num }}
                    </p>
                    <p v-if="organisation.website">
                        {{ organisation.website }}
                    </p>
                    <p v-if="organisation.email">
                        <font-awesome-icon icon="fa-solid fa-paper-plane" />
                        {{ organisation.email }}
                    </p>
                    <p v-if="organisation.twitter">
                        <font-awesome-icon icon="fa-brands fa-twitter" />
                        {{ organisation.twitter }}
                    </p>
                </div>
            </div>
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
