<template>
    <div class="page-switch" ref="body">
        <PageButton v-bind="{ selected: selIndex == '0' }" first=true icon="profile.svg" to="/"></PageButton>
        <PageButton v-bind="{ selected: selIndex == '1' }" icon="habits.svg" to="/habits"></PageButton>
        <PageButton v-bind="{ selected: selIndex == '2' }" icon="awards.svg" to="/awards"></PageButton>
        <PageButton v-bind="{ selected: selIndex == '3' }" icon="settings.svg" to="/settings"></PageButton>
        <PageButton v-bind="{ selected: selIndex == '4' }" icon="share.svg" to="/share"></PageButton>
    </div>
</template>

<script lang="ts">
export default {
    name: "PageSwitch",
    props: ["selIndex"],
    mounted() {
    }
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