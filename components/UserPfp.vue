<template>
    <div class="user-container">
        <div class="pfp-container">
            <img class="pfp-image" :src="pfpUrl" alt="pfp" />
        </div>
        <div class="username-text">{{ username }}</div>
    </div>
</template>

<script lang="ts">
export default {
    name: "Header",
    data() {
        return {
            username: "username",
            pfpUrl: "pfp.jpg",
        }
    }
};
</script>

<style>
.user-container {
    width: 20%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.pfp-container {
    aspect-ratio: 1;
    height: 100%;

    border-radius: 50%;
    border: var(--tg-theme-button-color) solid 3px;
    box-sizing: border-box;
    padding: 0px;
    position: relative;
}

.pfp-image {
    aspect-ratio: 1;
    height: 100%;

    border-radius: 50%;
    position: absolute;
    box-sizing: border-box;
    padding: 2px;
}

.username-text {
    font-size: 80%;
    color: var(--tg-theme-text-color)
}
</style>
