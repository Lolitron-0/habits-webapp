<template>
    <div class="menu">

        <NuxtLink to="/habits" class="link">
            <MenuItem icon="svg.svg">Привычки</MenuItem>
        </NuxtLink>

        <NuxtLink to="/awards" class="link">
            <MenuItem icon="award.png">Награды</MenuItem>
        </NuxtLink>

        <NuxtLink to="/settings" class="link">
            <MenuItem icon="settings.png">Настройки</MenuItem>
        </NuxtLink>

        <NuxtLink to="/howto" class="link">
            <MenuItem icon="question.png">Как пользоваться</MenuItem>
        </NuxtLink>

        <NuxtLink to="/premium" class="link">
            <MenuItem iconColored="premium.png">Премиум</MenuItem>
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
}
</style>