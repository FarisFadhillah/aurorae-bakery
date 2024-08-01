/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors:{
        primary: '#FEEFD0',
        secondary: '#EED7BB',
        clthird: '#572400',
        clbtn: '#FFC751',
        clhover: '#F97821',
      },
    },
  },
  plugins: [
]
}