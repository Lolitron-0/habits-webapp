<template>
    <div>
        <Navbar></Navbar>
    </div>
</template>

<script>

export default {
    mounted(){
        window.Telegram.WebApp.expand();
    }
}

</script>