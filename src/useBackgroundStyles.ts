import clsx from 'clsx'

import * as styleRefs from './useBackgroundStyles.treat'

export type UseBackgroundStylesProps = {
  backgroundColor?: keyof typeof styleRefs.backgroundColor
}

export const useBackgroundStyles = ({
  backgroundColor,
}: UseBackgroundStylesProps) => {
  return clsx(
    backgroundColor !== undefined && styleRefs.backgroundColor[backgroundColor],
  )
}
