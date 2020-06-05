import { baseCalicoTheme, createCalicoTheme } from '../../src'

export type Theme = typeof theme

export const theme = createCalicoTheme({
  // Sizes
  breakpoints: {
    mobile: 0,
    tablet: 192,
    desktop: 300,
    desktopWide: 360,
  },

  // Spacing
  grid: 0.25,
  space: {
    auto: 'auto',
    [-2]: -2,
    [-1.5]: -1.5,
    [-1]: -1,
    [-0.5]: -0.5,
    0: 0,
    0.5: 0.5,
    1: 1,
    1.5: 1.5,
    2: 2,
  },

  // Colors
  colors: {
    white: '#fff',
    black: '#000',
  },

  // Fonts
  fonts: {
    sans: {
      stack: 'system-ui',
      baseFontHeight: 11,
      descenderHeightScale: 0.12,
      capHeightScale: 0.685,
    },
  },

  rules: {
    maxWidth: {
      small: '48rem',
      medium: '60rem',
      large: '75rem',
      xlarge: '90rem',
    },
    lineHeight: {
      solid: 1,
    },
    letterSpacing: {
      ...baseCalicoTheme.rules.letterSpacing,
      s: '0.05em',
      m: '0.1em',
      l: '0.2em',
    },
    transitionDuration: {
      slow: '300ms',
      normal: '200ms',
      fast: '100ms',
    },
    opacity: {
      ...baseCalicoTheme.rules.opacity,
      foo: 'bar',
    },
  },

  variants: {
    maxWidth: {
      responsive: true,
    },
    display: {
      responsive: true,
    },
    opacity: {
      responsive: false,
    },
  },
})
