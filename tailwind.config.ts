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
         fontSize: {
        'custom-xl': '28px',
        'custom-2xl': '34px',
        'custom-3xl': '42px',
        'custom-4xl': '56px',
        'custom-5xl': '120px',
      },
      backgroundImage: {
     
      },
    },
  },
  plugins: [],
};
export default config;
