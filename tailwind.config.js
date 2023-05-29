/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{html,js}","./src/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
   
    extend: {
      width: {
        '98':'30rem'
      },
      keyframes:{
        bounceme:{
          '0%': {
            transform: 'translateY(0)'
          },
       
          '20%': {
            transform: 'translateY(-15%)'
          },
        
            '40%': {
              transform: 'translateY(0)'
            },
            '60%': {
              transform: 'translateY(-15%)'
            },
            '80%': {
              transform: 'translateY(0)'
            },
            '100%': {
              transform: 'translateY(0)'
            },
        
       
          
        }
      },
      animation:{
        'bounce-me': 'bounceme 20s infinite'
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui"),
    
  ],

}
