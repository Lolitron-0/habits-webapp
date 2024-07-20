<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script>
import "assets/css/shared.css"

</script>

<style>
:root {
  --elements-gap: 13px;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.15s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.05s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(5px);
  transform: scale(0.85);
}

* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  transition: all 1s;
}

html,
body {
  background-color: var(--tg-theme-secondary-bg-color);
  overflow: hidden;
  margin: 0;
  font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Apple Color Emoji", "Segoe UI", Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  transition: all 1s;
}

.link {
  text-decoration: none;
  color: unset;
}

.gap-container {
    margin-top: var(--elements-gap);
    display: flex;
    flex-direction: column;
    gap: var(--elements-gap);
}

.tr-300{
  transition: all 300ms;
}
</style>