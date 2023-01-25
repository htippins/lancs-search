<template>
    <div class="flex justify-center">
        <form @submit.prevent="filter">
            <div class="mb-8 mt-4 flex flex-wrap gap-2">
                <div class="flex flex-nowrap items-center">
                    <input
                        v-model="filterForm.title"
                        type="text"
                        placeholder="Organisation name"
                        class="input-filter-l"
                    />
                    <input
                        v-model="filterForm.city"
                        type="text"
                        placeholder="Location"
                        class="input-filter-r"
                    />
                </div>
                <div class="flex flex-nowrap items-center">
                    <select
                        class="input-filter-l"
                        v-model="filterForm.category"
                    >
                        <option :value="null">Category</option>
                        <option v-for="category in categories">
                            {{ category.cat }}
                        </option>
                    </select>
                    <select
                        class="input-filter-r"
                        v-model="filterForm.demographic"
                    >
                        <option :value="null">Demographic</option>
                        <option v-for="demographic in demographics">
                            {{ demographic.type }}
                        </option>
                    </select>
                </div>

                <button type="submit" class="btn-normal">Filter</button>
                <button type="reset" @click="clear">Clear</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";

const props = defineProps({ filters: Object });

const filterForm = useForm({
    title: props.filters.title ?? null,
    city: props.filters.city ?? null,
    category: props.filters.category ?? null,
    demographic: props.filters.demographic ?? null,
});

const filter = () => {
    filterForm.get(route("organisation.index"), {
        preserveState: true,
        preserveScroll: true,
    });
};

const clear = () => {
    filterForm.title = null;
    filterForm.city = null;
    filterForm.category = null;
    filterForm.demographic = null;
    filter();
};

const categories = [
    { cat: "Therapy" },
    { cat: "Debt" },
    { cat: "Bereavement" },
    { cat: "Education" },
    { cat: "Anger Management" },
    { cat: "Sexual Trauma" },
    { cat: "Substance misuse" },
    { cat: "Gambling addiction" },
    { cat: "Housing" },
    { cat: "Suicide/self-harm" },
    { cat: "Mental health at work" },
    { cat: "Domestic abuse" },
    { cat: "Ethnic miniorities" },
    { cat: "Miscarriage support" },
    { cat: "Eating disorders" },
    { cat: "Specific conditions" },
    { cat: "Men's groups" },
    { cat: "General Wellbeing" },
    { cat: "Carer support" },
    { cat: "Misc" },
    { cat: "Befriending" },
    { cat: "Veterans" },
    { cat: "Food banks" },
];

const demographics = [
    { type: "Young persons" },
    { type: "Adult" },
    { type: "Older adults" },
    { type: "Any age" },
];
</script>
