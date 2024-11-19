import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      xxl: '2000px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        md: '1.5rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Futura', 'sans-serif'],
      },
      colors: {
        primary: '#290045',
        secondary: '#E6C700',
        accent: {
          DEFAULT: '#00B49F',
          hover: '#00B490',
        },
      },
    },
  },
  plugins: [],
};
export default config;
