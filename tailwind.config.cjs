/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        double: '200vh'
      },
      fontFamily: {
        secondary: ['Inter', 'sans-serif'],
        primary: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        solidSm: '3px 3px 0px 0px rgba(0,0,0,0.75)',
        solidMd: '6px 6px 0px 0px rgba(0,0,0,0.75)',
        solidLg: '9px 9px 0px 0px rgba(0,0,0,0.75)',
        solidXl: '12px 12px 0px 0px rgba(0,0,0,0.75)',
        innerSm: 'inset 3px 3px 0px 0px rgba(0,0,0,0.75)'
      },
      colors: {
        greyLight1: '#E4EBF5',
        greyLight2: '#c8d0e7',
        greyLight3: '#bec8e4',
        greyDark: '#9baacf',
        primaryLight:'#8abdff',
        primary: '#6d5dfc',
        primaryDark: '#5b0eeb',
        devYellow: {
          50: '#fefde8',
          100: '#fffec2',
          200: '#fffa87',
          300: '#fff043',
          // 400 is the default
          400: '#ffe226',
          500: '#efc603',
          600: '#ce9a00',
          700: '#a46e04',
          800: '#88550b',
          900: '#734610'
        },
        devPink: {
          50: '#fef1f7',
          100: '#fee5f1',
          200: '#ffcbe6',
          300: '#ffa1cf',
          400: '#ff67ad',
          500: '#fa3a8c',
          // 600 is the default
          600: '#ec2872',
          700: '#cc0a4e',
          800: '#a90b40',
          900: '#8c0f39'
        },
        devBlue: {
          50: '#effaff',
          100: '#dbf3fe',
          200: '#bfebfe',
          300: '#93e0fd',
          400: '#61ccf9',
          500: '#3cb1f5',
          // 600 is the default
          600: '#2f9aeb',
          700: '#1e7dd7',
          800: '#1f65ae',
          900: '#1e568a'
        },
        devPurple: {
          50: '#fbf4ff',
          100: '#f7e8ff',
          200: '#efd0fe',
          300: '#e5abfc',
          400: '#d679f9',
          500: '#c246ef',
          // 600 is the default
          600: '#b235db',
          700: '#8e1caf',
          800: '#76198f',
          900: '#641a75'
        }
      }
    }
  },
  plugins: []
}
