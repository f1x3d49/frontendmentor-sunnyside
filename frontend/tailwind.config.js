/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pred: "hsl(var(--color-sred) / <alpha-value>)",
        pyellow: "hsl(var(--color-yellow) / <alpha-value>)",
        ddcyan: "hsl(var(--color-ddcyan) / <alpha-value>)",
        dblue: "hsl(var(--color-dblue) / <alpha-value>)",
        dmcyan: "hsl(var(--color-dmcyan) / <alpha-value>)",
        vddblue: "hsl(var(--color-vddblue) / <alpha-value>)",
        vdgblue: "hsl(var(--color-vdgblue) / <alpha-value>)",
        dgblue: "hsl(var(--color-dgblue) / <alpha-value>)",
        gblue: "hsl(var(--color-gblue) / <alpha-value>)",
        nwhite: "hsl(var(--color-white) / <alpha-value>)",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      backgroundImage: {
        "header-mobile": "url(/src/images/mobile/image-header.jpg)",
        "header-desktop": "url(/src/images/desktop/image-header.jpg)",
      },
    },
  },
  plugins: [],
};
