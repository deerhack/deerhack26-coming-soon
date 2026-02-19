import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6633CC",
        secondary: "#F5C144",
        "dark-purple": "#110C24",
        violet: "#241A4A",
        grape: "#6633CC",
        purpures: "#9D4BAD",
        saffron: "#F5C144",
        magnolia: "#FCF7FF",
      },
      gradientColorStopPositions: {
        3: "3%",
        1: "1%",
      },
      fontFamily: {
        "cabinet-light": ["var(--font-cabinet-light)"],
      },
    
     
    },
  },
  plugins: [],
  corePlugins: {
    opacity: true,
    transitionProperty: true,
  },
};
export default config;
