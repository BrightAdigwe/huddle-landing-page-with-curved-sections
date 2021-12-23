module.exports = {
  content: ["./**/*.html"],
  theme: {
    screen: {
      sm: '375px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'pink': '#ff52bf',
        'pink-light': '#ff8fd8',
        'red-light': '#ff4242',
        'cyan-dark': '#00252e',
        'blue-pale': '#f5faff',
      },
    },
    fontFamily: {
      'heading': ['Poppins'],
      'body': ['"Open Sans"'],
    },
  },
  plugins: [],
}

