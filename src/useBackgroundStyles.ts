import clsx from 'clsx'

import * as styleRefs from './useBackgroundStyles.treat'

export type UseBackgroundStylesProps = {
  backgroundColor?: keyof typeof styleRefs.backgroundColor
  backgroundSize?: keyof typeof styleRefs.backgroundSize
  backgroundPositionX?: keyof typeof styleRefs.backgroundPositionX
  backgroundPositionY?: keyof typeof styleRefs.backgroundPositionY
  backgroundRepeat?: keyof typeof styleRefs.backgroundRepeat
}

export const useBackgroundStyles = ({
  backgroundColor,
  backgroundPositionY,
  backgroundSize,
  backgroundPositionX,
  backgroundRepeat,
}: UseBackgroundStylesProps) => {
  return clsx(
    backgroundColor !== undefined && styleRefs.backgroundColor[backgroundColor],
    backgroundSize !== undefined && styleRefs.backgroundSize[backgroundSize],
    backgroundPositionX !== undefined &&
      styleRefs.backgroundPositionX[backgroundPositionX],
    backgroundPositionY !== undefined &&
      styleRefs.backgroundPositionY[backgroundPositionY],
    backgroundRepeat !== undefined &&
      styleRefs.backgroundRepeat[backgroundRepeat],
  )
}
