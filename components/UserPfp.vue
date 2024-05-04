<template>
    <div class="user-container">
        <div class="pfp-container">
            <img class="pfp-image" :src="this.pfpUrl" alt="pfp" />
        </div>
        <div class="username-text">{{ username }}</div>
    </div>
</template>

<script lang="ts">
export default defineComponent({
    name: "Header",
    data() {
        return {
            username: "username",
            pfpUrl: "pfp.jpg",
        }
    }
});
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
    height: 80%;

    border-radius: 50%;
    border: var(--tg-active) solid 3px;
    box-sizing: border-box;
    padding: 2px;
}

.pfp-image {
    aspect-ratio: 1;
    height: 100%;

    border-radius: 50%;
}

.username-text {
    font-size: 80%;
}

</style>
