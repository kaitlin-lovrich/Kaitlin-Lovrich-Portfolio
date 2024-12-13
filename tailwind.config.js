/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            heading: ["Paytone One", "sans-serif"],
            body: ["Inconsolata", "monospace"],
            special: ["Yanone Kaffeesatz", "sans-serif"],
            bubble: ["Matemasie", "sans-serif"],
        },
        backgroundImage: {
            "custom-gradient-1":
                "linear-gradient(rgb(41, 41, 41) 0%, rgb(29, 36, 73) 100%)",
            "custom-gradient-2":
                "linear-gradient(to right, rgb(72, 101, 253), rgb(43,60,150))",
            "custom-gradient-3":
                "linear-gradient(rgb(105, 241, 192) 0%, rgb(101, 230, 190) 26%, rgb(43, 60, 151) 100%)",
            "custom-gradient-4":
                "linear-gradient(rgba(72, 101, 253, .60) 0%, rgba(29, 36, 73, .90) 75%)",
            "custom-gradient-5":
                "linear-gradient(rgb(105, 241, 192) 0%, rgb(105, 241, 192) 3%, rgb(77, 160, 173) 33%, rgb(43, 60, 151) 100%)",
            "custom-gradient-6":
                "linear-gradient(rgba(33, 38, 62, 0.60) 0%, rgba(29, 36, 73, 0.97) 80%, rgba(29, 36, 73, 1) 100%)",
            "bubble-gradient":
                "linear-gradient(to top right, rgba(107, 213, 184, .75) 0%, rgba(107, 213, 184, .60) 13%, rgba(122, 82, 203, .50) 39%, rgba(124, 69, 205, .50) 44%, rgba(125, 60, 206, .50) 48%, rgba(141, 68, 207, .50) 60%, rgba(212, 104, 209, .60) 89%, rgba(212, 104, 209, .75) 100%)",
        },

        extend: {
            colors: {
                "coral": "#FF4D5A",
                "sky-blue": "rgb(72, 209, 253)",
                "dark-blue": "rgb(29, 36, 73)",
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
