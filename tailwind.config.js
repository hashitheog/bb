/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#00B060',
                gold: '#D4AF37', // Luxury Gold
                obsidian: '#0a0a0a', // Deep Black
                dark: '#111827',
                light: '#F9FAFB',
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                serif: ['"Cormorant Garamond"', 'serif'],
            }
        },
    },
    plugins: [],
}
