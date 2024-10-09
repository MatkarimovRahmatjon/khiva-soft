/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ,],
  theme: {
    extend: {
      colors: {
        borderColor: "#F4F6FC33",
        linkColor: "#BBBBCB",
      },
      fontFamily: {
        poppins: ["Protest Guerrilla"],
      },
    },
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "1320px",
      },
    },
  },
  plugins: [],
};
