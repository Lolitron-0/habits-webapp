<template>
    <div class="navbar">
        <NuxtLink to="/">
            <img class="back-icon" src="public/arrow-left.png" alt="" />
        </NuxtLink>
    </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style>
.navbar {
    width: 100%;
    background-color: var(--tg-theme-header-bg-color);
    display: flex;
    padding: 13px 0;
    margin: 0;
}

.navbar .back-icon {
    aspect-ratio: 1;
    height: 20px;
    margin-left: 15px;
    filter: opacity(0.5);
}
</style>