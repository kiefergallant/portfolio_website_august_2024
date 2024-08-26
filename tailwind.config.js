// // tailwind.config.js
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{vue,js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         slideInLeft: {
//           '0%': { transform: 'translateX(-100%)', opacity: '0' },
//           '100%': { transform: 'translateX(0)', opacity: '1' },
//         },
//       },
//       animation: {
//         slideInLeft: 'slideInLeft 0.5s forwards',
//       },
//     },
//   },
//   plugins: [],
// }


// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 0.5s forwards',
        slideOutLeft: 'slideOutLeft 0.5s forwards',
      },
    },
  },
  plugins: [],
}
