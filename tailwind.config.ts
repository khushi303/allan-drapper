import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
      padding: {
        DEFAULT: '16px',
      },
      center: true,
      },
      fontFamily: {
      'PublicSans': ['Public Sans', 'sans-serif'],
    },
      backgroundImage: {
     
      },
    },
  },
  plugins: [],
};
export default config;
