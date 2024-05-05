<template>
    <div class="menu-item">
        <img v-if="icon" class="icon-recolored icon" :src="icon" alt="icon" />
        <img v-if="iconColored" class="icon-colored icon" :src="iconColored" alt="" />
        <div class="text">
            <slot></slot>
        </div>
        <svg class="arrow" fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path id="XMLID_222_"
                    d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z">
                </path>
            </g>
        </svg>
    </div>
</template>

<script lang="ts">

export default {
    name: "MenuItem",
    props: ["icon", "iconColored"],
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
    padding: 3px;
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