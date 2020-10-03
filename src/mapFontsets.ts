import { Style } from 'treat'
import { Theme } from 'treat/theme'
import * as R from 'fp-ts/Record'
import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/pipeable'

import { makeResponsive, semigroupResponsiveStyle } from './utils'
import { CalicoTheme } from './createCalicoTheme'

interface BaseKickOptions {
  typeSizeModifier: number
  baseFontSize: number
  descenderHeightScale: number
  capHeight: number
  lineHeight: number
}

export const basekick = ({
  typeSizeModifier,
  baseFontSize,
  descenderHeightScale,
  lineHeight,
  capHeight,
}: BaseKickOptions) => {
  const fontSize = typeSizeModifier * baseFontSize

  const calculateTypeOffset = (lh: number) => {
    const lineHeightScale = lh / fontSize
    return (lineHeightScale - 1) / 2 + descenderHeightScale
  }

  const typeOffset = calculateTypeOffset(lineHeight)

  const heightCorrection = lineHeight - capHeight * fontSize

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
  fontSize: Partial<Record<keyof CalicoTheme['breakpoints'], number>>
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
}: BaseKickArgs): Style =>
  pipe(
    theme.fonts,
    O.fromNullable,
    O.chain((fonts) => R.lookup(fontFamily, fonts)),
    O.map((fontStack) =>
      basekick({
        typeSizeModifier: fontSize,
        baseFontSize: theme.baseFontSize,
        descenderHeightScale: fontStack.descenderHeightScale,
        lineHeight: lineHeightScale * fontStack.baseFontHeight * fontSize,
        capHeight: fontStack.capHeightScale,
      }),
    ),
    O.getOrElseW(() => R.empty),
  )

const responsiveBasekickFontset = (theme: CalicoTheme) => (fontset: Fontset) =>
  pipe(
    fontset.fontSize as Required<typeof fontset.fontSize>,
    R.mapWithIndex((breakpoint, fontSize) =>
      pipe(
        { ...fontset, fontSize } as BaseKickArgs,
        basekickFontStyles(theme),
        makeResponsive(breakpoint, theme),
      ),
    ),
  )

/**
 * Utility function for generating `treat` styles that remove the leading and trailing white-space
 * for your fonts.
 *
 * Removing white-space in this manner aligns web-rendered text to be aligned at their true baseline
 * instead of from the center of their line-height. This provides a more consistent behavior to
 * design tools.
 *
 * @see
 * https://github.com/michaeltaranto/basekick
 *
 * @param theme Your theme object from `createCalicoTheme`.
 * @param fontsets The configuration settings for each of your fonts.
 *
 * @returns `treat` style objects containing styles that appropriately trim white-space.
 *
 * @example
 * import { styleMap } from 'treat'
 *
 * // Heading.treat.ts
 * const fontsets = {
 *  sans: {
 *    fontFamily: 'sans',
 *    fontSize: {
 *      mobile: 1
 *    },
 *    lineHeightScale: 1.5
 *  }
 * } as const
 *
 * export const variants = styleMap(theme => mapFontSets(theme, fontsets))
 */
export const mapFontsets = <K extends string>(
  theme: CalicoTheme,
  fontsets: Record<K, Fontset>,
) =>
  pipe(
    fontsets,
    R.map(responsiveBasekickFontset(theme)),
    R.map(R.reduce({} as Style, semigroupResponsiveStyle.concat)),
  )
