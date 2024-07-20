<template>
    <NuxtLink :to="to" class="link">
        <div class="menu-item">
            <img v-if="icon" class="icon-recolored icon" :src="icon" alt="" />
            <img v-if="iconColored" class="icon-colored icon" :src="iconColored" alt="" />
            <div class="text">
                <slot></slot>
            </div>
            <img class="icon-recolored arrow" :src="'arrow-folded.svg'" alt="" />
        </div>
    </NuxtLink>
</template>

<script lang="ts">

export default {
    name: "MenuItem",
    props: ["icon", "iconColored", "to"],
};
</script>

<style>
.menu-item {
    position: relative;
    width: 100%;
    height: fit-content;
    padding: 13px 0;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    color: var(--tg-theme-text-color);


    transition: 500ms;
}

.menu-item:before {
    display: block;
    content: "";
    position: absolute;
    bottom: 0;
    left: 72px;
    width: 100%;
    height: 1px;
    /* background: var(--tg-theme-hint-color); */
    background: transparent;
}

.menu-item:hover {
    background-color: var(--tg-theme-secondary-bg-color);
}

.menu-item:active {
    background-color: var(--tg-theme-secondary-bg-color);
}

.menu-item .icon {
    /* filter: opacity(0.5); */
    aspect-ratio: 1;
    height: 30px;
    margin-left: 20px;
    box-sizing: border-box;
}

.menu-item .text {
    font-size: 1.1rem;
    margin-left: 25px;
}

.menu-item .arrow {
    aspect-ratio: 1;
    width: 10px;
    fill: var(--tg-theme-hint-color);
    margin-left: auto;
    margin-right: 20px;
}
</style>