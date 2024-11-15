import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 

  theme: {
    
    extend: {
      keyframes: {
        subtleWiggle: {
          '20%': { transform: 'translateX(-10px)' },
          '70%': { transform: 'translateX(10px)' },
          '50%': { transform: 'translateY(10px)' },
          '40%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        subtleWiggle: 'subtleWiggle 3s ease-in-out infinite',
      },
      spacing: {
        '1/10': '0.1rem',
        '1/20': '0.05rem',
      },
      fontFamily: {
        montserrat: [
          '"Montserrat"',
          'sans-serif',
        ],
      },
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        blue: {
          "100": "#E4ECFF",
        },
        purple: "#CBACF9",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      }
    }
  },
  plugins: [],
};
export default config;

