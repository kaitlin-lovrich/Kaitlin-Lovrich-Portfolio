/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            heading: ["Paytone One", "sans-serif"],
            body: ["Inconsolata", "monospace"],
            special: ["Yanone Kaffeesatz", "sans-serif"],
        },
        backgroundImage: {
            "custom-gradient-1": "linear-gradient(#292929 0%, #1D2449 100%)",
            "custom-gradient-2":
                "linear-gradient(to right, rgb(72,101,253), rgb(43,60,150))",
            "custom-gradient-3":
                "linear-gradient(#69F1C0 0%, #65E6BE 26%, #2B3C97 100%)",
        },

        extend: {
            colors: {
                "coral": "#FF4D5A",
            },
            dropShadow: {
                "heading": "3px 4.5px 2px rgba(255, 77, 90, 1)",
            },
            boxShadow: {
                "textBox": "2px 2px 8px rgba(72, 101, 253, 0.25)",
            },
        },
    },
    plugins: [],
};
