
import type { setBlockTracking } from 'vue';
<template>
    <div class="header">
        <UserPfp></UserPfp>
        <div class="progress-bar">
            <div class="text-wrapper">
                <div class="header-text">{{ level }} Уровень</div>
                <div class="title-wrapper">
                    <div class="header-title">{{ levelProgress }} / {{ levelMaxProgress }}</div>
                    <img class="title-icon" src="public/star.png" alt="" />
                </div>
                <div class="header-text">{{ level + 1 }} Уровень</div>
            </div>
            <div class="progress-wrapper">
                <div class="point-left"></div>

                <div class="bar-body">
                    <div class="bar-filled" :style="{ width: (100 * levelProgress / levelMaxProgress) + '%' }">
                        <div class="point-indicator"></div>
                    </div>
                </div>
                <div class="point-right"></div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import "../assets/css/shared.css"

export default {
    name: "Header",
    data() {
        return {
            levelProgress: 412,
            levelMaxProgress: 900,
            level: 1
        }
    },
};


</script>
  
<style>
.header {
    background-color: var(--tg-theme-bg-color);
    width: 100%;
    height: 20vh;
    min-height: 120px;
    padding: 23px;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    gap: 25px;
}


.progress-bar {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.progress-wrapper {
    align-items: center;
    display: flex;
    width: 100%;
    gap: 3px;
}

.point-left {
    background-color: var(--tg-theme-button-color);
    border-radius: 100%;
    height: 6px;
    aspect-ratio: 1;
}


.point-right {
    background-color: var(--tg-theme-hint-color);
    border-radius: 100%;
    height: 6px;
    aspect-ratio: 1;
}


.bar-body {
    display: block;
    width: 100%;
    height: 3px;
    background: var(--tg-theme-hint-color);
}

.bar-filled {
    background: var(--tg-theme-button-color);
    height: 100%;
}

.point-indicator {
    background-color: var(--tg-theme-button-color);
    border-radius: 100%;
    position: relative;
    left: 100%;
    transform: translateY(-25%);
    height: 10px;
    aspect-ratio: 1;
}

.text-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-text {
    color: var(--tg-theme-hint-color);
    font-size: 11.9px;
    font-weight: 400;
    letter-spacing: 0;
}

.title-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
}

.title-icon {
    aspect-ratio: 1;
    width: 15px;
    filter: opacity(0.5);
}

.header-title {
    color: var(--tg-theme-accent-text-color);
    font-size: 12pt;
    font-weight: 700;
}
</style>