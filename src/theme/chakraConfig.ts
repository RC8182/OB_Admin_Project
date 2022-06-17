// 1. Import `extendTheme`
import { extendTheme} from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import {ThemeConfig} from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const breakpoints = createBreakpoints({
  sm: '768px',
  md: '1024px',
  lg: '1440px',
  xl: '1740px',
  '2xl': '2040px',
});

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  config,
  breakpoints,
  colors: {
    white: '#ffffff',
    black: '#121625',
    gray_1: '#F8F8F9',
    gray_2: '#E6E6EA',
    gray_3: '#BFBFCA',
    gray_4: '#A5A8B3',
    gray_5: '#8C909C',
    gray_6: '#515561',
    gray_7: '#2E323F',

    primary: '#32D4A4',
    primary_pastel: 'rgba(50, 212, 164, 0.15)',
    primary_neon: '#36E4A6',

    cancel: '#EC555E',

    red: '#D04566',
    light_blue: '#3FCBF8',
    blue: '#3684FA',
    orange: '#EDA73F',
    blue_pastel: 'rgba(68, 105, 235, 0.1)',
  },
});

export { theme };