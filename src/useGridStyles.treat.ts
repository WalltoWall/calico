import { styleMap } from 'treat'
import { pipe } from 'fp-ts/es6/pipeable'

import { responsiveSpaceMap, mapToResponsiveProperty } from './utils'
import { theme } from './theme'

export const gap = styleMap(responsiveSpaceMap('gap', 'mobile', theme))
export const gapTablet = styleMap(responsiveSpaceMap('gap', 'tablet', theme))
export const gapDesktop = styleMap(responsiveSpaceMap('gap', 'desktop', theme))
export const gapDesktopWide = styleMap(
  responsiveSpaceMap('gap', 'desktopWide', theme),
)

export const gridAutoFlowRules = {
  row: 'row',
  rowDense: 'row dense',
  column: 'column',
  columnDense: 'column dense',
}
export const gridAutoFlow = pipe(
  gridAutoFlowRules,
  mapToResponsiveProperty('gridAutoFlow', 'mobile', theme),
  styleMap,
)
export const gridAutoFlowTablet = pipe(
  gridAutoFlowRules,
  mapToResponsiveProperty('gridAutoFlow', 'tablet', theme),
  styleMap,
)
export const gridAutoFlowDesktop = pipe(
  gridAutoFlowRules,
  mapToResponsiveProperty('gridAutoFlow', 'desktop', theme),
  styleMap,
)
export const gridAutoFlowDesktopWide = pipe(
  gridAutoFlowRules,
  mapToResponsiveProperty('gridAutoFlow', 'desktopWide', theme),
  styleMap,
)

export type GridTemplateColumns = keyof typeof gridTemplateColumnsRules
const gridTemplateColumnsRules = {
  1: 'repeat(1, minmax(0, 1fr))',
  2: 'repeat(2, minmax(0, 1fr))',
  3: 'repeat(3, minmax(0, 1fr))',
  4: 'repeat(4, minmax(0, 1fr))',
  5: 'repeat(5, minmax(0, 1fr))',
  6: 'repeat(6, minmax(0, 1fr))',
  7: 'repeat(7, minmax(0, 1fr))',
  8: 'repeat(8, minmax(0, 1fr))',
  9: 'repeat(9, minmax(0, 1fr))',
  10: 'repeat(10, minmax(0, 1fr))',
  11: 'repeat(11, minmax(0, 1fr))',
  12: 'repeat(12, minmax(0, 1fr))',
  none: 'none',
}
export const gridTemplateColumns = pipe(
  gridTemplateColumnsRules,
  mapToResponsiveProperty('gridTemplateColumns', 'mobile', theme),
  styleMap,
)
export const gridTemplateColumnsTablet = pipe(
  gridTemplateColumnsRules,
  mapToResponsiveProperty('gridTemplateColumns', 'tablet', theme),
  styleMap,
)
export const gridTemplateColumnsDesktop = pipe(
  gridTemplateColumnsRules,
  mapToResponsiveProperty('gridTemplateColumns', 'desktop', theme),
  styleMap,
)
export const gridTemplateColumnsDesktopWide = pipe(
  gridTemplateColumnsRules,
  mapToResponsiveProperty('gridTemplateColumns', 'desktopWide', theme),
  styleMap,
)

export type GridTemplateRows = keyof typeof gridTemplateRowsRules
const gridTemplateRowsRules = {
  1: 'repeat(1, minmax(0, 1fr))',
  2: 'repeat(2, minmax(0, 1fr))',
  3: 'repeat(3, minmax(0, 1fr))',
  4: 'repeat(4, minmax(0, 1fr))',
  5: 'repeat(5, minmax(0, 1fr))',
  6: 'repeat(6, minmax(0, 1fr))',
  none: 'none',
}
export const gridTemplateRows = pipe(
  gridTemplateRowsRules,
  mapToResponsiveProperty('gridTemplateRows', 'mobile', theme),
  styleMap,
)
export const gridTemplateRowsTablet = pipe(
  gridTemplateRowsRules,
  mapToResponsiveProperty('gridTemplateRows', 'tablet', theme),
  styleMap,
)
export const gridTemplateRowsDesktop = pipe(
  gridTemplateRowsRules,
  mapToResponsiveProperty('gridTemplateRows', 'desktop', theme),
  styleMap,
)
export const gridTemplateRowsDesktopWide = pipe(
  gridTemplateRowsRules,
  mapToResponsiveProperty('gridTemplateRows', 'desktopWide', theme),
  styleMap,
)

const gridColumnRules = {
  auto: 'auto',
  'span-1': 'span 1 / span 1',
  'span-2': 'span 2 / span 2',
  'span-3': 'span 3 / span 3',
  'span-4': 'span 4 / span 4',
  'span-5': 'span 5 / span 5',
  'span-6': 'span 6 / span 6',
  'span-7': 'span 7 / span 7',
  'span-8': 'span 8 / span 8',
  'span-9': 'span 9 / span 9',
  'span-10': 'span 10 / span 10',
  'span-11': 'span 11 / span 11',
  'span-12': 'span 12 / span 12',
}
export const gridColumn = pipe(
  gridColumnRules,
  mapToResponsiveProperty('gridColumn', 'mobile', theme),
  styleMap,
)
export const gridColumnTablet = pipe(
  gridColumnRules,
  mapToResponsiveProperty('gridColumn', 'tablet', theme),
  styleMap,
)
export const gridColumnDesktop = pipe(
  gridColumnRules,
  mapToResponsiveProperty('gridColumn', 'desktop', theme),
  styleMap,
)
export const gridColumnDesktopWide = pipe(
  gridColumnRules,
  mapToResponsiveProperty('gridColumn', 'desktopWide', theme),
  styleMap,
)

export const gridRowRules = {
  auto: 'auto',
  'span-1': 'span 1 / span 1',
  'span-2': 'span 2 / span 2',
  'span-3': 'span 3 / span 3',
  'span-4': 'span 4 / span 4',
  'span-5': 'span 5 / span 5',
  'span-6': 'span 6 / span 6',
}
export const gridRow = pipe(
  gridRowRules,
  mapToResponsiveProperty('gridRow', 'mobile', theme),
  styleMap,
)
export const gridRowTablet = pipe(
  gridRowRules,
  mapToResponsiveProperty('gridRow', 'tablet', theme),
  styleMap,
)
export const gridRowDesktop = pipe(
  gridRowRules,
  mapToResponsiveProperty('gridRow', 'desktop', theme),
  styleMap,
)
export const gridRowDesktopWide = pipe(
  gridRowRules,
  mapToResponsiveProperty('gridRow', 'desktopWide', theme),
  styleMap,
)
