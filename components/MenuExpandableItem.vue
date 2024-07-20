<template>
    <div class="menu-expandable-item">
        <div class="menu-item" @click="toggleExpand">
            <img v-if="icon" class="icon-recolored icon" :src="icon" alt="" />
            <div class="text">
                {{ title }}
            </div>
            <img class="icon-recolored arrow tr-300" :style="{ transform: expanded ? 'rotate(90deg)' : '' }"
                :src="'arrow-folded.svg'" alt="" />
        </div>
        <div class="anim" :class="{ expanded: expanded, folded: !expanded }">
            <Transition>
                <div v-if="expanded" class="expanded-container">
                    <slot></slot>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script lang="ts">
import CssFilterConverter from 'css-filter-converter';

export default {
    name: "MenuExpandableItem",
    props: ["icon", "title"],
    data() {
        return {
            expanded: false,
        }
    },
    methods: {
        toggleExpand() {
            this.expanded = !this.expanded;
        }
    }
};
</script>

<style>
.v-enter-active,
.v-leave-active {
    transition: all 1.5s ease;
}

.v-enter-from,
.v-leave-to {}

.menu-expandable-item .expanded {
    max-height: 300px;
    /* transform: scaleY(1); */
}

.menu-expandable-item .folded {
    max-height: 0px;
    /* transform: scaleY(0); */
}

.menu-expandable-item .anim{
    transition: all 1s ease;
    overflow: hidden;
}

.expanded-container {
    background-color: var(--tg-theme-bg-color);
    transform-origin: top;

}
</style>