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
            "custom-gradient-4":
                "linear-gradient(rgba(72, 101, 253, .60) 0%, rgba(29, 36, 73, .90) 75%)",
        },

        extend: {
            colors: {
                "coral": "#FF4D5A",
            },
            dropShadow: {
                "heading": "2px 3.5px 1px rgba(255, 77, 90, .98)",
                "custom-blue": "3px 4px 2px rgba(72, 101, 253, 1)",
            },
            boxShadow: {
                "textBox": "0px 0px 15px rgba(43, 61, 151, 0.40)",
                "hover-blue": "0px 1px 20px rgba(72, 209, 253, 1)",
            },
        },
    },
    plugins: [],
};
