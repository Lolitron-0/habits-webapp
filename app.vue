<template>
  <div class="body">
    <Header></Header>
    <Menu></Menu>
  </div>
</template>

<script>
import "assets/css/shared.css"
</script>

<style>

html {
  background-color: var(--tg-background);
}

.body {
  display: flex;
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