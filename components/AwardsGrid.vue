<template>
    <div class="awards-grid">
        <img ref="awardImg" @load="recolorShadows" v-for="i in 10" class="icon" :src="'lvl-award.svg'" alt="" />
    </div>
</template>

<script lang="ts">
import ColorThief from 'colorthief'

export default {
    name: "AwardsGrid",
    props: ["index"],
    mounted(){
    },
    methods: {
        recolorShadows(e) {
            const colorThief = new ColorThief();
            let shadowColor = colorThief.getColor(e.target)
            e.target.style.boxShadow = `0 0 1px 2px rgb(${shadowColor[0]},${shadowColor[1]},${shadowColor[2]})`
        }
    }
};
</script>

<style>
.awards-grid {
    background-color: var(--tg-theme-bg-color);

    display: grid;
    row-gap: 1rem;
    column-gap: 3rem;
    padding: 1.7rem 3.5rem;
    grid-template-rows: repeat(2, 100%);
    grid-template-columns: repeat(5, auto);
}

.awards-grid .icon {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;

    box-shadow: 0 0 1px 2px transparent;
    border-radius: 5px;

    transition: all 1s;
}
</style>