/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: "#F2EFE9",
                coral: "#FF6B4A",
                navy: "#0E4DA4",
                amber: "#FBBF24",
                dark: "#1A1A1A",
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
                mono: ['Space Mono', 'monospace'],
            },
            backgroundImage: {
                'grid-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='rgba(0,0,0,0.05)' stroke-width='1'/%3E%3C/svg%3E\")",
            }
        },
    },
    plugins: [],
}
