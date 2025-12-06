import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f0fb',
          100: '#d1e0f7',
          500: '#1380ec',
          600: '#0a5fd6',
          700: '#084bb3',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111418',
        },
        'text-secondary': '#617589',
        'bg-light': '#f0f2f4',
        'border-light': '#dbe0e6',
      },
      fontFamily: {
        sans: ['Manrope', 'Noto Sans', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '28px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['32px', { lineHeight: '40px' }],
        '4xl': ['36px', { lineHeight: '44px' }],
        '5xl': ['48px', { lineHeight: '56px' }],
      },
      letterSpacing: {
        light: '-0.015em',
        normal: '0',
        tight: '-0.033em',
        wide: '0.015em',
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '700',
        black: '800',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
      },
    },
  },
  plugins: [
    forms,
    containerQueries,
  ],
};

export default config;