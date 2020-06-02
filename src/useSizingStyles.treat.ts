import { styleMap } from 'treat'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToProperty, mapToResponsive } from './utils'

export const width = styleMap((theme) =>
  pipe(
    theme.rules.width,
    mapToProperty('width'),
    mapToResponsive('mobile', theme),
  ),
)
export const widthTablet = styleMap((theme) =>
  pipe(
    theme.rules.width,
    mapToProperty('width'),
    mapToResponsive('tablet', theme),
  ),
)
export const widthDesktop = styleMap((theme) =>
  pipe(
    theme.rules.width,
    mapToProperty('width'),
    mapToResponsive('desktop', theme),
  ),
)
export const widthDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.width,
    mapToProperty('width'),
    mapToResponsive('desktopWide', theme),
  ),
)
export const maxWidth = styleMap((theme) =>
  pipe(
    theme.rules.width,
    mapToProperty('maxWidth'),
    mapToResponsive('mobile', theme),
  ),
)
export const maxWidthTablet = styleMap((theme) =>
  pipe(
    theme.rules.width,
    mapToProperty('maxWidth'),
    mapToResponsive('tablet', theme),
  ),
)
export const maxWidthDesktop = styleMap((theme) =>
  pipe(
    theme.rules.width,
    mapToProperty('maxWidth'),
    mapToResponsive('desktop', theme),
  ),
)
export const maxWidthDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.width,
    mapToProperty('maxWidth'),
    mapToResponsive('desktopWide', theme),
  ),
)

export const height = styleMap((theme) =>
  pipe(
    theme.rules.height,
    mapToProperty('height'),
    mapToResponsive('mobile', theme),
  ),
)
export const heightTablet = styleMap((theme) =>
  pipe(
    theme.rules.height,
    mapToProperty('height'),
    mapToResponsive('tablet', theme),
  ),
)
export const heightDesktop = styleMap((theme) =>
  pipe(
    theme.rules.height,
    mapToProperty('height'),
    mapToResponsive('desktop', theme),
  ),
)
export const heightDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.height,
    mapToProperty('height'),
    mapToResponsive('desktopWide', theme),
  ),
)
