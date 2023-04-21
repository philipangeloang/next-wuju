import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        dmsans: "DM Serif Display"
      },
      colors: {
        "main-black": "#252525",
        "off-white": "#f2f2f2"
      },
    },
  },
  plugins: [],
} satisfies Config;
