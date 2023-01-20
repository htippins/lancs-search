<template>
    <div
        class="fixed flex justify-center items-center bg-[#000000da] inset-0"
        @click="closeModal()"
    >
        <div class="bg-white w-[600px] h-[400px] rounded-md shadow-md">
            <button @click="closeModal()">X</button>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeModal() {
            this.$emit("close-modal");
        },
    },
};
</script>
