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
          DEFAULT: "16px",
        },
        center: true,
      },
      fontFamily: {
        PublicSans: ["Public Sans", "sans-serif"],
      },
      fontSize: {
        "custom-xl": "28px",
        "custom-2xl": "34px",
        "custom-3xl": "42px",
        "custom-4xl": "56px",
        "custom-5xl": "120px",
      },
      backgroundImage: {
        heroBlack: "url('/assets/images/png/herobg.png')",
        principleBlackLayer: "url('/assets/images/png/principle-black-layer.png')",
      },
      colors: {
        chileanFire: "#F58505",
        bunker: "#040707",
        iron: "#E2E4E4",
        ripeLemon: "#EEE916",
        shadowGreen: "#A3CCC4",
          gray:"#686C6B",
      },
      lineHeight: {
        105: "105%",
        110: "110%",
        120: "120%",
        130: "130%",
        140: "140%",
        150: "150%",
      },
      screens: {
        custom2xl: "1400px",
      },
    },
  },
  plugins: [],
};
export default config;
