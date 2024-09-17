<template>
    <div class="et-input__wrap" :class="{ 'hasIcon': icon && icon.length }">
        <img :src="icon" class="et-input__icon" alt="icon" v-show="icon">
        <input class="et-input"
        :type="type"
        :placeholder="placeholder && !floating ? placeholder : ''"
        :value="inputString"
        @input="handleInput()"
        @blur="handleBlur()"
        @focus="handleFocus()"
        v-mask-phone="type === 'tel' ? true : false"
        >
        <label class="et-input__placeholder" v-if="placeholder && floating"> {{ placeholder }}</label>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const inputString = ref('')

const props = defineProps({
    placeholder: String,
    floating: {
        type: Boolean,
        default: false
    },
    modelValue: String,
    icon: String,
    type: {
        type: String,
        default: 'text'
    }
})

const emit = defineEmits(['update:modelValue', 'onInput', 'onBlur', 'onFocus'])

const handleInput = () => {
    if(props.modelValue) {
        emit('update:modelValue', inputString.value)
    }
    emit('onInput', inputString.value)
}
const handleBlur = () => {
    emit('onBlur', inputString.value)
}
const handleFocus = () => {
    emit('onFocus', inputString.value)
}
</script>
<style lang="scss">
@import "../assets/scss/_functions.scss";
.et-input__wrap {
    position: relative;
    width: 100%;
    img {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
    }
    &.hasIcon {
        .et-input {
            padding: .75em .875em .875em 2.75em;
        }

        .et-input__placeholder {
            left: 2.75em;
        }
    }
    &.border {
        .et-input__placeholder {
            left: 1em;
        }
        .et-input {
            border-width: 1px;
            border-color: inherit;
            padding: 1em .875em;
            &:focus {
                & + label {
                    top: 50%;
                }
            }

            &:not(:placeholder-shown) {
                & + label {
                    display: none;
                }
            }
        }
    }
}

.et-input__placeholder {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    white-space: nowrap;
    color:inherit;
    pointer-events: none;
    overflow-x: hidden;
    transition: .25s;
}

.et-input {
    padding: 0.75em .875em .875em 0;

    &:focus {
        & + label {
            top: 0;
        }
    }

    &:not(:placeholder-shown) {
        & + label {
            top: 0;
        }
    }

    width: 100%;
    border-width: 0 0 1px 0;
    border-color: inherit;
    border-style: solid;
    color: inherit;
    background: transparent;

    &:focus {
        outline: none
    }
}
</style>