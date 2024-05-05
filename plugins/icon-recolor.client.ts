import CssFilterConverter from 'css-filter-converter';

function recolorIcons() {
    const icons = document.querySelectorAll(".icon-recolored")
    console.log(icons)
    for (let i = 0; i < icons.length; i++) {
        icons[i].style.filter = CssFilterConverter.hexToFilter(window.Telegram.WebApp.themeParams.hint_color).color;
    }
}

export default defineNuxtPlugin({
    name: "icon-recolor",
    hooks: {
        "page:loading:end": recolorIcons,
        "page:transition:finish": recolorIcons
    }
})

// export default defineNuxtPlugin(nuxtApp => {
//     nuxtApp.hook('app:mounted', () => {
//         const icons = document.querySelectorAll(".menu-item .icon-recolored")
//         for (let i = 0; i < icons.length; i++) {
//             icons[i].style.filter = CssFilterConverter.hexToFilter(window.Telegram.WebApp.themeParams.hint_color).color;
//         }
//         console.log("sldkflk")
//     })
// })
