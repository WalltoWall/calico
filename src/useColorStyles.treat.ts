import { styleMap } from 'treat'
import { pipe } from 'fp-ts/es6/pipeable'

import {
  mapToProperty,
  mapToResponsive,
  mapToResponsiveProperty,
} from './utils'
import { theme } from './theme'

export const backgroundColor = pipe(
  theme.colors,
  mapToProperty('backgroundColor'),
  styleMap,
)

export const borderColor = pipe(
  theme.colors,
  mapToProperty('borderColor'),
  styleMap,
)

export const color = pipe(
  theme.colors,
  mapToProperty('color'),
  mapToResponsive('mobile', theme),
  styleMap,
)
export const colorTablet = pipe(
  theme.colors,
  mapToProperty('color'),
  mapToResponsive('tablet', theme),
  styleMap,
)
export const colorDesktop = pipe(
  theme.colors,
  mapToProperty('color'),
  mapToResponsive('desktop', theme),
  styleMap,
)
export const colorDesktopWide = pipe(
  theme.colors,
  mapToProperty('color'),
  mapToResponsive('desktopWide', theme),
  styleMap,
)

export type Opacity = keyof typeof opacityRules
const opacityRules = {
  0: 0,
  25: '0.25',
  50: '0.50',
  75: '0.75',
  100: '1',
}
export const opacity = pipe(
  opacityRules,
  mapToResponsiveProperty('opacity', 'mobile', theme),
  styleMap,
)
export const opacityTablet = pipe(
  opacityRules,
  mapToResponsiveProperty('opacity', 'tablet', theme),
  styleMap,
)
export const opacityDesktop = pipe(
  opacityRules,
  mapToResponsiveProperty('opacity', 'desktop', theme),
  styleMap,
)
export const opacityDesktopWide = pipe(
  opacityRules,
  mapToResponsiveProperty('opacity', 'desktopWide', theme),
  styleMap,
)
