<template>
    <div class="menu">
        <slot></slot>
    </div>
</template>

<script lang="ts">
export default {
    name: "Menu",
};
</script>

<style>
.menu {
    background-color: var(--tg-theme-bg-color);

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
</style>