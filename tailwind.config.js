/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        primary: '#3A57E8',
        primaryLight: '#C4CCF8',
        primaryDark: '#0048B2',
        primaryVeryDark: '#001F4D',
        textColor1: '#232D42',
        textColor2: '#8A92A6',
        textColor3: '#ADB5BD',
        textColor4: '#6C757D',
        bg1: '#FFFFFF',
        bg2: '#e9ecef',
        bg3: 'E3E3E3',
        defaultShadowColor: '#001129',
        success: '#1AA053',
        successLight: '#D3FFB3',
        successDark: '#409900',
        error: '#C03221',
        errorLight: '#F2D6D3',
        errorDark: '#41110B',
        warning: '#F16A1B',
        warningLight: '#FCE1D1',
        warningDark: '#B24400',
        pending: '#FFD329',
        pendingLight: '#FFEFB3',
        pendingDark: '#B28E00',
        information: '#08B1BA',
        informationLight: '#85F4FA',
        informationDark: '#05666C',
        violet: '#9A18FF',
        violetLight: '#E9CCFF',
        violetDark: '#550495',
        pink: '#FF5DCD',
        pinkLight: '#FFCCEF',
        pinkDark: '#B2007B',
        lightBlue: '#369BFF',
        textBorder: '#EEEEEE',
        muttedText: '#6C757D',
        // skyBlue: '#BAC5F7',
        skyBlue: '#3B8AFF'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1250px',
        xxl: '1600px'
      }
    }
  },
  plugins: []
}
