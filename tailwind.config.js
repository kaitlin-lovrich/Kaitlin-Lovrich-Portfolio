/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            heading: ['"Russo One"', "serif"],
            body: ['"Source Sans 3"', "sans-serif"],
            special: ['"Ruslan Display"', "serif"],
        },
        backgroundImage: {
            "custom-gradient-1": "linear-gradient(#292929 0%, #1D2449 100%)",
            "custom-gradient-2":
                "linear-gradient(to right, rgb(72,101,253), rgb(43,60,150))",
        },
        extend: {},
    },
    plugins: [],
};
