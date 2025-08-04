/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Define custom classes for different screen sizes
      screens: {
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // Extra large screens
      },

      width: {
        custom: "300px", // Define a custom width value
      },
      height: {
        height: "460px",
      },
      colors: {
        "custom-blue": "#5D88C6", // Define a custom color
        "custom-blue-light": "rgba(93, 136, 198, 0.6)",
        custom: "rgba(229, 229, 229, 0.5)",
        customprojects: "rgba(194, 219, 255, 0.5)",
        customFull: "#E5E5E5",
        paraClr: "#454544", // para clr
        greybg: "#F0F1F2",
        lightBlack: "rgba(0, 0, 0, 0.9)",
        lightBlue: "rgba(0, 41, 100, 0.8)"
      },
      // Extend background image utilities
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        bebas: "Bebas Neue"
      },
      letterSpacing: {
        'custom': '0.03em', // 3% letter spacing
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
