import type { Config } from "tailwindcss";
import bg4 from "@/assets/images/bg4.png";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "430px" },
        sm: { min: "430px", max: "767px" }, // Small devices (e.g. phones)
        md: { min: "768px", max: "1200px" }, // Medium devices (e.g. tablets)
        "3xl": { min: "1586px", max: "1920px" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          "300": "#89225A",
          "700": "#89225A",
          "800": "#89225A",
        },
        secondory: {
          400: "#FCE5EE",
        },
        turnary: {
          800: "#00ADE5",
        },
        blue: {
          "Secondary-Shades-Blue-50": "#DFF3FB",
        },
        grey: {
          deafult: "#F9FAFB",
          "950": "#030712",
          "800": "#1F2937",
          border: "#0000001A",
          "500": "#6B7280",
          "600": "#12141D",
          "200": "#E5E7EB",
        },
        pink: {
          800: "#89225A",
        },
      },

      bg: {
        grey: {
          deafult: "#F9FAFB",
          "950": "#030712",
          border: "#0000001A",
          "500": "#6B7280",
        },
        pink: {
          800: "#89225A",
        },
      },

      boxShadow: {
        "custom": '0px 1px 0px 0.5px #89225ab3]'
      },

    },

    fontFamily: {
      body: ["Roboto"],
      sans: ["Roboto"],
    },
  },
  plugins: [],
};
export default config;
