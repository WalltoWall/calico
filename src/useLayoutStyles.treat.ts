import { styleMap } from 'treat'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToProperty, mapToResponsive } from './utils'
import { theme } from './theme'

const widthRules = {
  full: '100%',
  '1/12': `${(1 / 12) * 100}%`,
  '2/12': `${(2 / 12) * 100}%`,
  '3/12': `${(3 / 12) * 100}%`,
  '4/12': `${(4 / 12) * 100}%`,
  '5/12': `${(5 / 12) * 100}%`,
  '6/12': `${(6 / 12) * 100}%`,
  '7/12': `${(7 / 12) * 100}%`,
  '8/12': `${(8 / 12) * 100}%`,
  '9/12': `${(9 / 12) * 100}%`,
  '10/12': `${(10 / 12) * 100}%`,
  '11/12': `${(11 / 12) * 100}%`,
  '12/12': `${(12 / 12) * 100}%`,
  auto: 'auto',
}
export const width = pipe(
  widthRules,
  mapToProperty('width'),
  mapToResponsive('mobile', theme),
  styleMap,
)
export const widthTablet = pipe(
  widthRules,
  mapToProperty('width'),
  mapToResponsive('tablet', theme),
  styleMap,
)
export const widthDesktop = pipe(
  widthRules,
  mapToProperty('width'),
  mapToResponsive('desktop', theme),
  styleMap,
)
export const widthDesktopWide = pipe(
  widthRules,
  mapToProperty('width'),
  mapToResponsive('desktopWide', theme),
  styleMap,
)
export const maxWidth = pipe(
  widthRules,
  mapToProperty('maxWidth'),
  mapToResponsive('mobile', theme),
  styleMap,
)
export const maxWidthTablet = pipe(
  widthRules,
  mapToProperty('maxWidth'),
  mapToResponsive('tablet', theme),
  styleMap,
)
export const maxWidthDesktop = pipe(
  widthRules,
  mapToProperty('maxWidth'),
  mapToResponsive('desktop', theme),
  styleMap,
)
export const maxWidthDesktopWide = pipe(
  widthRules,
  mapToProperty('maxWidth'),
  mapToResponsive('desktopWide', theme),
  styleMap,
)

export type Height = keyof typeof heightRules
const heightRules = {
  full: '100%',
  1: '1px',
  auto: 'auto',
}
export const height = pipe(
  heightRules,
  mapToProperty('height'),
  mapToResponsive('mobile', theme),
  styleMap,
)
export const heightTablet = pipe(
  heightRules,
  mapToProperty('height'),
  mapToResponsive('tablet', theme),
  styleMap,
)
export const heightDesktop = pipe(
  heightRules,
  mapToProperty('height'),
  mapToResponsive('desktop', theme),
  styleMap,
)
export const heightDesktopWide = pipe(
  heightRules,
  mapToProperty('height'),
  mapToResponsive('desktopWide', theme),
  styleMap,
)

const displayRules = {
  block: 'block',
  inline: 'inline',
  none: 'none',
  inlineBlock: 'inline-block',
  flex: 'flex',
  grid: 'grid',
}
export const display = pipe(
  displayRules,
  mapToProperty('display'),
  mapToResponsive('mobile', theme),
  styleMap,
)
export const displayTablet = pipe(
  displayRules,
  mapToProperty('display'),
  mapToResponsive('tablet', theme),
  styleMap,
)
export const displayDesktop = pipe(
  displayRules,
  mapToProperty('display'),
  mapToResponsive('desktop', theme),
  styleMap,
)
export const displayDesktopWide = pipe(
  displayRules,
  mapToProperty('display'),
  mapToResponsive('desktopWide', theme),
  styleMap,
)

export const outline = styleMap({
  none: { outline: 'none' },
})

export const userSelect = styleMap({
  none: { userSelect: 'none' },
})

const pointerEventsRules = {
  none: 'none',
  auto: 'auto',
}
export const pointerEvents = pipe(
  pointerEventsRules,
  mapToProperty('pointerEvents'),
  mapToResponsive('mobile', theme),
  styleMap,
)
export const pointerEventsTablet = pipe(
  pointerEventsRules,
  mapToProperty('pointerEvents'),
  mapToResponsive('tablet', theme),
  styleMap,
)
export const pointerEventsDesktop = pipe(
  pointerEventsRules,
  mapToProperty('pointerEvents'),
  mapToResponsive('desktop', theme),
  styleMap,
)
export const pointerEventsDesktopWide = pipe(
  pointerEventsRules,
  mapToProperty('pointerEvents'),
  mapToResponsive('desktopWide', theme),
  styleMap,
)

const overflowRules = {
  auto: 'auto',
  hidden: 'hidden',
  scroll: 'scroll',
  scrollX: 'scrollX',
  scrollY: 'scrollY',
}
export const overflow = pipe(overflowRules, mapToProperty('overflow'), styleMap)

const positionRules = {
  static: 'static',
  relative: 'relative',
  absolute: 'absolute',
  fixed: 'fixed',
  sticky: 'sticky',
}
export const position = pipe(positionRules, mapToProperty('position'), styleMap)
