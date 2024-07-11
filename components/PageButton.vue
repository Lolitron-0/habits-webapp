<template>
    <div :class="{ 'page-button': true, 'nobordered': first }">
        <NuxtLink class="link" :to="to">
            <img v-if="iconColored" class="icon" :src="iconColored" alt="">
            <img v-if="icon" class="icon-recolored icon" :src="icon" alt="">
        </NuxtLink>
    </div>
</template>

<script lang="ts">
export default {
    name: "PageButton",
    props: ["to", "iconColored", "icon", "first"]
};
</script>

<style>
.page-button {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: solid color-mix(in srgb, var(--tg-theme-hint-color) 70%, transparent);
    border-width: 0 0 0 1px;
    box-sizing: border-box;
}

.nobordered {
    border-width: 0;
}

.page-button .icon {
    width: 60%;
}
</style>