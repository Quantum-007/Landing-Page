import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  corePlugins: { preflight: false },
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {},
    },
  },
  plugins: [],
};

export default config;
