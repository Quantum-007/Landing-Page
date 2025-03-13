import type { Config } from 'tailwindcss';

const config: Partial<Config> = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accentPrimary: 'var(--accent-primary)',
        accentSecondary: 'var(--accent-secondary)',
        accentTertiary: 'var(--accent-tertiary)',
        accentHover: 'var(--accent-hover)',
      },
      fontFamily: {
        sans: 'var(--font-manrope)', // Set Manrope as the primary font
        mono: 'var(--font-mono)',
      },
    },
  },
  plugins: [],
};

export default config;
