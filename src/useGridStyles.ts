import clsx from 'clsx'

import * as styleRefs from './useGridStyles.treat'
import { GridTemplateColumns, GridTemplateRows } from './useGridStyles.treat'
import { ResponsiveSpace } from './useSpaceStyles'
import { resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'

export type UseGridStylesProps = {
  gap?: ResponsiveSpace
  gridAutoFlow?: ResponsiveProp<keyof typeof styleRefs.gridAutoFlow>
  gridTemplateColumns?: ResponsiveProp<GridTemplateColumns>
  gridTemplateRows?: ResponsiveProp<GridTemplateRows>
  gridColumn?: ResponsiveProp<keyof typeof styleRefs.gridColumn>
  gridRow?: ResponsiveProp<keyof typeof styleRefs.gridRow>
}

export const useGridStyles = ({
  gap,
  gridAutoFlow,
  gridTemplateColumns,
  gridTemplateRows,
  gridColumn,
  gridRow,
}: UseGridStylesProps) => {
  return clsx(
    gap !== undefined &&
      resolveResponsiveProp(
        gap,
        styleRefs.gap,
        styleRefs.gapTablet,
        styleRefs.gapDesktop,
        styleRefs.gapDesktopWide,
      ),
    gridAutoFlow !== undefined &&
      resolveResponsiveProp(
        gridAutoFlow,
        styleRefs.gridAutoFlow,
        styleRefs.gridAutoFlowTablet,
        styleRefs.gridAutoFlowDesktop,
        styleRefs.gridAutoFlowDesktopWide,
      ),
    gridTemplateColumns !== undefined &&
      resolveResponsiveProp<string | number>(
        gridTemplateColumns,
        styleRefs.gridTemplateColumns,
        styleRefs.gridTemplateColumnsTablet,
        styleRefs.gridTemplateColumnsDesktop,
        styleRefs.gridTemplateColumnsDesktopWide,
      ),
    gridTemplateRows !== undefined &&
      resolveResponsiveProp<string | number>(
        gridTemplateRows,
        styleRefs.gridTemplateRows,
        styleRefs.gridTemplateRowsTablet,
        styleRefs.gridTemplateRowsDesktop,
        styleRefs.gridTemplateRowsDesktopWide,
      ),
    gridColumn !== undefined &&
      resolveResponsiveProp(
        gridColumn,
        styleRefs.gridColumn,
        styleRefs.gridColumnTablet,
        styleRefs.gridColumnDesktop,
        styleRefs.gridColumnDesktopWide,
      ),
    gridRow !== undefined &&
      resolveResponsiveProp(
        gridRow,
        styleRefs.gridRow,
        styleRefs.gridRowTablet,
        styleRefs.gridRowDesktop,
        styleRefs.gridRowDesktopWide,
      ),
  )
}
