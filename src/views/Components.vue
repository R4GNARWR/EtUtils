<template>
    <div class="container">
        <div class="content">
            <div class="content-box">
                <div class="content-box__label"><code class="token">ETInput</code></div>
                <div class="content-box__text">
                    Стандартизированный компонент <code class="token">{{ '<input>' }}</code>.
                </div>
                <div class="content-box__text">
                    Параметры:
                    <ul>
                        <li>
                            <code class="token">placeholder</code> : <code class="token">string</code> — отвечает за
                            содержание плейсхолдера
                        </li>
                        <li>
                            <code class="token">type</code> : <code class="token">string</code> <code class="token">default: text</code> — отвечает за тип <code
                                class="token">{{ '<input>' }}</code>.<br>
                            
                        </li>
                        <li>
                            <code class="token">icon</code> : <code class="token">string</code> — добавляет иконку
                            размером 20х20px в левой части
                        </li>
                        <li>
                            <code class="token">floating</code> : <code class="token">boolean</code> <code class="token">default: false</code> — отвечает за
                            улетание плейсхолдера наверх.
                            
                        </li>
                    </ul>
                    Emits:
                    <ul>
                        <li>
                            <code class="token">onInput</code> — вызывается на <code class="token">@input</code>,
                            возвращает значение
                            <code class="token">{{ '<input>' }}</code>
                        </li>
                        <li>
                            <code class="token">onBlur</code> — вызывается на <code class="token">@blur</code>,
                            возвращает значение
                            <code class="token">{{ '<input>' }}</code>
                        </li>
                        <li>
                            <code class="token">onFocus</code> — вызывается на <code class="token">@focus</code>,
                            возвращает значение
                            <code class="token">{{ '<input>' }}</code>
                        </li>
                    </ul>
                </div>
                <div class="content-box__body">
                    <EtInput :floating="true" placeholder="Placeholder"></EtInput>
                </div>
            </div>
            <div class="content-box">
                <div class="content-box__label"><code class="token">ModalBase</code></div>
                <div class="content-box__text">
                    Компонент-обертка для модалок
                </div>
                <div class="content-box__text">
                    Параметры:
                    <ul>
                        <li>
                            <code class="token">modelValue</code> : <code class="token">Boolean</code> — отвечает за
                            активность модального окна
                        </li>
                    </ul>
                    Emits:
                    <ul>
                        <li>
                            <code class="token">update:modelValue</code> — вызывается на клик за область модального
                            окна,
                            закрывает его
                        </li>
                    </ul>
                </div>
            </div>
            <div class="content-box">
                <div class="content-box__label"><code class="token">ETTextarea</code></div>
                <div class="content-box__text">
                    Стандартизированный компонент <code class="token">{{ '<input>' }}</code>.
                </div>
                <div class="content-box__text">
                    Параметры:
                    <ul>
                        <li>
                            <code class="token">placeholder</code> : <code class="token">String</code> — отвечает за
                            содержание плейсхолдера
                        </li>
                        <li>
                            <code class="token">icon</code> : <code class="token">String</code> — добавляет иконку
                            размером 20х20px в левой части
                        </li>
                        <li>
                            <code class="token">floating</code> : <code class="token">Boolean</code> <code class="token">default: false</code> — отвечает за
                            улетание плейсхолдера наверх.
                            
                        </li>
                        <li>
                            <code class="token">rows</code> : <code class="token">Number</code> <code class="token">default: 3</code> — изначальное число строк у <code class="token">{{ '<textarea>' }}</code>
                            
                        </li>
                    </ul>
                    Emits:
                    <ul>
                        <li>
                            <code class="token">onInput</code> — вызывается на <code class="token">@input</code>,
                            возвращает значение
                            <code class="token">{{ '<input>' }}</code>
                        </li>
                        <li>
                            <code class="token">onBlur</code> — вызывается на <code class="token">@blur</code>,
                            возвращает значение
                            <code class="token">{{ '<input>' }}</code>
                        </li>
                        <li>
                            <code class="token">onFocus</code> — вызывается на <code class="token">@focus</code>,
                            возвращает значение
                            <code class="token">{{ '<input>' }}</code>
                        </li>
                    </ul>
                </div>
                <div class="content-box__body">
                    <ETTextarea floating="true" placeholder="Placeholder"></ETTextarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import EtInput from '../components/ETInput.vue'
import ETTextarea from '../components/ETTextarea.vue';
</script>

<style lang="scss" scoped></style>