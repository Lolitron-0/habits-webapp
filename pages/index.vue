<template>
    <div class="body">
        <Header></Header>
        <Menu>
            <MenuItem to="/habits" icon="habits.svg">Привычки</MenuItem>
            <MenuItem to="/awards" icon="awards.svg">Награды</MenuItem>
            <MenuItem to="/settings" icon="settings.svg">Настройки</MenuItem>
            <MenuItem to="/howto" icon="question.svg">Как пользоваться</MenuItem>
            <MenuItem to="/premium" iconColored="premium.svg">Премиум</MenuItem>
        </Menu>
    </div>
</template>


<script setup lang="ts">
definePageMeta({
    pageTransition: {
        name: 'fade'
    }
})
</script>


<style>
.body {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    gap: 13px;

    margin: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
</style>
