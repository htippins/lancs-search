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
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2"
                />
                <div v-if="form.errors.title">
                    <p class="text-right text-red-800">Required field</p>
                </div>
            </div>
            <div>
                <label class="block mb-1 text-gray-500 font-medium"
                    >Description</label
                >
                <textarea
                    type="text"
                    v-model="form.description"
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2"
                />
                <div v-if="form.errors.description">
                    <p class="text-right text-red-800">Required field</p>
                </div>
            </div>
            <div>
                <label class="block mb-1 text-gray-500 font-medium"
                    >Category</label
                >
                <select
                    v-model="form.category"
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2"
                >
                    <option disable value="">Please select...</option>
                    <option value="Therapy">Therapy</option>
                    <option value="Debt">Debt support</option>
                    <option value="Bereavement">Bereavement</option>
                    <option value="Education">MH related education</option>
                    <option value="Anger management">Anger Management</option>
                    <option value="Sexual trauma">Sexual trauma</option>
                    <option value="Substance misuse">Substance Misuse</option>
                    <option value="Gambling addiction">
                        Gambling addiction
                    </option>
                    <option value="Housing">Housing/homelessness</option>
                    <option value="Suicide/self harm">Suicide/self harm</option>
                    <option value="Mental health at work">
                        Mental health at work
                    </option>
                    <option value="Domestic abuse">Domestic Abuse</option>
                    <option value="Ethnic miniorities">
                        Ethnic minorities
                    </option>
                    <option value="Miscarriage support">
                        Miscarriage support
                    </option>
                    <option value="Eating disorders">Eating disorders</option>
                    <option value="Specific conditions">
                        Specific condition
                    </option>
                    <option value="Men's groups">Men's Group</option>
                    <option value="General wellbeing">General wellbeing</option>
                    <option value="Carer support">Services for carers</option>
                    <option value="Misc">Miscallaneous</option>
                    <option value="Befriending">Befriending</option>
                    <option value="Veterans">Veterans</option>
                    <option value="Food banks">Food banks</option>
                </select>
                <div v-if="form.errors.category">
                    <p class="text-right text-red-800">Required field</p>
                </div>
            </div>
            <div>
                <label class="block mb-1 text-gray-500 font-medium"
                    >Demographics</label
                >
                <select
                    v-model="form.demographic"
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2"
                >
                    <option disable value="">Please select...</option>
                    <option value="Young persons">Young Persons</option>
                    <option value="Adult">Adults</option>
                    <option value="Older adults">Older Adults</option>
                    <option value="Any age">Any age</option>
                </select>
                <div v-if="form.errors.demographic">
                    <p class="text-right text-red-800">Required field</p>
                </div>
            </div>
            <div>
                <label class="block mb-1 text-gray-500 font-medium"
                    >Town/City</label
                >
                <input
                    type="text"
                    v-model="form.city"
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2"
                />
                <div v-if="form.errors.city">
                    <p class="text-right text-red-800">Required field</p>
                </div>
            </div>
            <div>
                <label class="block mb-1 text-gray-500 font-medium"
                    >County</label
                >
                <input
                    type="text"
                    v-model="form.county"
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2"
                />
                <div v-if="form.errors.county">
                    <p class="text-right">Required field</p>
                </div>
            </div>
            <div>
                <label class="block mb-1 text-gray-500 font-medium"
                    >Phone number</label
                >
                <input
                    type="text"
                    v-model.number="form.phone_num_1"
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2"
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
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2"
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
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2"
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
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2"
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
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2"
                />
            </div>
            <div>
                <label class="block mb-1 text-gray-500 font-medium"
                    >Twitter (optional)</label
                >
                <input
                    type="text"
                    v-model="form.twitter"
                    class="block w-full p-2 rounded-md shadow-sm border border-gray-300 text-gray-500 mb-2"
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
    demographic: null,
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
