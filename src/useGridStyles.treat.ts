import { styleMap } from 'treat'
import * as O from 'fp-ts/es6/Option'
import * as R from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'

import { responsiveSpaceMap, mapToProperty, mapToResponsive } from './utils'

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
    O.fromNullable,
    O.map(mapToProperty('gridAutoFlow')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const gridAutoFlowTablet = styleMap((theme) =>
  pipe(
    theme.rules.gridAutoFlow,
    O.fromNullable,
    O.map(mapToProperty('gridAutoFlow')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const gridAutoFlowDesktop = styleMap((theme) =>
  pipe(
    theme.rules.gridAutoFlow,
    O.fromNullable,
    O.map(mapToProperty('gridAutoFlow')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const gridAutoFlowDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.gridAutoFlow,
    O.fromNullable,
    O.map(mapToProperty('gridAutoFlow')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)

export const gridTemplateColumns = styleMap((theme) =>
  pipe(
    theme.rules.gridTemplateColumns,
    O.fromNullable,
    O.map(mapToProperty('gridTemplateColumns')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const gridTemplateColumnsTablet = styleMap((theme) =>
  pipe(
    theme.rules.gridTemplateColumns,
    O.fromNullable,
    O.map(mapToProperty('gridTemplateColumns')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const gridTemplateColumnsDesktop = styleMap((theme) =>
  pipe(
    theme.rules.gridTemplateColumns,
    O.fromNullable,
    O.map(mapToProperty('gridTemplateColumns')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const gridTemplateColumnsDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.gridTemplateColumns,
    O.fromNullable,
    O.map(mapToProperty('gridTemplateColumns')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)

export const gridTemplateRows = styleMap((theme) =>
  pipe(
    theme.rules.gridTemplateRows,
    O.fromNullable,
    O.map(mapToProperty('gridTemplateRows')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const gridTemplateRowsTablet = styleMap((theme) =>
  pipe(
    theme.rules.gridTemplateRows,
    O.fromNullable,
    O.map(mapToProperty('gridTemplateRows')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const gridTemplateRowsDesktop = styleMap((theme) =>
  pipe(
    theme.rules.gridTemplateRows,
    O.fromNullable,
    O.map(mapToProperty('gridTemplateRows')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const gridTemplateRowsDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.gridTemplateRows,
    O.fromNullable,
    O.map(mapToProperty('gridTemplateRows')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)

export const gridColumn = styleMap((theme) =>
  pipe(
    theme.rules.gridColumn,
    O.fromNullable,
    O.map(mapToProperty('gridColumn')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const gridColumnTablet = styleMap((theme) =>
  pipe(
    theme.rules.gridColumn,
    O.fromNullable,
    O.map(mapToProperty('gridColumn')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const gridColumnDesktop = styleMap((theme) =>
  pipe(
    theme.rules.gridColumn,
    O.fromNullable,
    O.map(mapToProperty('gridColumn')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const gridColumnDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.gridColumn,
    O.fromNullable,
    O.map(mapToProperty('gridColumn')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)

export const gridRow = styleMap((theme) =>
  pipe(
    theme.rules.gridRow,
    O.fromNullable,
    O.map(mapToProperty('gridRow')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const gridRowTablet = styleMap((theme) =>
  pipe(
    theme.rules.gridRow,
    O.fromNullable,
    O.map(mapToProperty('gridRow')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const gridRowDesktop = styleMap((theme) =>
  pipe(
    theme.rules.gridRow,
    O.fromNullable,
    O.map(mapToProperty('gridRow')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const gridRowDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.gridRow,
    O.fromNullable,
    O.map(mapToProperty('gridRow')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
