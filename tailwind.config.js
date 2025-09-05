/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tt-norms': ['TT Norms Pro', 'sans-serif'],
      },
      fontSize: {
        '15': '15px',
        '16': '16px',
        '19': '19px',
        '20': '20px',
        '22': '22px',
        '23': '23px',
        '24': '24px',
        '46': '46px',
      },
      fontWeight: {
        normal: '400',
        regular: '400',
        medium: '500',
        demibold: '600',
        bold: '700',
      },
      colors: {
        // Reds
        'primary-red': '#CB152F',
        'red-db': '#DB0000',
        'red-db0': '#DB0F00',
        'red-d9': '#D90000',
        'red-ff': '#FF0024',
        
        // Grays
        'gray-7a': '#7A8290',
        'gray-c5': '#C5C5C5',
        'gray-91': '#9199A6',
        'gray-d9': '#D9D9DE',
        'gray-b8': '#B8B9C1',
        'gray-66': '#666666',
        'gray-ab': '#ABABAB',
        'gray-33': '#333333',
        
        // Dark themes
        'dark-2b': '#2B2B30',
        'dark-3a': '#3A3A40',
        
        // Whites and transparent
        'white': '#FFFFFF',
        'off-white': '#F7F7F8',
        
        // Transparent colors
        'transparent-2b': '#2B2B3000',
        'transparent-ec': '#ECECEC00',
        'transparent': '#00000000',
        'transparent-a5': '#A5A5A529',
        
        // Black
        'black': '#000000',
      },
      screens: {
        'xs': '475px',
        'mobile': '480px',
        'laptop': '1500px',
        'design': '1920px',
      },
      height: {
        'design': '8044px',
      },
      width: {
        'design': '1920px',
      },
    },
  },
  plugins: [],
}

