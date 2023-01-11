<template>
    <form @submit.prevent="create">
        <div>
            <div>
                <label>Name of organisation</label>
                <input type="text" v-model="form.title" />
            </div>
            <div>
                <label>Description</label>
                <textarea type="text" v-model="form.description" />
            </div>
            <div>
                <label>Category</label>
                <select v-model="form.category">
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
            </div>
            <div>
                <label>Demographics</label>
                <select v-model="form.demographics">
                    <option disable value="">Please select...</option>
                    <option value="young person">Young Persons</option>
                    <option value="adult">Adults</option>
                    <option value="older adult">Older Adults</option>
                </select>
            </div>
            <div>
                <label>Town/City</label>
                <input type="text" v-model="form.city" />
            </div>
            <div>
                <label>County</label>
                <input type="text" v-model="form.county" />
            </div>
            <div>
                <label>Phone number</label>
                <input type="text" v-model.number="form.phone_num_1" />
            </div>
            <div>
                <label>Second phone number</label>
                <input type="text" v-model.number="form.phone_num_2" />
            </div>
            <div>
                <label>Text number</label>
                <input type="text" v-model.number="form.text_num" />
            </div>
            <div>
                <label>Website</label>
                <input type="text" v-model="form.website" />
            </div>
            <div>
                <label>Email</label>
                <input type="email" v-model="form.email" />
            </div>
            <div>
                <label>Twitter</label>
                <input type="text" v-model="form.twitter" />
            </div>

            <div>
                <button type="submit">Submit</button>
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
    county: null,
    phone_num_1: null,
    phone_num_2: null,
    text_num: null,
    website: null,
    email: null,
    twitter: null,
});

const create = () => form.post("/organisation");
</script>
