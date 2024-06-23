const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Enable dark mode using a class
  content: [
    "./pages/**/*.{js,jsx}", // Scan JavaScript and JSX files in the pages directory
    "./components/**/*.{js,jsx}", // Scan JavaScript and JSX files in the components directory
    "./app/**/*.{js,jsx}", // Scan JavaScript and JSX files in the app directory
    "./src/**/*.{js,jsx}", // Scan JavaScript and JSX files in the src directory
    flowbite.content(), // Include Flowbite content (make sure Flowbite is properly imported)
  ],
  prefix: "", // No prefix for the utility classes
  theme: {
    container: {
      center: true, // Center the container by default
      padding: "2rem", // Add padding to the container
      screens: {
        "2xl": "1400px", // Set the max-width for 2xl screen size
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out", // Define accordion-down animation
        "accordion-up": "accordion-up 0.2s ease-out", // Define accordion-up animation
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Include tailwindcss-animate plugin
    require("tailwindcss"), // Include Tailwind CSS
    require("autoprefixer"), // Include Autoprefixer for CSS vendor prefixes
    flowbite.plugin(), // Include Flowbite plugin (make sure Flowbite is properly imported)
  ],
};
