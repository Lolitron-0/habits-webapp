function expandWebapp() {
    if (useRoute().path == "/") return;
    window.Telegram.WebApp.expand();
}

export default defineNuxtPlugin({
    name: "webapp-expand",
    hooks: {
        "page:loading:end": expandWebapp,
        "page:transition:finish": expandWebapp
    }
})