<template>
    <div>
        <Navbar></Navbar>
        <PageSwitch sel-index="1"></PageSwitch>
        <div class="menus">
            <Menu>
                <MenuItem to="/myhabits" icon="habits.svg">Мои привычки
                </MenuItem>
                <MenuItem to="/freelist" icon="list.svg">Свободный список
                </MenuItem>
                <MenuItem to="/skills" icon="skills.svg">Навыки
                </MenuItem>
            </Menu>

            <Menu>
                <MenuItem to="/choosehabit" icon="choose.svg">Выбрать привычку
                </MenuItem>
                <MenuItem to="/creagehabit" icon="create.svg">Создать свою привычку
                </MenuItem>
            </Menu>
        </div>
    </div>
</template>

<script>

export default {
    mounted() {
        window.Telegram.WebApp.expand();
    }
}

</script>

<style>
.menus {
    display: flex;
    flex-direction: column;
    gap: var(--elements-gap);
}
</style>