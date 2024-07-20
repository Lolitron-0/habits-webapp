<template>
    <div>
        <Navbar></Navbar>
        <PageSwitch></PageSwitch>
        <div class="gap-container">
            <Header></Header>
            <Menu>
                <MenuExpandableItem title="Уровни 1-10" icon="check.svg">
                    <AwardsGrid index="0"></AwardsGrid>
                </MenuExpandableItem>
            </Menu>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
export default {
}
</script>