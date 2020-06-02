import { styleMap } from 'treat'
import * as O from 'fp-ts/es6/Option'
import * as R from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToProperty, mapToResponsive } from './utils'

export const alignItems = styleMap((theme) =>
  pipe(
    theme.rules.alignItems,
    O.fromNullable,
    O.map(mapToProperty('alignItems')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const alignItemsTablet = styleMap((theme) =>
  pipe(
    theme.rules.alignItems,
    O.fromNullable,
    O.map(mapToProperty('alignItems')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const alignItemsDesktop = styleMap((theme) =>
  pipe(
    theme.rules.alignItems,
    O.fromNullable,
    O.map(mapToProperty('alignItems')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const alignItemsDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.alignItems,
    O.fromNullable,
    O.map(mapToProperty('alignItems')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)

export const alignContent = styleMap((theme) =>
  pipe(
    theme.rules.alignContent,
    O.fromNullable,
    O.map(mapToProperty('alignContent')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const alignContentTablet = styleMap((theme) =>
  pipe(
    theme.rules.alignContent,
    O.fromNullable,
    O.map(mapToProperty('alignContent')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const alignContentDesktop = styleMap((theme) =>
  pipe(
    theme.rules.alignContent,
    O.fromNullable,
    O.map(mapToProperty('alignContent')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const alignContentDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.alignContent,
    O.fromNullable,
    O.map(mapToProperty('alignContent')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)

export const alignSelf = styleMap((theme) =>
  pipe(
    theme.rules.alignSelf,
    O.fromNullable,
    O.map(mapToProperty('alignSelf')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const alignSelfTablet = styleMap((theme) =>
  pipe(
    theme.rules.alignSelf,
    O.fromNullable,
    O.map(mapToProperty('alignSelf')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const alignSelfDesktop = styleMap((theme) =>
  pipe(
    theme.rules.alignSelf,
    O.fromNullable,
    O.map(mapToProperty('alignSelf')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const alignSelfDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.alignSelf,
    O.fromNullable,
    O.map(mapToProperty('alignSelf')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)

export const justifyItems = styleMap((theme) =>
  pipe(
    theme.rules.justifyItems,
    O.fromNullable,
    O.map(mapToProperty('justifyItems')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const justifyItemsTablet = styleMap((theme) =>
  pipe(
    theme.rules.justifyItems,
    O.fromNullable,
    O.map(mapToProperty('justifyItems')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const justifyItemsDesktop = styleMap((theme) =>
  pipe(
    theme.rules.justifyItems,
    O.fromNullable,
    O.map(mapToProperty('justifyItems')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const justifyItemsDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.justifyItems,
    O.fromNullable,
    O.map(mapToProperty('justifyItems')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)

export const justifyContent = styleMap((theme) =>
  pipe(
    theme.rules.justifyContent,
    O.fromNullable,
    O.map(mapToProperty('justifyContent')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const justifyContentTablet = styleMap((theme) =>
  pipe(
    theme.rules.justifyContent,
    O.fromNullable,
    O.map(mapToProperty('justifyContent')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const justifyContentDesktop = styleMap((theme) =>
  pipe(
    theme.rules.justifyContent,
    O.fromNullable,
    O.map(mapToProperty('justifyContent')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const justifyContentDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.justifyContent,
    O.fromNullable,
    O.map(mapToProperty('justifyContent')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)

export const justifySelf = styleMap((theme) =>
  pipe(
    theme.rules.justifySelf,
    O.fromNullable,
    O.map(mapToProperty('justifySelf')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const justifySelfTablet = styleMap((theme) =>
  pipe(
    theme.rules.justifySelf,
    O.fromNullable,
    O.map(mapToProperty('justifySelf')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const justifySelfDesktop = styleMap((theme) =>
  pipe(
    theme.rules.justifySelf,
    O.fromNullable,
    O.map(mapToProperty('justifySelf')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const justifySelfDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.justifySelf,
    O.fromNullable,
    O.map(mapToProperty('justifySelf')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)

export const flexWrap = styleMap((theme) =>
  pipe(
    theme.rules.flexWrap,
    O.fromNullable,
    O.map(mapToProperty('flexWrap')),
    O.getOrElseW(() => R.empty),
  ),
)

export const flexDirection = styleMap((theme) =>
  pipe(
    theme.rules.flexDirection,
    O.fromNullable,
    O.map(mapToProperty('flexDirection')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const flexDirectionTablet = styleMap((theme) =>
  pipe(
    theme.rules.flexDirection,
    O.fromNullable,
    O.map(mapToProperty('flexDirection')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const flexDirectionDesktop = styleMap((theme) =>
  pipe(
    theme.rules.flexDirection,
    O.fromNullable,
    O.map(mapToProperty('flexDirection')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const flexDirectionDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.flexDirection,
    O.fromNullable,
    O.map(mapToProperty('flexDirection')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)

export const flexGrow = styleMap((theme) =>
  pipe(
    theme.rules.flexGrow,
    O.fromNullable,
    O.map(mapToProperty('flexGrow')),
    O.getOrElseW(() => R.empty),
  ),
)

export const flexShrink = styleMap((theme) =>
  pipe(
    theme.rules.flexShrink,
    O.fromNullable,
    O.map(mapToProperty('flexShrink')),
    O.getOrElseW(() => R.empty),
  ),
)

export const flex = styleMap((theme) =>
  pipe(
    theme.rules.flex,
    O.fromNullable,
    O.map(mapToProperty('flex')),
    O.getOrElseW(() => R.empty),
  ),
)

export const flexBasis = styleMap((theme) =>
  pipe(
    theme.rules.flexBasis,
    O.fromNullable,
    O.map(mapToProperty('flexBasis')),
    O.getOrElseW(() => R.empty),
  ),
)
