import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  colors: {
    'text': 'rgb(var(--text))',
    'background': 'rgb(var(--background))',
    'primary': 'rgb(var(--primary))',
    'secondary': 'rgb(var(--secondary))',
    'accent': 'rgb(var(--accent))',
  },
  plugins: [],
};
export default config;
