import { styleMap } from 'treat'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToProperty, mapToResponsive } from './utils'
import { theme } from './theme'

export const alignItemsRules = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  baseline: 'baseline',
}
export const alignItems = pipe(
  alignItemsRules,
  mapToProperty('alignItems'),
  mapToResponsive('mobile', theme),
  styleMap,
)
export const alignItemsTablet = pipe(
  alignItemsRules,
  mapToProperty('alignItems'),
  mapToResponsive('tablet', theme),
  styleMap,
)
export const alignItemsDesktop = pipe(
  alignItemsRules,
  mapToProperty('alignItems'),
  mapToResponsive('desktop', theme),
  styleMap,
)
export const alignItemsDesktopWide = pipe(
  alignItemsRules,
  mapToProperty('alignItems'),
  mapToResponsive('desktopWide', theme),
  styleMap,
)

const alignContentRules = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  baseline: 'baseline',
}
export const alignContent = pipe(
  alignContentRules,
  mapToProperty('alignContent'),
  mapToResponsive('mobile', theme),
  styleMap,
)
export const alignContentTablet = pipe(
  alignContentRules,
  mapToProperty('alignContent'),
  mapToResponsive('tablet', theme),
  styleMap,
)
export const alignContentDesktop = pipe(
  alignContentRules,
  mapToProperty('alignContent'),
  mapToResponsive('desktop', theme),
  styleMap,
)
export const alignContentDesktopWide = pipe(
  alignContentRules,
  mapToProperty('alignContent'),
  mapToResponsive('desktopWide', theme),
  styleMap,
)

const alignSelfRules = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  baseline: 'baseline',
}
export const alignSelf = pipe(
  alignSelfRules,
  mapToProperty('alignSelf'),
  mapToResponsive('mobile', theme),
  styleMap,
)
export const alignSelfTablet = pipe(
  alignSelfRules,
  mapToProperty('alignSelf'),
  mapToResponsive('tablet', theme),
  styleMap,
)
export const alignSelfDesktop = pipe(
  alignSelfRules,
  mapToProperty('alignSelf'),
  mapToResponsive('desktop', theme),
  styleMap,
)
export const alignSelfDesktopWide = pipe(
  alignSelfRules,
  mapToProperty('alignSelf'),
  mapToResponsive('desktopWide', theme),
  styleMap,
)

export const justifyItemsRules = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
}
export const justifyItems = pipe(
  justifyItemsRules,
  mapToProperty('justifyItems'),
  mapToResponsive('mobile', theme),
  styleMap,
)
export const justifyItemsTablet = pipe(
  justifyItemsRules,
  mapToProperty('justifyItems'),
  mapToResponsive('tablet', theme),
  styleMap,
)
export const justifyItemsDesktop = pipe(
  justifyItemsRules,
  mapToProperty('justifyItems'),
  mapToResponsive('desktop', theme),
  styleMap,
)
export const justifyItemsDesktopWide = pipe(
  justifyItemsRules,
  mapToProperty('justifyItems'),
  mapToResponsive('desktopWide', theme),
  styleMap,
)

export const justifyContentRules = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  spaceBetween: 'space-between',
}
export const justifyContent = pipe(
  justifyContentRules,
  mapToProperty('justifyContent'),
  mapToResponsive('mobile', theme),
  styleMap,
)
export const justifyContentTablet = pipe(
  justifyContentRules,
  mapToProperty('justifyContent'),
  mapToResponsive('tablet', theme),
  styleMap,
)
export const justifyContentDesktop = pipe(
  justifyContentRules,
  mapToProperty('justifyContent'),
  mapToResponsive('desktop', theme),
  styleMap,
)
export const justifyContentDesktopWide = pipe(
  justifyContentRules,
  mapToProperty('justifyContent'),
  mapToResponsive('desktopWide', theme),
  styleMap,
)

const justifySelfRules = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
}
export const justifySelf = pipe(
  justifySelfRules,
  mapToProperty('justifySelf'),
  mapToResponsive('mobile', theme),
  styleMap,
)
export const justifySelfTablet = pipe(
  justifySelfRules,
  mapToProperty('justifySelf'),
  mapToResponsive('tablet', theme),
  styleMap,
)
export const justifySelfDesktop = pipe(
  justifySelfRules,
  mapToProperty('justifySelf'),
  mapToResponsive('desktop', theme),
  styleMap,
)
export const justifySelfDesktopWide = pipe(
  justifySelfRules,
  mapToProperty('justifySelf'),
  mapToResponsive('desktopWide', theme),
  styleMap,
)

const flexWrapRules = {
  wrap: 'wrap',
  nowrap: 'nowrap',
}
export const flexWrap = pipe(flexWrapRules, mapToProperty('flexWrap'), styleMap)

const flexDirectionRules = {
  row: 'row',
  rowReverse: 'row-reverse',
  column: 'column',
  columnReverse: 'column-reverse',
}
export const flexDirection = pipe(
  flexDirectionRules,
  mapToProperty('flexDirection'),
  mapToResponsive('mobile', theme),
  styleMap,
)
export const flexDirectionTablet = pipe(
  flexDirectionRules,
  mapToProperty('flexDirection'),
  mapToResponsive('tablet', theme),
  styleMap,
)
export const flexDirectionDesktop = pipe(
  flexDirectionRules,
  mapToProperty('flexDirection'),
  mapToResponsive('desktop', theme),
  styleMap,
)
export const flexDirectionDesktopWide = pipe(
  flexDirectionRules,
  mapToProperty('flexDirection'),
  mapToResponsive('desktopWide', theme),
  styleMap,
)

const flexGrowRules = {
  0: 0,
  1: 1,
}
export const flexGrow = pipe(flexGrowRules, mapToProperty('flexGrow'), styleMap)

const flexShrinkRules = {
  0: 0,
  1: 1,
}
export const flexShrink = pipe(
  flexShrinkRules,
  mapToProperty('flexShrink'),
  styleMap,
)

const flexRules = {
  equal0: '1 1 0px',
}
export const flex = pipe(flexRules, mapToProperty('flex'), styleMap)

const flexBasisRules = {
  0: '0px',
  1: '10%',
  2: '20%',
  3: '30%',
  4: '40%',
  5: '50%',
  6: '60%',
  7: '70%',
  8: '80%',
  auto: 'auto',
}
export const flexBasis = pipe(
  flexBasisRules,
  mapToProperty('flexBasis'),
  styleMap,
)
