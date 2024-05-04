<template>
    <div class="menu">
        <MenuItem icon="bell.png">Привычки</MenuItem>
        <MenuItem icon="award.png">Награды</MenuItem>
        <MenuItem icon="settings.png">Настройки</MenuItem>
        <MenuItem icon="question.png">Как пользоваться</MenuItem>
        <MenuItem icon="premium.png">Премиум</MenuItem>
    </div>
</template>

<script lang="ts">
export default {
    name: "Menu",
};
</script>

<style>
.menu {
    background-color: white;
    box-shadow: 0px 0px 2px 1px #c7c7c7;

    display: flex;
    flex-direction: column;
    width: 100%;
}
</style>