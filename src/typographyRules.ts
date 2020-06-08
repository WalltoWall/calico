export const typographyRules = {
  fontWeight: {
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    heavy: 800,
    black: 900,
  },
  fontStyle: {
    normal: 'normal',
    italic: 'italic',
  },
  lineHeight: {},
  textAlign: {
    left: 'left',
    center: 'center',
    right: 'right',
  },
  textTransform: {
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize',
  },
  letterSpacing: {
    normal: 'normal',
    none: 0,
  },
  listStyle: {
    none: 'none',
    disc: 'disc',
    decimal: 'decimal',
  },
} as const

export const typographyVariants = {
  color: {
    hover: true,
    focus: true,
  },
} as const
