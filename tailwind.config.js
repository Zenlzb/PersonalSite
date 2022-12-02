module.exports = {
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-blue':'#0e0f30',
      },
      keyframes: {
        fadeDown: {
          '0%': {
            transform: 'translateY(-10%);',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0%);',
            opacity: 1
          }
        }
      },
      animation: {
        fadeDown: 'fadeDown 1s ease-in 1'
      }
    },
  },
  plugins: [],
}
