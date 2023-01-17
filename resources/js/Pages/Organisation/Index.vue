<template>
    <div class="w-2/3 mx-auto">
        <Box v-for="organisation in organisations" :key="organisation.id">
            <h1 class="text-2xl mb-2">{{ organisation.title }}</h1>
            <h2 class="mb-10 italic">{{ organisation.description }}</h2>
            <p>
                {{ organisation.category }}
            </p>
            <p>
                {{ organisation.demographic }}
            </p>

            <!-- Contact details -->
            <div>
                <div class="flex justify-between text-gray-600 text-md mt-2">
                    <p v-if="organisation.phone_num_1">
                        <font-awesome-icon
                            icon="fa-solid fa-phone"
                            class="text-black"
                        />
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
                        <font-awesome-icon
                            icon="fa-solid fa-paper-plane"
                            class="text-black"
                        />
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
