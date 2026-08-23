/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      brown: "#161224", // Premium dark card background
      lightBrown: "#221c38", // Lighter card background
      darkBrown: "#08070d", // Dark obsidian page background
      black: "#040306", // Midnight black
      white: "#f5f4f7", // Pristine off-white
      cyan: "#00f2fe", // Neon electric cyan
      lightCyan: "#4facfe", // Neon blue/cyan gradient mix
      darkCyan: "#09b3c4", // Deeper cyan
      orange: "#ff5a36", // Sunset electric orange
      lightOrange: "#ffaa85", // Soft warm orange
      darkOrange: "#e03e1b", // Deep orange
      grey: "#8c899c", // Slate grey
      lightGrey: "#b8b5c6", // Light slate
      darkGrey: "#120f1a", // Deep card borders
      purple: "#7f00ff", // Neon purple
      darkPurple: "#120f26", // Deep purple card bg
    },
    extend: {
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
        cyanBigShadow: "10px 10px 1000px 500px rgba(94, 206, 220, 0.3)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
        orangeBigShadow: "10px 10px 10000px 500px rgba(240, 169, 79, 0.3)",
        orangeMediumShadow: "10px 10px 2000px 150px rgba(240, 169, 79, 0.5)",
      },
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
    },
  },
  plugins: [],
};
