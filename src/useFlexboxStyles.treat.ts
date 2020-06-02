import { styleMap } from 'treat'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToProperty, mapToResponsive } from './utils'

export const alignItems = styleMap((theme) =>
  pipe(
    theme.rules.alignItems,
    mapToProperty('alignItems'),
    mapToResponsive('mobile', theme),
  ),
)
export const alignItemsTablet = styleMap((theme) =>
  pipe(
    theme.rules.alignItems,
    mapToProperty('alignItems'),
    mapToResponsive('tablet', theme),
  ),
)
export const alignItemsDesktop = styleMap((theme) =>
  pipe(
    theme.rules.alignItems,
    mapToProperty('alignItems'),
    mapToResponsive('desktop', theme),
  ),
)
export const alignItemsDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.alignItems,
    mapToProperty('alignItems'),
    mapToResponsive('desktopWide', theme),
  ),
)

export const alignContent = styleMap((theme) =>
  pipe(
    theme.rules.alignContent,
    mapToProperty('alignContent'),
    mapToResponsive('mobile', theme),
  ),
)
export const alignContentTablet = styleMap((theme) =>
  pipe(
    theme.rules.alignContent,
    mapToProperty('alignContent'),
    mapToResponsive('tablet', theme),
  ),
)
export const alignContentDesktop = styleMap((theme) =>
  pipe(
    theme.rules.alignContent,
    mapToProperty('alignContent'),
    mapToResponsive('desktop', theme),
  ),
)
export const alignContentDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.alignContent,
    mapToProperty('alignContent'),
    mapToResponsive('desktopWide', theme),
  ),
)

export const alignSelf = styleMap((theme) =>
  pipe(
    theme.rules.alignSelf,
    mapToProperty('alignSelf'),
    mapToResponsive('mobile', theme),
  ),
)
export const alignSelfTablet = styleMap((theme) =>
  pipe(
    theme.rules.alignSelf,
    mapToProperty('alignSelf'),
    mapToResponsive('tablet', theme),
  ),
)
export const alignSelfDesktop = styleMap((theme) =>
  pipe(
    theme.rules.alignSelf,
    mapToProperty('alignSelf'),
    mapToResponsive('desktop', theme),
  ),
)
export const alignSelfDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.alignSelf,
    mapToProperty('alignSelf'),
    mapToResponsive('desktopWide', theme),
  ),
)

export const justifyItems = styleMap((theme) =>
  pipe(
    theme.rules.justifyItems,
    mapToProperty('justifyItems'),
    mapToResponsive('mobile', theme),
  ),
)
export const justifyItemsTablet = styleMap((theme) =>
  pipe(
    theme.rules.justifyItems,
    mapToProperty('justifyItems'),
    mapToResponsive('tablet', theme),
  ),
)
export const justifyItemsDesktop = styleMap((theme) =>
  pipe(
    theme.rules.justifyItems,
    mapToProperty('justifyItems'),
    mapToResponsive('desktop', theme),
  ),
)
export const justifyItemsDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.justifyItems,
    mapToProperty('justifyItems'),
    mapToResponsive('desktopWide', theme),
  ),
)

export const justifyContent = styleMap((theme) =>
  pipe(
    theme.rules.justifyContent,
    mapToProperty('justifyContent'),
    mapToResponsive('mobile', theme),
  ),
)
export const justifyContentTablet = styleMap((theme) =>
  pipe(
    theme.rules.justifyContent,
    mapToProperty('justifyContent'),
    mapToResponsive('tablet', theme),
  ),
)
export const justifyContentDesktop = styleMap((theme) =>
  pipe(
    theme.rules.justifyContent,
    mapToProperty('justifyContent'),
    mapToResponsive('desktop', theme),
  ),
)
export const justifyContentDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.justifyContent,
    mapToProperty('justifyContent'),
    mapToResponsive('desktopWide', theme),
  ),
)

export const justifySelf = styleMap((theme) =>
  pipe(
    theme.rules.justifySelf,
    mapToProperty('justifySelf'),
    mapToResponsive('mobile', theme),
  ),
)
export const justifySelfTablet = styleMap((theme) =>
  pipe(
    theme.rules.justifySelf,
    mapToProperty('justifySelf'),
    mapToResponsive('tablet', theme),
  ),
)
export const justifySelfDesktop = styleMap((theme) =>
  pipe(
    theme.rules.justifySelf,
    mapToProperty('justifySelf'),
    mapToResponsive('desktop', theme),
  ),
)
export const justifySelfDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.justifySelf,
    mapToProperty('justifySelf'),
    mapToResponsive('desktopWide', theme),
  ),
)

export const flexWrap = styleMap((theme) =>
  pipe(theme.rules.flexWrap, mapToProperty('flexWrap')),
)

export const flexDirection = styleMap((theme) =>
  pipe(
    theme.rules.flexDirection,
    mapToProperty('flexDirection'),
    mapToResponsive('mobile', theme),
  ),
)
export const flexDirectionTablet = styleMap((theme) =>
  pipe(
    theme.rules.flexDirection,
    mapToProperty('flexDirection'),
    mapToResponsive('tablet', theme),
  ),
)
export const flexDirectionDesktop = styleMap((theme) =>
  pipe(
    theme.rules.flexDirection,
    mapToProperty('flexDirection'),
    mapToResponsive('desktop', theme),
  ),
)
export const flexDirectionDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.flexDirection,
    mapToProperty('flexDirection'),
    mapToResponsive('desktopWide', theme),
  ),
)

export const flexGrow = styleMap((theme) =>
  pipe(theme.rules.flexGrow, mapToProperty('flexGrow')),
)

export const flexShrink = styleMap((theme) =>
  pipe(theme.rules.flexShrink, mapToProperty('flexShrink')),
)

export const flex = styleMap((theme) =>
  pipe(theme.rules.flex, mapToProperty('flex')),
)

export const flexBasis = styleMap((theme) =>
  pipe(theme.rules.flexBasis, mapToProperty('flexBasis')),
)
