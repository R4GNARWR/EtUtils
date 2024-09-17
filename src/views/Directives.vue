<template>
    <div class="container">
        <div class="content">
            <div class="content-box">
                <div class="content-box__label">Директива <code class="token">v-mask-phone</code></div>
                <div class="content-box__text">
                    Позволяет добавить унифицированную маску телефона для <code class="token">{{ '<input>' }}</code>
                </div>
                <div class="content-box__sublabel">
                    Использование
                </div>
                <div class="content-box__text">
                    Внутри <code class="token">main.js</code> добавить
                </div>
                <div class="content-box__body">
                    <code class="keyword">app</code>
                    <code class="punctuation">.</code>
                    <code class="function">directive</code>
                    <code class="punctuation">('</code>
                    <code class="string">mask-phone</code>
                    <code class="punctuation">',</code>
                    <code class="value"> vMaskPhone</code>
                    <code class="punctuation">);</code>
                </div>
                <div class="content-box__text">
                    Теперь можно использовать как дерективу Vue
                </div>
                <div class="content-box__body">
                    <code class="punctuation"><</code>
                    <code class="tag">{{ 'input ' }}</code>
                    <code class="property">v-mask-phone</code>
                    <code class="punctuation">="</code>
                    <code class="boolean">true</code>
                    <code class="punctuation">"</code>
                    <code class="punctuation">></code>
                </div>
            </div>
            <div class="content-box">
                <div class="content-box__sublabel">
                    Пример
                </div>
                <div class="content-box__body">
                    <EtInput :floating="true" placeholder="Телефон" type="tel"></EtInput>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import EtInput from '../components/ETInput.vue'
</script>

<style lang="scss" scoped></style>