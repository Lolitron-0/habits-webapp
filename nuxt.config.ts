// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'slide', mode: 'out-in' },
    head: {
      script: [{ src: "https://telegram.org/js/telegram-web-app.js" }],
    },
  },
    hooks:{

    }
})
