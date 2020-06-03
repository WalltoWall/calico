import { Style } from 'treat'
import { Theme } from 'treat/theme'
import * as R from 'fp-ts/es6/Record'

import { makeResponsive, semigroupResponsiveStyle } from './utils'
import { CalicoTheme } from './createCalicoTheme'
import { pipe } from 'fp-ts/es6/pipeable'

interface BaseKickOptions {
  typeSizeModifier: number
  baseFontSize: number
  descenderHeightScale: number
  capHeight: number
  typeRowSpan: number
  gridRowHeight: number
}

export const basekick = ({
  typeSizeModifier,
  baseFontSize,
  descenderHeightScale,
  typeRowSpan,
  gridRowHeight,
  capHeight,
}: BaseKickOptions) => {
  const fontSize = typeSizeModifier * baseFontSize

  const calculateTypeOffset = (lh: number) => {
    const lineHeightScale = lh / fontSize
    return (lineHeightScale - 1) / 2 + descenderHeightScale
  }

  const lineHeight = typeRowSpan * gridRowHeight
  const typeOffset = calculateTypeOffset(lineHeight)

  const topSpace = lineHeight - capHeight * fontSize
  const heightCorrection = topSpace > gridRowHeight ? topSpace : 0

  const preventCollapse = 1

  return {
    fontSize: `${fontSize / baseFontSize}rem`,
    lineHeight: `${lineHeight / baseFontSize}rem`,
    transform: `translateY(${typeOffset}em)`,
    paddingTop: preventCollapse,
    ':before': {
      content: "''",
      marginTop: `${-(heightCorrection + preventCollapse) / baseFontSize}rem`,
      display: 'block',
      height: 0,
    },
  }
}

interface Fontset {
  fontFamily: keyof Theme['fonts']
  fontSize: Record<keyof CalicoTheme['breakpoints'], number>
  lineHeightScale: number
}

type BaseKickArgs = Omit<Fontset, 'fontSize'> & {
  baseFontSize?: number
  fontSize: number
}

export const basekickFontStyles = (theme: CalicoTheme) => ({
  fontFamily,
  fontSize,
  lineHeightScale,
}: BaseKickArgs): Style => {
  const baseFontSize = 16
  const fontDefinition = theme.fonts[fontFamily]

  const lineHeight =
    (lineHeightScale * fontDefinition.baseFontHeight * fontSize) /
    theme.grid /
    baseFontSize

  return basekick({
    typeSizeModifier: fontSize,
    baseFontSize,
    descenderHeightScale: fontDefinition.descenderHeightScale,
    typeRowSpan: lineHeight,
    gridRowHeight: theme.grid * 16,
    capHeight: fontDefinition.capHeightScale,
  })
}

const responsiveBasekickFontset = (theme: CalicoTheme) => (fontset: Fontset) =>
  pipe(
    fontset.fontSize,
    R.mapWithIndex((breakpoint, fontSize) =>
      pipe(
        { ...fontset, fontSize } as BaseKickArgs,
        basekickFontStyles(theme),
        makeResponsive(breakpoint, theme),
      ),
    ),
  )

export const mapFontsets = <K extends string>(
  theme: CalicoTheme,
  fontsets: Record<K, Fontset>,
) =>
  pipe(
    fontsets,
    R.map(responsiveBasekickFontset(theme)),
    R.map(R.reduce({} as Style, semigroupResponsiveStyle.concat)),
  )
