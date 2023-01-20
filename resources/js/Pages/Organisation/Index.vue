<template>
    <div class="w-2/3 mx-auto">
        <button @click="showModal = true">Open Modal</button>

        <Box v-for="organisation in organisations" :key="organisation.id">
            <div class="flex justify-between">
                <div>
                    <h1 class="text-2xl mb-2">{{ organisation.title }}</h1>
                </div>
                <div>
                    <Link :href="`/organisation/${organisation.id}/edit`"
                        ><font-awesome-icon icon="fa-solid fa-pen-to-square" />
                    </Link>
                    &nbsp;
                    <Link
                        :href="`/organisation/${organisation.id}`"
                        method="DELETE"
                        as="button"
                        ><font-awesome-icon icon="fa-solid fa-trash"
                    /></Link>
                </div>
            </div>
            <h2 class="mb-6 italic">{{ organisation.description }}</h2>
            <div class="flex justify-between">
                <p class="text-[#3d405b] font-medium">
                    <span class="text-slate-500 font-light">Category: </span>
                    {{ organisation.category }}
                </p>
                <p class="text-[#e07a5f] font-medium">
                    <span class="text-slate-500 font-light">Demographic: </span>
                    {{ organisation.demographic }}
                </p>
            </div>

            <!-- Contact details -->
            <div class="mt-3 border-t-4 border-[#f2cc8f]">
                <p class="mt-3">Contact details</p>
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
        <the-modal
            v-show="showModal"
            @close-modal="showModal = false"
        ></the-modal>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Box from "../../Components/UI/Box.vue";

defineProps({
    organisations: Array,
});
</script>

<script>
import Modal from "../../Components/UI/Modal.vue";
export default {
    components: {
        "the-modal": Modal,
    },
    data() {
        return {
            showModal: false,
        };
    },
};
</script>
