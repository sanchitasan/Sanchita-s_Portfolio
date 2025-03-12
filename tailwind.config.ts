import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 

  theme: {
    extend: {
      animation: {
        "gradient-move": "gradientMove 5s ease infinite",
      },
      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

