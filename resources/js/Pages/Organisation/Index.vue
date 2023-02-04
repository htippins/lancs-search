<template>
    <Filters :filters="filters" />
    <div class="w-2/3 mx-auto">
        <!-- <button @click="showModal = true">Open Modal</button> -->

        <Box
            v-for="organisation in organisations.data"
            :key="organisation.id"
            :organisation="organisation"
        >
            <div>
                <div>
                    <h1 class="text-2xl">
                        {{ organisation.title }}
                    </h1>
                    <div class="text-sm tracking-tight text-gray-500 mb-2">
                        {{ organisation.demographic }} |
                        {{ organisation.category }}
                    </div>
                </div>
            </div>
            <h2 class="mb-3 italic">{{ organisation.description }}</h2>

            <!-- Contact details -->
            <div class="pt-3 border-t-2 border-[#f2cc8f]">
                <div class="flex flex-col gap-3 text-gray-500 text-sm">
                    <div class="flex justify-between items-center">
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
                    </div>
                    <div class="flex justify-between items-center">
                        <p v-if="organisation.email">
                            <font-awesome-icon icon="fa-solid fa-paper-plane" />
                            {{ organisation.email }}
                        </p>
                        <p v-if="organisation.website">
                            <a :href="organisation.website" target="_blank"
                                >{{ organisation.website }}
                            </a>
                        </p>
                        <p v-if="organisation.twitter">
                            <font-awesome-icon icon="fa-brands fa-twitter" />
                            {{ organisation.twitter }}
                        </p>
                    </div>
                    <div class="flex gap-1 items-center">
                        <font-awesome-icon icon="fa-solid fa-location-dot" />
                        <p v-if="organisation.city">{{ organisation.city }},</p>
                        <p v-if="organisation.county">
                            {{ organisation.county }}
                        </p>
                    </div>
                </div>
            </div>
        </Box>

        <div
            v-if="organisations.data.length"
            class="w-full flex justify-center mt-8 mb-8"
        >
            <Pagination :links="organisations.links"></Pagination>
        </div>

        <the-modal v-show="showModal" @close-modal="showModal = false">
            <div>{{ arr }}</div></the-modal
        >
    </div>
</template>

<script setup>
import { Link, usePage } from "@inertiajs/inertia-vue3";
import Box from "../../Components/UI/Box.vue";
import Pagination from "@/Components/UI/Pagination.vue";
import Filters from "@/Pages/Index/Components/Filters.vue";
import { ref, computed } from "vue";

defineProps({
    organisations: Object,
    filters: Object,
});

const page = usePage();
const user = computed(() => page.props.value.user);

const arr = ref([]);

const push = (id) => {
    arr.value.push(id);
};
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
