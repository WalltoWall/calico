import {
  createCalicoTheme,
  mergeCalicoTokens,
  grid12ColumnTokens,
  sensibleTokens,
} from '../../src/treat'

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

export const theme = createCalicoTheme(
  mergeCalicoTokens(sensibleTokens, grid12ColumnTokens, {
    // Sizes
    breakpoints: {
      _: '0',
      tablet: '48rem',
      desktop: '75rem',
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

    pseudos: {
      color: [':hover', ':focus'],
    },
  } as const),
)
