/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: "#F7F0E2",
                coral: "#FD5A47",
                navy: "#048CD6",
                amber: "#009A5E",
                dark: "#1F1F1F",
            },
            fontFamily: {
                sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
                display: ['Staatliches', 'sans-serif'],
                mono: ['Space Mono', 'monospace'],
            },
            backgroundImage: {
                'grid-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='rgba(0,0,0,0.05)' stroke-width='1'/%3E%3C/svg%3E\")",
            }
        },
    },
    plugins: [],
}
