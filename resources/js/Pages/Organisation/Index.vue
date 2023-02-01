<template>
    <Filters :filters="filters" />
    <div class="w-2/3 mx-auto">
        <!-- <button @click="showModal = true">Open Modal</button> -->

        <Box
            v-for="organisation in organisations.data"
            :key="organisation.id"
            :organisation="organisation"
        >
            <div class="flex justify-between">
                <div>
                    <h1 class="text-2xl mb-2">
                        {{ organisation.title }}
                    </h1>
                </div>
                <div v-if="user">
                    <Link :href="route('organisation.edit', organisation.id)"
                        ><font-awesome-icon icon="fa-solid fa-pen-to-square" />
                    </Link>
                    &nbsp;
                    <Link
                        :href="route('organisation.destroy', organisation.id)"
                        method="DELETE"
                        as="button"
                        ><font-awesome-icon icon="fa-solid fa-trash"
                    /></Link>
                    <!-- &nbsp;
                    <button @click="push(organisation.id)">+</button> -->
                </div>
            </div>
            <h2 class="mb-6 italic">{{ organisation.description }}</h2>
            <div class="">
                <p class="text-[#3d405b]">
                    <span class="text-gray-500 font-light">Category: </span>
                    {{ organisation.category }}
                </p>
                <p class="text-[#3d405b]">
                    <span class="text-gray-500 font-light">Demographic: </span>
                    {{ organisation.demographic }}
                </p>
            </div>

            <!-- Contact details -->
            <div class="mt-3 border-t-4 border-[#f2cc8f]">
                <p class="mt-3">Contact details</p>
                <div class="flex flex-col gap-3 text-gray-600 text-md">
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
