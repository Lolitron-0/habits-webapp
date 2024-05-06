<template>
    <div class="body">
        <Header></Header>
        <Menu></Menu>
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
