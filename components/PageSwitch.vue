<template>
    <div class="page-switch">
        <PageButton first=true icon="profile.svg" to="/"></PageButton>
        <PageButton icon="habits.svg" to="/habits"></PageButton>
        <PageButton icon="awards.svg" to="/awards"></PageButton>
        <PageButton icon="settings.svg" to="/settings"></PageButton>
        <PageButton icon="share.svg" to="/share"></PageButton>
    </div>
</template>

<script lang="ts">
export default {
    name: "PageSwitch",
};
</script>

<style>
.page-switch {
    background-color: var(--tg-theme-bg-color);

    display: flex;
    flex-direction: row;
    width: 100%;
    height: 12vh;

    border: solid color-mix(in srgb, var(--tg-theme-hint-color) 70%, transparent);
    border-width: 1px 0 1px 0;
    box-sizing: border-box;
}
</style>