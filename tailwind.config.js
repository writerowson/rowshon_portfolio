// /** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},


  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1b0f22",
          secondary: "#07f49e",
          accent: "#38fcb5",
          neutral: "gray",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },

}