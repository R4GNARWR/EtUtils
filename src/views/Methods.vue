<template>
    <div class="container">
        <div class="content">
            <div class="content-box">
                <div class="content-box__label">Метод <code class="token">textDeclentions</code></div>
                <div class="content-box__text">
                    Метод принимает два аргумента
                    <ul>
                        <li>
                            <code class="token">dictionary</code> : <code class="token">{{ 'Array<String>' }}</code> —
                            словарь для
                            склонения
                        </li>
                        <li>
                            <code class="token">number</code> : <code class="token">Number</code> — число от которого
                            склоняем(не может быть меньше 0)
                        </li>
                        <li>
                            <code class="token">transform</code> : <code class="token">Boolean</code> <code class="token">default: false</code> — приводит итогове
                            число к localeString 
                        </li>
                    </ul>
                    Описание для dictionary
                    <ul class="decimal">
                        <li>В качестве первого значения массива передаем слово для числа 1 и чисел заканчивающийся на 1
                        </li>
                        <li>В качестве второго значения массива слово для чисел от 2 до 4 и чисел заканчивающихся на 2-4
                        </li>
                        <li>В качестве третьего значения массива слово для чисел от 5 до 20 и чисел заканчивающихся на
                            5-9 и 0</li>
                    </ul>
                </div>
                <div class="content-box__sublabel">Использование</div>
                <div class="content-box__body">
                    <code class="function">textDeclentions</code>
                    <code class="punctuation">(['</code>
                    <code class="string">тест</code>
                    <code class="punctuation">','</code>
                    <code class="string">теста</code>
                    <code class="punctuation">','</code>
                    <code class="string">тестов</code>
                    <code class="punctuation">'], </code>
                    <code class="number">1</code>
                    <code class="punctuation">);</code>
                </div>
            </div>
            <div class="content-box">
                <div class="content-box__sublabel">
                    Пример
                </div>
                <div class="content-box__body">
                    {{ textDeclentions(['тест', 'теста', 'тестов'], declentionTestNumber, true) }}
                    <div class="d-flex">
                        <button class="content-box__button square"
                            @click="declentionTestNumber > 0 ? declentionTestNumber-- : declentionTestNumber = 0">-</button>
                        <button class="content-box__button square" @click="declentionTestNumber++">+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import textDeclentions from '../methods/textDeclentions';

const declentionTestNumber = ref(1);

</script>

<style lang="scss" scoped></style>