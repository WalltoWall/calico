import clsx from 'clsx'
import { useStyles } from 'react-treat'

import * as styleRefs from './useBackgroundStyles.treat'

export const backgroundRules = {
  backgroundSize: {
    cover: 'cover',
    contain: 'contain',
  },
  backgroundPositionX: {
    left: 'left',
    center: 'center',
    right: 'right',
  },
  backgroundPositionY: {
    top: 'top',
    center: 'center',
    bottom: 'bottom',
  },
  backgroundRepeat: {
    repeat: 'repeat',
    'repeat-x': 'repeat-x',
    'repeat-y': 'repeat-y',
    'no-repeat': 'no-repeat',
  },
} as const

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
  const styles = useStyles(styleRefs)

  return clsx(
    backgroundColor !== undefined && styles.backgroundColor[backgroundColor],
    backgroundSize !== undefined && styles.backgroundSize[backgroundSize],
    backgroundPositionX !== undefined &&
      styles.backgroundPositionX[backgroundPositionX],
    backgroundPositionY !== undefined &&
      styles.backgroundPositionY[backgroundPositionY],
    backgroundRepeat !== undefined && styles.backgroundRepeat[backgroundRepeat],
  )
}
