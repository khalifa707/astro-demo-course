const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            aspectRatio: {
                thumbnail: "1.5",
            },
            fontFamily: {
                sans: ["Cabin", ...defaultTheme.fontFamily.sans],
            },
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        // other plugins...
    ],
}