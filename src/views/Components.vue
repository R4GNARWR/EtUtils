<template>
    <div class="container">
        <div class="content">
            <div class="content-box">
                <div class="content-box__label"><code class="token">ETInput</code></div>
                <div class="content-box__text">
                    Стандартизированный компонент <code class="token">{{ '<input>' }}</code>.
                    Параметры:
                    <ul>
                        <li>
                            <code class="token">placeholder</code> : <code class="token">string</code> — отвечает за содержание плейсхолдера
                        </li>
                        <li>
                            <code class="token">type</code> : <code class="token">string</code> — отвечает за тип <code class="token">{{ '<input>' }}</code>.<br>
                            <code class="token">default: text</code>
                        </li>
                        <li>
                            <code class="token">icon</code> : <code class="token">string</code> — добавляет иконку размером 20х20px в левой части
                        </li>
                        <li>
                            <code class="token">floating</code> : <code class="token">boolean</code> — отвечает за улетание плейсхолдера наверх.
                            <code class="token">default: false</code>
                        </li>
                    </ul>
                    Emits:
                    <ul>
                        <li>
                            <code class="token">onInput</code> — вызывается на <code class="token">@input</code>, возвращает значение
                            <code class="token">{{ '<input>' }}</code>
                        </li>
                        <li>
                            <code class="token">onBlur</code> — вызывается на <code class="token">@blur</code>, возвращает значение
                            <code class="token">{{ '<input>' }}</code>
                        </li>
                        <li>
                            <code class="token">onFocus</code> — вызывается на <code class="token">@focus</code>, возвращает значение
                            <code class="token">{{ '<input>' }}</code>
                        </li>
                    </ul>
                </div>
                <div class="content-box__body">
                    <EtInput :floating="true" placeholder="Placeholder"></EtInput>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import EtInput from '../components/ETInput.vue'
</script>

<style lang="scss" scoped></style>