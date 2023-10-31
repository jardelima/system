/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        colors: {
            red: "#D65747",
            green: "#96C291",
            blue: "#4F709C",
            beige: "#F8F0E5",
            white: "#FAFAFA",
            text: "rgba(0, 0, 0, 0.9)",
            border: "rgba(0,0,0,0.3)",
            loading: "rgba(0,0,0,0.4)"
        },
        fontFamily: {
            palanquin: ["var(--font-palanquin)"]
        },
        extend: {}
    },
    plugins: []
};
