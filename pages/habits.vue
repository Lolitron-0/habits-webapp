<template>
    <div>
        <Navbar></Navbar>
        <PageSwitch sel-index="1"></PageSwitch>
        <div class="gap-container">
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
        <Footer></Footer>
    </div>
</template>

<script>
export default {
}
</script>

<style>
</style>