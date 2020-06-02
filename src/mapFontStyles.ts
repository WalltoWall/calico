import { Style } from 'treat'
import { mapWithIndex } from 'fp-ts/es6/Record'

import { makeResponsive } from './utils'
import { Theme } from './theme'

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

type FontStyleRules = {
  fontFamily: keyof Theme['fonts']
  fontSize: Partial<Record<keyof Theme['breakpoints'], number>>
  lineHeightScale: number
}

type BaseKickArgs = Omit<FontStyleRules, 'fontSize'> & {
  baseFontSize?: number
  fontSize: number
}

export const basekickFontStyles = (theme: Theme) => ({
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

export const mapFontStyles = (theme: Theme) => (rule: FontStyleRules) =>
  mapWithIndex((breakpoint: keyof Theme['breakpoints'], fontSize: number) => {
    const responsiveRule: BaseKickArgs = {
      ...rule,
      fontSize,
    }

    const baseKickStyles = basekickFontStyles(theme)(responsiveRule)

    return makeResponsive(breakpoint, theme)(baseKickStyles)
  })(rule.fontSize as Record<keyof Theme['breakpoints'], number>)
