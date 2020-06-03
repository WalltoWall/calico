import clsx from 'clsx'
import { useStyles } from 'react-treat'

import * as styleRefs from './useTransitionStyles.treat'

export const transitionRules = {
  transitionTimingFunction: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1);',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1);',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1);',
  },
} as const

export type UseTransitionStylesProps = {
  transitionDuration?: keyof typeof styleRefs.transitionDuration
  transitionTimingFunction?: keyof typeof styleRefs.transitionTimingFunction
}

export const useTransitionStyles = ({
  transitionDuration,
  transitionTimingFunction,
}: UseTransitionStylesProps) => {
  const styles = useStyles(styleRefs)

  return clsx(
    transitionDuration !== undefined &&
      styles.transitionDuration[transitionDuration],
    transitionTimingFunction !== undefined &&
      styles.transitionTimingFunction[transitionTimingFunction],
  )
}
