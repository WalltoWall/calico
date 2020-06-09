import { Style } from 'treat'
import { StandardProperties } from 'csstype'
import { map } from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'

import { rules } from './rules'
import { variants } from './variants'
import { createMq, MqStyles } from './createMq'

type BreakpointKeys = 'mobile' | 'tablet' | 'desktop' | 'desktopWide'

export interface CreateCalicoThemeInput {
  breakpoints: Record<BreakpointKeys, string>

  baseFontSize?: number
  fonts?: Record<
    string,
    {
      stack: string
      baseFontHeight: number
      descenderHeightScale: number
      capHeightScale: number
    }
  >

  space?: Record<string | number, string | number>
  colors?: Record<string, string>

  mq?: (mqStyles: MqStyles) => Style

  rules?: {
    [P in keyof StandardProperties]?: Record<
      string | number,
      NonNullable<StandardProperties<string | number>[P]>
    >
  }
  variants?: {
    [P in keyof StandardProperties]?: Partial<Record<'hover' | 'focus', true>>
  }
}

export const baseCalicoTheme = {
  baseFontSize: 16,
  rules,
  variants,
} as const

export type CalicoTheme = ReturnType<typeof createCalicoTheme>

export const createCalicoTheme = <T extends CreateCalicoThemeInput>(
  theme: T,
) => {
  const mediaQueries = pipe(
    theme.breakpoints,
    map((value) => `screen and (min-width: ${value})`),
  )

  // TODO: Probably a more FP way to do this instead of a ternary.
  const fontFamily = theme.fonts
    ? pipe(
        theme.fonts,
        map((fontDef) => fontDef.stack),
      )
    : undefined

  return {
    mediaQueries,
    mq: createMq(Object.values(theme.breakpoints)),
    ...baseCalicoTheme,
    ...theme,

    rules: {
      ...baseCalicoTheme.rules,
      ...theme.rules,

      fontFamily: {
        ...fontFamily,
        ...theme.rules?.fontFamily,
      },

      color: {
        ...theme.colors,
        ...theme.rules?.color,
      },
      borderColor: {
        ...theme.colors,
        ...theme.rules?.borderColor,
      },
      backgroundColor: {
        ...theme.colors,
        ...theme.rules?.backgroundColor,
      },

      margin: {
        ...theme.space,
        ...theme.rules?.margin,
      },
      marginTop: {
        ...theme.space,
        ...theme.rules?.marginTop,
      },
      marginBottom: {
        ...theme.space,
        ...theme.rules?.marginBottom,
      },
      marginLeft: {
        ...theme.space,
        ...theme.rules?.marginLeft,
      },
      marginRight: {
        ...theme.space,
        ...theme.rules?.marginRight,
      },
      padding: {
        ...theme.space,
        ...theme.rules?.padding,
      },
      paddingTop: {
        ...theme.space,
        ...theme.rules?.paddingTop,
      },
      paddingBottom: {
        ...theme.space,
        ...theme.rules?.paddingBottom,
      },
      paddingLeft: {
        ...theme.space,
        ...theme.rules?.paddingLeft,
      },
      paddingRight: {
        ...theme.space,
        ...theme.rules?.paddingRight,
      },

      gap: {
        ...theme.space,
        ...theme.rules?.gap,
      },
    },

    variants: {
      ...baseCalicoTheme.variants,
      ...theme.variants,
    },
  } as const
}
