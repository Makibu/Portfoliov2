/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'anonPro': ['DM sans', 'sans-serif']
            },
            colors: {
                'c-gray': '#8B8B8B',
                'c-green': '#87E99C',
            },
        },
    },
    plugins: [],
}