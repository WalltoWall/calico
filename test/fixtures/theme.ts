import { baseCalicoTheme, createCalicoTheme } from '../../src'

export type Theme = typeof theme

const space = {
  auto: 'auto',
  [-2]: '-0.5rem',
  [-1.5]: '-0.5rem',
  [-1]: '-0.25rem',
  [-0.5]: '-0.125rem',
  0: 0,
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
}

const colors = {
  white: '#fff',
  black: '#000',
}

export const theme = createCalicoTheme({
  // Sizes
  breakpoints: {
    mobile: '0rem',
    tablet: '48rem',
    desktop: '75rem',
    desktopWide: '90rem',
  },

  rules: {
    color: colors,
    borderColor: colors,
    backgroundColor: colors,

    margin: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,

    padding: space,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,

    gap: space,

    fontFamily: {
      sans: 'system-ui',
    },

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
  },

  aliases: {
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
  },
})
