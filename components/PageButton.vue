<template>
    <div :class="{ 'page-button': true, 'nobordered': first }">
        <NuxtLink class="link" :to="to">
            <img ref="img" :class="{ 'icon-recolored': !selected, 'icon-colored': selected, 'icon': true }" :src="icon"
                alt="">
        </NuxtLink>
    </div>
</template>

<script lang="ts">
export default {
    name: "PageButton",
    props: ["to", "icon", "first", 'selected'],
    mounted() {
        if (this.selected) {
            const oldSrcSplit = this.$refs.img.src.split('.')
            this.$refs.img.src = oldSrcSplit[oldSrcSplit.length - 2] + "-color." + oldSrcSplit[oldSrcSplit.length - 1]
        }
    }
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
    width: 60px;
}
</style>