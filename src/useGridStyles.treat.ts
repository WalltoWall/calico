import { styleMap } from 'treat'
import { pipe } from 'fp-ts/es6/pipeable'

import { responsiveSpaceMap, mapToResponsiveProperty } from './utils'

export const gap = styleMap((theme) =>
  responsiveSpaceMap('gap', 'mobile', theme),
)
export const gapTablet = styleMap((theme) =>
  responsiveSpaceMap('gap', 'tablet', theme),
)
export const gapDesktop = styleMap((theme) =>
  responsiveSpaceMap('gap', 'desktop', theme),
)
export const gapDesktopWide = styleMap((theme) =>
  responsiveSpaceMap('gap', 'desktopWide', theme),
)

export const gridAutoFlowRules = {
  row: 'row',
  rowDense: 'row dense',
  column: 'column',
  columnDense: 'column dense',
}
export const gridAutoFlow = styleMap((theme) =>
  pipe(
    gridAutoFlowRules,
    mapToResponsiveProperty('gridAutoFlow', 'mobile', theme),
  ),
)
export const gridAutoFlowTablet = styleMap((theme) =>
  pipe(
    gridAutoFlowRules,
    mapToResponsiveProperty('gridAutoFlow', 'tablet', theme),
  ),
)
export const gridAutoFlowDesktop = styleMap((theme) =>
  pipe(
    gridAutoFlowRules,
    mapToResponsiveProperty('gridAutoFlow', 'desktop', theme),
  ),
)
export const gridAutoFlowDesktopWide = styleMap((theme) =>
  pipe(
    gridAutoFlowRules,
    mapToResponsiveProperty('gridAutoFlow', 'desktopWide', theme),
  ),
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
export const gridTemplateColumns = styleMap((theme) =>
  pipe(
    gridTemplateColumnsRules,
    mapToResponsiveProperty('gridTemplateColumns', 'mobile', theme),
  ),
)
export const gridTemplateColumnsTablet = styleMap((theme) =>
  pipe(
    gridTemplateColumnsRules,
    mapToResponsiveProperty('gridTemplateColumns', 'tablet', theme),
  ),
)
export const gridTemplateColumnsDesktop = styleMap((theme) =>
  pipe(
    gridTemplateColumnsRules,
    mapToResponsiveProperty('gridTemplateColumns', 'desktop', theme),
  ),
)
export const gridTemplateColumnsDesktopWide = styleMap((theme) =>
  pipe(
    gridTemplateColumnsRules,
    mapToResponsiveProperty('gridTemplateColumns', 'desktopWide', theme),
  ),
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
export const gridTemplateRows = styleMap((theme) =>
  pipe(
    gridTemplateRowsRules,
    mapToResponsiveProperty('gridTemplateRows', 'mobile', theme),
  ),
)
export const gridTemplateRowsTablet = styleMap((theme) =>
  pipe(
    gridTemplateRowsRules,
    mapToResponsiveProperty('gridTemplateRows', 'tablet', theme),
  ),
)
export const gridTemplateRowsDesktop = styleMap((theme) =>
  pipe(
    gridTemplateRowsRules,
    mapToResponsiveProperty('gridTemplateRows', 'desktop', theme),
  ),
)
export const gridTemplateRowsDesktopWide = styleMap((theme) =>
  pipe(
    gridTemplateRowsRules,
    mapToResponsiveProperty('gridTemplateRows', 'desktopWide', theme),
  ),
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
export const gridColumn = styleMap((theme) =>
  pipe(gridColumnRules, mapToResponsiveProperty('gridColumn', 'mobile', theme)),
)
export const gridColumnTablet = styleMap((theme) =>
  pipe(gridColumnRules, mapToResponsiveProperty('gridColumn', 'tablet', theme)),
)
export const gridColumnDesktop = styleMap((theme) =>
  pipe(
    gridColumnRules,
    mapToResponsiveProperty('gridColumn', 'desktop', theme),
  ),
)
export const gridColumnDesktopWide = styleMap((theme) =>
  pipe(
    gridColumnRules,
    mapToResponsiveProperty('gridColumn', 'desktopWide', theme),
  ),
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
export const gridRow = styleMap((theme) =>
  pipe(gridRowRules, mapToResponsiveProperty('gridRow', 'mobile', theme)),
)
export const gridRowTablet = styleMap((theme) =>
  pipe(gridRowRules, mapToResponsiveProperty('gridRow', 'tablet', theme)),
)
export const gridRowDesktop = styleMap((theme) =>
  pipe(gridRowRules, mapToResponsiveProperty('gridRow', 'desktop', theme)),
)
export const gridRowDesktopWide = styleMap((theme) =>
  pipe(gridRowRules, mapToResponsiveProperty('gridRow', 'desktopWide', theme)),
)
