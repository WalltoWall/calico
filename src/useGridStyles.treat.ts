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

export const gridAutoFlow = styleMap((theme) =>
  pipe(
    theme.rules.gridAutoFlow,
    mapToResponsiveProperty('gridAutoFlow', 'mobile', theme),
  ),
)
export const gridAutoFlowTablet = styleMap((theme) =>
  pipe(
    theme.rules.gridAutoFlow,
    mapToResponsiveProperty('gridAutoFlow', 'tablet', theme),
  ),
)
export const gridAutoFlowDesktop = styleMap((theme) =>
  pipe(
    theme.rules.gridAutoFlow,
    mapToResponsiveProperty('gridAutoFlow', 'desktop', theme),
  ),
)
export const gridAutoFlowDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.gridAutoFlow,
    mapToResponsiveProperty('gridAutoFlow', 'desktopWide', theme),
  ),
)

export const gridTemplateColumns = styleMap((theme) =>
  pipe(
    theme.rules.gridAutoColumns,
    mapToResponsiveProperty('gridTemplateColumns', 'mobile', theme),
  ),
)
export const gridTemplateColumnsTablet = styleMap((theme) =>
  pipe(
    theme.rules.gridAutoColumns,
    mapToResponsiveProperty('gridTemplateColumns', 'tablet', theme),
  ),
)
export const gridTemplateColumnsDesktop = styleMap((theme) =>
  pipe(
    theme.rules.gridAutoColumns,
    mapToResponsiveProperty('gridTemplateColumns', 'desktop', theme),
  ),
)
export const gridTemplateColumnsDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.gridAutoColumns,
    mapToResponsiveProperty('gridTemplateColumns', 'desktopWide', theme),
  ),
)

export type GridTemplateRows = keyof typeof gridTemplateRowsRules
export const gridTemplateRows = styleMap((theme) =>
  pipe(
    theme.rules.gridTemplateRows,
    mapToResponsiveProperty('gridTemplateRows', 'mobile', theme),
  ),
)
export const gridTemplateRowsTablet = styleMap((theme) =>
  pipe(
    theme.rules.gridTemplateRows,
    mapToResponsiveProperty('gridTemplateRows', 'tablet', theme),
  ),
)
export const gridTemplateRowsDesktop = styleMap((theme) =>
  pipe(
    theme.rules.gridTemplateRows,
    mapToResponsiveProperty('gridTemplateRows', 'desktop', theme),
  ),
)
export const gridTemplateRowsDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.gridTemplateRows,
    mapToResponsiveProperty('gridTemplateRows', 'desktopWide', theme),
  ),
)

export const gridColumn = styleMap((theme) =>
  pipe(
    theme.rules.gridColumn,
    mapToResponsiveProperty('gridColumn', 'mobile', theme),
  ),
)
export const gridColumnTablet = styleMap((theme) =>
  pipe(
    theme.rules.gridColumn,
    mapToResponsiveProperty('gridColumn', 'tablet', theme),
  ),
)
export const gridColumnDesktop = styleMap((theme) =>
  pipe(
    theme.rules.gridColumn,
    mapToResponsiveProperty('gridColumn', 'desktop', theme),
  ),
)
export const gridColumnDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.gridColumn,
    mapToResponsiveProperty('gridColumn', 'desktopWide', theme),
  ),
)

export const gridRow = styleMap((theme) =>
  pipe(
    theme.rules.gridRow,
    mapToResponsiveProperty('gridRow', 'mobile', theme),
  ),
)
export const gridRowTablet = styleMap((theme) =>
  pipe(
    theme.rules.gridRow,
    mapToResponsiveProperty('gridRow', 'tablet', theme),
  ),
)
export const gridRowDesktop = styleMap((theme) =>
  pipe(
    theme.rules.gridRow,
    mapToResponsiveProperty('gridRow', 'desktop', theme),
  ),
)
export const gridRowDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.gridRow,
    mapToResponsiveProperty('gridRow', 'desktopWide', theme),
  ),
)
