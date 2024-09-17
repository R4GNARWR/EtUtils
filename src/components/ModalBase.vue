<template>
    <div class="modal__base" @click="closeModal()">
        <slot @click.stop></slot>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    modelValue: Boolean,
})

const emit = defineEmits([
    'update:modelValue'
])

const closeModal = () => {
    if(props.modelValue) {
        emit('update:modelValue', false)
    }
}
</script>

<style lang="scss">
.modal__base {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}
</style>