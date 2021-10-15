import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  shortcuts: {
    bg_mi: 'bg-[#f3f2ee]',
    flex_center_p0: 'flex items-center justify-center p-0',
    logo: 'space-x-4 flex_center_p0 md:space-x-8 xl:space-x-12',
    logo_half: 'space-x-2 flex_center_p0 md:space-x-4 xl:space-x-6',
    logo_fix: 'space-x-4 flex_center_p0',
    logo_half_fix: 'space-x-2 flex_center_p0',
    wh3: 'w-3 h-3 md:(w-6 h-6) xl:(w-9 h-9)',
    wh4: 'w-4 h-4 md:(w-8 h-8) xl:(w-12 h-12)',
    text3: 'text-base3 md:text-md3 xl:text-xl3',
    text4: 'text-base md:text-md xl:text-xl',
    text6: 'text-base6 md:text-md6 xl:text-xl6',
    nav: 'space-x-3 flex_center_p0 md:space-x-6 xl:space-x-9',
    nav_item: 'space-x-1.5 flex_center_p0 md:space-x-3 xl:space-x-4.5',
    header:
      'flex items-center justify-between h-20 p-8 mx-auto md:(h-40 p-16) xl:(h-60 p-24) 2xl:px-48',
    note_card:
      'flex_center_p0 w-full h-40vw bg-center bg-no-repeat bg-cover flex-col text-[#f3f2ee] color-[#f3f2ee] space-y-4 md:space-y-8 xl:space-y-12',
    note_width: 'max-w-50rem mx-auto',
    note_title: 'flex_center_p0 note_width flex-col space-y-4',
    user: 'max-w-20rem mx-8 mt-8 p-8 bg-white border-2 border-solid rounded-2xl border-gray-200',
    user_layout: 'bg_mi flex_center_p0 flex-col h-screen',
  },
  theme: {
    fontSize: {
      base6: ['1.5rem', '1.5rem'],
      md6: ['3rem', '3rem'],
      xl6: ['4.5rem', '4.5rem'],
      base: ['1rem', '1rem'],
      md: ['2rem', '2rem'],
      xl: ['3rem', '3rem'],
      base3: ['0.75rem', '0.75rem'],
      md3: ['1.5rem', '1.5rem'],
      xl3: ['2.25rem', '2.25rem'],
    },
  },
  extract: {
    include: ['index.html', 'src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules/**/*', '.git/**/*'],
  },
  plugins: [require('windicss/plugin/typography')],
});
