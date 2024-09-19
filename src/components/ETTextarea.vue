<template>
    <div class="main-textarea__wrap"
        :class="{ 'hasIcon': hasIcon, 'floating': floating, 'empty': inputString.length === 0 }">
        <textarea class="main-textarea" v-model="inputString" :rows="rows" @input="handleInput()" @blur="handleBlur()"
            @focus="handleFocus()">
        </textarea>
        <label class="main-textarea__placeholder" :class="{ 'top': floating && inputString.length > 0 }"
            v-if="placeholder">
            {{ placeholder }}</label>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const inputString = ref('')
const props = defineProps({
    placeholder: String,
    modelValue: String,
    hasIcon: Boolean,
    rows: Number,
    floating: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['update:modelValue', 'onInput', 'onBlur', 'onFocus'])
const handleInput = () => {
    if (props.modelValue) {
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

.main-textarea__wrap {
    position: relative;
    width: 100%;

    &.hasIcon {
        .main-textarea {
            padding: .75em .875em .875em 2.75em;
        }

        .main-textarea__placeholder {
            left: 2.75em;
        }
    }

    &:not(.empty):not(.floating) {
        .main-textarea__placeholder {
            display: none;
        }
    }

    .main-textarea {
        &:focus {
            outline: none;

            &+label {
                display: none;
            }
        }
    }

    &.floating {
        .main-textarea__placeholder {
            left: .875em;
            top: 1em;
            transform: translateY(0);

            &.top {
                display: block;
                top: -.25em;
                left: 0;
                transform: translateY(-100%);
            }
        }

        .main-textarea {

            &:focus {
                &+label {
                    display: block;
                    top: -.25em;
                    left: 0;
                    transform: translateY(-100%);
                }
            }
        }
    }


}

.main-textarea__placeholder {
    color: #A6A5A3;
    position: absolute;
    left: 1em;
    top: 1em;
    transition: .25s;
    pointer-events: none;
    font-size: 1em;
    line-height: 1.2em;
}

.main-textarea {
    padding: 1em;
    width: 100%;
    background: transparent;
    border-width: 1px;
    border-style: solid;
    border-color: inherit;
    font-weight: 400;
    line-height: 1.2em;
    font-size: 1em;
    color: inherit;
}
</style>