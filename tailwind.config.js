/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
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
        bg3: '#E3E3E3',
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
        skyBlue: '#3B8AFF',
        darkThemeBackground: '#222738',
        veryDarkThemeBackground: '#151824'
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
        xxl: '1600px',
        xxxl: '1920px'
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' }
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: 'translateX(-2px)' },
          to: { opacity: 1, transform: 'translateX(0)' }
        }
      },
      animation: {
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)'
      },
      boxShadow: {
        custom: '0px 10px 30px 0px rgba(17, 38, 146, 0.05)'
      },
      keyframes: {
        openSidebar: {
          '0%': {
            transform: 'translate(-500px)',
            opacity: 0
          },
          '100%': {
            transform: 'translate(0px)',
            opacity: 1,
            zIndex: -10
          }
        }
      },
      animation: {
        openSidebar: 'openSidebar 0.3s ease-in-out'
      }
    }
  },
  plugins: []
}
