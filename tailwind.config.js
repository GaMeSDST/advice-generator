/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        sm: "370px",
        md: "505px"
      },
      boxShadow: {
        "green": '0 0 30px 5px hsl(150, 100%, 66%)'
      }
    },
  },
  plugins: [],
}

