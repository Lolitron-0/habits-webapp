<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script>
import "assets/css/shared.css"
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.15s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(5px);
  transform: scale(0.85);
}

html, body {
  background-color: var(--tg-background);
  overflow-x: hidden;
  margin: 0;
}

.link{
  text-decoration: none;
  color: unset;
}
</style>