<template>
    <div>
        <Navbar></Navbar>
        <PageSwitch></PageSwitch>
        <div class="gap-container">
            <Header></Header>
            <Menu>
                <MenuItem icon="star.svg" to="/level-awards">Уровневые награды</MenuItem>
                <MenuItem icon="awards.svg"> Тематические награды </MenuItem>
            </Menu>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
export default {
}
</script>