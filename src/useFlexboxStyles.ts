import clsx from 'clsx'

import * as styleRefs from './useFlexboxStyles.treat'
import { resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'

export const flexboxRules = {
  alignItems: {
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
    baseline: 'baseline',
  },
  alignContent: {
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
    baseline: 'baseline',
  },
  alignSelf: {
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
    baseline: 'baseline',
  },
  justifyItems: {
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
  },
  justifyContent: {
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
    spaceBetween: 'space-between',
  },
  justifySelf: {
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
  },
  flexWrap: {
    wrap: 'wrap',
    nowrap: 'nowrap',
  },
  flexDirection: {
    row: 'row',
    rowReverse: 'row-reverse',
    column: 'column',
    columnReverse: 'column-reverse',
  },
  flexGrow: {
    0: 0,
    1: 1,
  },
  flexShrink: {
    0: 0,
    1: 1,
  },
  flex: {
    equal0: '1 1 0px',
  },
  flexBasis: {
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
  },
}

export type UseFlexboxStylesProps = {
  alignItems?: ResponsiveProp<keyof typeof styleRefs.alignItems>
  alignContent?: ResponsiveProp<keyof typeof styleRefs.alignContent>
  alignSelf?: ResponsiveProp<keyof typeof styleRefs.alignSelf>
  justifyItems?: ResponsiveProp<keyof typeof styleRefs.justifyItems>
  justifyContent?: ResponsiveProp<keyof typeof styleRefs.justifyContent>
  justifySelf?: ResponsiveProp<keyof typeof styleRefs.justifySelf>
  flexWrap?: keyof typeof styleRefs.flexWrap
  flexDirection?: ResponsiveProp<keyof typeof styleRefs.flexDirection>
  flexGrow?: keyof typeof styleRefs.flexGrow
  flexShrink?: keyof typeof styleRefs.flexShrink
  flex?: keyof typeof styleRefs.flex
  flexBasis?: keyof typeof styleRefs.flexBasis
}

export const useFlexboxStyles = ({
  alignItems,
  alignContent,
  alignSelf,
  justifyItems,
  justifyContent,
  justifySelf,
  flexWrap,
  flexDirection,
  flexGrow,
  flexShrink,
  flex,
  flexBasis,
}: UseFlexboxStylesProps) => {
  return clsx(
    alignItems !== undefined &&
      resolveResponsiveProp(
        alignItems,
        styleRefs.alignItems,
        styleRefs.alignItemsTablet,
        styleRefs.alignItemsDesktop,
        styleRefs.alignItemsDesktopWide,
      ),
    alignContent !== undefined &&
      resolveResponsiveProp(
        alignContent,
        styleRefs.alignContent,
        styleRefs.alignContentTablet,
        styleRefs.alignContentDesktop,
        styleRefs.alignContentDesktopWide,
      ),
    alignSelf !== undefined &&
      resolveResponsiveProp(
        alignSelf,
        styleRefs.alignSelf,
        styleRefs.alignSelfTablet,
        styleRefs.alignSelfDesktop,
        styleRefs.alignSelfDesktopWide,
      ),
    justifyItems !== undefined &&
      resolveResponsiveProp(
        justifyItems,
        styleRefs.justifyItems,
        styleRefs.justifyItemsTablet,
        styleRefs.justifyItemsDesktop,
        styleRefs.justifyItemsDesktopWide,
      ),
    justifyContent !== undefined &&
      resolveResponsiveProp(
        justifyContent,
        styleRefs.justifyContent,
        styleRefs.justifyContentTablet,
        styleRefs.justifyContentDesktop,
        styleRefs.justifyContentDesktopWide,
      ),
    justifySelf !== undefined &&
      resolveResponsiveProp(
        justifySelf,
        styleRefs.justifySelf,
        styleRefs.justifySelfTablet,
        styleRefs.justifySelfDesktop,
        styleRefs.justifySelfDesktopWide,
      ),
    flexWrap !== undefined && styleRefs.flexWrap[flexWrap],
    flexDirection !== undefined &&
      resolveResponsiveProp(
        flexDirection,
        styleRefs.flexDirection,
        styleRefs.flexDirectionTablet,
        styleRefs.flexDirectionDesktop,
        styleRefs.flexDirectionDesktopWide,
      ),
    flexGrow !== undefined && styleRefs.flexGrow[flexGrow],
    flexShrink !== undefined && styleRefs.flexShrink[flexShrink],
    flex !== undefined && styleRefs.flex[flex],
    flexBasis !== undefined && styleRefs.flexBasis[flexBasis],
  )
}
