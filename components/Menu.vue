<template>
    <div class="menu">

        <NuxtLink to="/habits" class="link">
            <MenuItem icon="habits.svg">Привычки</MenuItem>
        </NuxtLink>

        <NuxtLink to="/awards" class="link">
            <MenuItem icon="awards.svg">Награды</MenuItem>
        </NuxtLink>

        <NuxtLink to="/settings" class="link">
            <MenuItem icon="settings.svg">Настройки</MenuItem>
        </NuxtLink>

        <NuxtLink to="/howto" class="link">
            <MenuItem icon="question.svg">Как пользоваться</MenuItem>
        </NuxtLink>

        <NuxtLink to="/premium" class="link">
            <MenuItem iconColored="premium.svg">Премиум</MenuItem>
        </NuxtLink>
    </div>
</template>

<script lang="ts">
export default {
    name: "Menu",
};
</script>

<style>
.menu {
    background-color: var(--tg-theme-bg-color);

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
</style>