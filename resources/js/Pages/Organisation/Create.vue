<template>
    <form @submit.prevent="create">
        <div class="flex flex-col h-full w-1/2 mx-auto">
            <div>
                <label class="block mb-1 text-gray-500 font-medium"
                    >Name of organisation</label
                >
                <input
                    type="text"
                    v-model="form.title"
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 dark:border-gray-600 text-gray-500 mb-2"
                />
                <div v-if="form.errors.title">
                    <p>Required field</p>
                </div>
            </div>
            <div>
                <label class="block mb-1 text-gray-500 font-medium"
                    >Description</label
                >
                <textarea
                    type="text"
                    v-model="form.description"
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 dark:border-gray-600 text-gray-500 mb-2"
                />
                <div v-if="form.errors.description">
                    <p>Required field</p>
                </div>
            </div>
            <div>
                <label class="block mb-1 text-gray-500 font-medium"
                    >Category</label
                >
                <select
                    v-model="form.category"
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 dark:border-gray-600 text-gray-500 mb-2"
                >
                    <option disable value="">Please select...</option>
                    <option value="therapy">Therapy</option>
                    <option value="debt">Debt support</option>
                    <option value="bereavement">Bereavement</option>
                    <option value="education">MH related education</option>
                    <option value="anger management">Anger Management</option>
                    <option value="sexual trauma">Sexual trauma</option>
                    <option value="substance misuse">Substance Misuse</option>
                    <option value="gambling addiction">
                        Gambling addiction
                    </option>
                    <option value="housing">Housing/homelessness</option>
                    <option value="suicide/self harm">Suicide/self harm</option>
                    <option value="work">Mental health at work</option>
                    <option value="domestic abuse">Domestic Abuse</option>
                    <option value="ethnic miniorities">
                        Ethnic minorities
                    </option>
                    <option value="miscarriage">Miscarriage support</option>
                    <option value="eating disorders">Eating disorders</option>
                    <option value="conditions">Specific condition</option>
                    <option value="men's group">Men's Group</option>
                    <option value="wellbeing">General wellbeing</option>
                    <option value="carers">Services for carers</option>
                    <option value="misc">Miscallaneous</option>
                    <option value="befriending">Befriending</option>
                    <option value="veterans">Veterans</option>
                    <option value="food banks">Food banks</option>
                </select>
                <div v-if="form.errors.category">
                    <p>Required field</p>
                </div>
            </div>
            <div>
                <label class="block mb-1 text-gray-500 font-medium"
                    >Demographics</label
                >
                <select
                    v-model="form.demographics"
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 dark:border-gray-600 text-gray-500 mb-2"
                >
                    <option disable value="">Please select...</option>
                    <option value="young person">Young Persons</option>
                    <option value="adult">Adults</option>
                    <option value="older adult">Older Adults</option>
                </select>
                <div v-if="form.errors.demographics">
                    <p>Required field</p>
                </div>
            </div>
            <div>
                <label class="block mb-1 text-gray-500 font-medium"
                    >Town/City</label
                >
                <input
                    type="text"
                    v-model="form.city"
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 dark:border-gray-600 text-gray-500 mb-2"
                />
                <div v-if="form.errors.city">
                    <p>Required field</p>
                </div>
            </div>
            <div>
                <label class="block mb-1 text-gray-500 font-medium"
                    >County</label
                >
                <input
                    type="text"
                    v-model="form.county"
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 dark:border-gray-600 text-gray-500 mb-2"
                />
                <div v-if="form.errors.county">
                    <p>Required field</p>
                </div>
            </div>
            <div>
                <label class="block mb-1 text-gray-500 font-medium"
                    >Phone number</label
                >
                <input
                    type="text"
                    v-model.number="form.phone_num_1"
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 dark:border-gray-600 text-gray-500 mb-2"
                />
                <div v-if="form.errors.phone_num_1">
                    <p>Error with input</p>
                </div>
            </div>
            <div>
                <label class="block mb-1 text-gray-500 font-medium"
                    >Second phone number (optional)</label
                >
                <input
                    type="text"
                    v-model.number="form.phone_num_2"
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 dark:border-gray-600 text-gray-500 mb-2"
                />
                <div v-if="form.errors.phone_num_2">
                    <p>Error with input</p>
                </div>
            </div>
            <div>
                <label class="block mb-1 text-gray-500 font-medium"
                    >Text number (optional)</label
                >
                <input
                    type="text"
                    v-model.number="form.text_num"
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 dark:border-gray-600 text-gray-500 mb-2"
                />
                <div v-if="form.errors.text_num">
                    <p>Error with input</p>
                </div>
            </div>
            <div>
                <label class="block mb-1 text-gray-500 font-medium"
                    >Website (optional)</label
                >
                <input
                    type="text"
                    v-model="form.website"
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 dark:border-gray-600 text-gray-500 mb-2"
                />
                <div v-if="form.errors.website">
                    <p>Error with input</p>
                </div>
            </div>
            <div>
                <label class="block mb-1 text-gray-500 font-medium"
                    >Email (optional)</label
                >
                <input
                    type="email"
                    v-model="form.email"
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 dark:border-gray-600 text-gray-500 mb-2"
                />
            </div>
            <div>
                <label class="block mb-1 text-gray-500 font-medium"
                    >Twitter (optional)</label
                >
                <input
                    type="text"
                    v-model="form.twitter"
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 dark:border-gray-600 text-gray-500 mb-2"
                />
            </div>

            <div>
                <button
                    type="submit"
                    class="bg-indigo-600 hover:bg-indigo-500 text-white font-medium p-2 rounded-md w-full mt-2"
                >
                    Submit
                </button>
            </div>
        </div>
    </form>
</template>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";

const form = useForm({
    title: null,
    description: null,
    category: null,
    demographics: null,
    city: null,
    county: "Lancashire",
    phone_num_1: null,
    phone_num_2: null,
    text_num: null,
    website: null,
    email: null,
    twitter: null,
});

const create = () => form.post("/organisation");
</script>
