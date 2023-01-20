<template>
    <form>
        <div class="mb-8 mt-4 flex flex-wrap gap-2">
            <div class="flex flex-nowrap items-center">
                <input type="text" placeholder="Organisation name" />
                <input type="text" placeholder="Location" />
            </div>
            <div class="flex flex-nowrap items-center">
                <select>
                    <option :value="null">Category</option>
                    <option v-for="category in categories">
                        {{ category.cat }}
                    </option>
                </select>
                <select>
                    <option :value="null">Demographic</option>
                    <option v-for="demographic in demographics">
                        {{ demographic.type }}
                    </option>
                </select>
            </div>

            <button type="submit">Filter</button>
            <button type="reset">Clear</button>
        </div>
    </form>
</template>

<script setup>
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
    { type: "Adults" },
    { type: "Older adults" },
    { type: "Any age" },
];
</script>
