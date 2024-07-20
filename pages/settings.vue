<template>
    <div>
        <Navbar></Navbar>
    </div>
</template>

<script>

export default {
    mounted() {
        window.Telegram.WebApp.expand();
    },
    setup(){
definePageMeta({
    pageTransition: {
        name: 'fade'
    }
})
    }

}

</script>