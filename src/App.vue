<template>
    <div class="app">
        <aside>
            <h1>ET-Utils</h1>
            <ul>
                <li>
                    <RouterLink to="/components">Компоненты</RouterLink>
                </li>
                <li>
                    <RouterLink to="/directives">Директивы</RouterLink>
                </li>
                <li>
                    <RouterLink to="/methods">Методы</RouterLink>
                </li>
            </ul>
        </aside>
        <main>
            <RouterView />
        </main>
    </div>

</template>

<script setup lang="ts">

</script>

<style lang="scss">
.app {
    display: flex;
    overflow: hidden;
    max-height: 100dvh;
}

aside {
    width: 25%;
    max-width: 300px;
    height: 100dvh;
    padding: 50px 35px;
    border-right: 1px solid $background-light;
    h1 {
        font-size: rems(48px);
        line-height: 1.25em;
        color: $black;
        font-weight: 800;
        margin-bottom: 60px;
    }
    ul {
        display: flex;
        flex-direction: column;
        row-gap: 1em;
        font-size: rems(18px);
        list-style: none;
        a {
            text-decoration: none;
            color: $black;
        }
    }
}
</style>
