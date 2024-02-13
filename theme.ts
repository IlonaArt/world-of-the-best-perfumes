import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Inter, sans-serif',
  },
  colors: {
    brand: {
      bg: '#FFF9F5',
    },
    transparent: 'transparent',
    black: '#121212',
    white: '#fff',
    beige: '#D0BDB0',
    bgNav: '#F1EEEC',
    attention: '#CA17A2',
  },
  fontSizes: {
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '24px',
    '2xl': '28px',
    '3xl': '32px',
    '4xl': '38px',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    default: '100%',
    xs: '18px',
    sm: '20px',
    md: '22px',
    lg: '24px',
    xl: '28px',
    '2xl': '32px',
    '3xl': '36px',
    '4xl': '42px',
  },
  radii: {
    none: '0',
    sm: '4px',
    md: '8px',
  },
})

export default theme
