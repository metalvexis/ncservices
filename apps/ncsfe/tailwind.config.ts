import config from '@ncservices/tailwindconfig'
import type { Config } from "tailwindcss"

const extendedConfig = {
  ...config,
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  darkMode: ["class"],
  prefix: "",
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default extendedConfig