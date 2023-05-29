/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}', './pages/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        blue: '#5175FF',
        'dark-blue': '#333950',
        'light-gray': '#999ca7',
        gray: '#747B95',
        'light-blue': '#829CFF',
        'very-light-blue': '#e4eaff',
        'card-light-blue': '#e9edfa',
        'light-blue-hover': '#c2cfff',
        dark: '#25293A',
        red: '#F05B5B',
        light: '#FAFAFA',
        'form-line': '#babecb',
        'select-line': 'rgba(51, 57, 80, 0.153273)',
        'select-line-2': '#dcdee4'
      }
    },
    fontFamily: {
      sans: ['Kumbh Sans', 'sans-serif']
    },
    fontSize: {
      h1: '3.5rem', // 56px
      h2: '2.5rem', // 40px
      h3: '1.25rem', // 20px
      h4: '1rem', // 16px,
      'body-1': '1.125rem', // 18px
      'body-2': '1rem' // 16px
    },
    lineHeight: {
      h1: '4rem', // 64px
      h2: '3rem', // 48px
      h3: '1.75rem', // 28px
      h4: '3rem', // 48px
      'body-1': '1.75rem', // 28px
      'body-2': '1.625rem' // 26px
    },
    backgroundImage: {
      'pattern-header': 'url("/home/bg-pattern-header.svg")',
      'pattern-pricing': 'url("/home/bg-pattern-pricing.svg")',
      'pattern-footer': 'url("/home/bg-pattern-footer.svg")',
      'pattern-side': 'url("/sign-up/bg-pattern-side.svg")'
    },
    borderRadius: {
      sm: '4px',
      md: '8px',
      card: '13px',
      btn: '28px'
    },
    boxShadow: {
      card: '0px 50px 50px -25px rgba(75, 92, 154, 0.247159)',
      btn: '0px 25px 25px -10px rgba(63, 91, 194, 0.247159)',
      form: '0px 50px 50px -25px rgba(75, 92, 154, 0.247159)',
      select: '0px 50px 50px -25px rgba(75, 92, 154, 0.747077)'
    },
    maxWidth: {
      container: '1110px'
    },
    screens: {
      md: '768px',
      xl: '1110px'
    }
  },
  plugins: []
}
