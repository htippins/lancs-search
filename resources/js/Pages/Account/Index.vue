<template>
    <h1 class="text-2xl mb-4">Organisations added by you:</h1>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Box v-for="organisation in organisations" :key="organisation.id">
            <div
                class="flex flex-col md:flex-row gap-2 md:items-center justify-between"
            >
                <div>
                    <div class="flex justify-between">
                        <div class="text-lg">
                            {{ organisation.title }}
                            <div
                                class="text-sm mb-2 text-gray-500 tracking-tight"
                            >
                                {{ organisation.category }} |
                                {{ organisation.demographic }}
                            </div>
                        </div>
                        <div>
                            <Link
                                :href="
                                    route('organisation.edit', organisation.id)
                                "
                                ><font-awesome-icon
                                    icon="fa-solid fa-pen-to-square"
                                />
                            </Link>
                            &nbsp;
                            <Link
                                :href="
                                    route(
                                        'organisation.destroy',
                                        organisation.id
                                    )
                                "
                                method="DELETE"
                                as="button"
                                ><font-awesome-icon icon="fa-solid fa-trash"
                            /></Link>
                        </div>
                    </div>

                    <div class="italic text-sm mb-2">
                        {{ organisation.description }}
                    </div>
                    <div class="text-sm mb-2">
                        <font-awesome-icon icon="fa-solid fa-location-dot" />
                        {{ organisation.city }}, {{ organisation.county }}
                    </div>
                    <div class="text-sm text-gray-500">
                        <h2 class="text-lg text-black">Contact details</h2>
                        <div>
                            {{ organisation.phone_num_1 }}
                            {{ organisation.phone_num_2 }}
                            {{ organisation.text_num }}
                        </div>
                        <div>
                            {{ organisation.website }}
                        </div>
                        <div>
                            {{ organisation.email }}
                        </div>
                        <div>
                            {{ organisation.twitter }}
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    </section>
</template>

<script setup>
import { Link, usePage } from "@inertiajs/inertia-vue3";
import Box from "../../Components/UI/Box.vue";

defineProps({ organisations: Array });
</script>
