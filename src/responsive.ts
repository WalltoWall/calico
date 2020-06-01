import { Style } from 'treat'
import { Semigroup } from 'fp-ts/es6/Semigroup'

export type ResponsiveProp<AtomName> =
  | AtomName
  | Readonly<[AtomName, AtomName]>
  | Readonly<[AtomName, AtomName, AtomName]>
  | Readonly<[AtomName, AtomName, AtomName, AtomName]>

/**
 * Normalizes a responsive prop value to a tuple with values for all
 * breakpoints. If the prop value contains less values than there are
 * breakpoints, the right-most element is repeated (i.e. it is expanded).
 *
 * @param value Reponsive prop value.
 *
 * @returns A tuple containing prop values for all breakpoints.
 */
export const normalizeResponsiveProp = <Keys extends string | number | boolean>(
  value: ResponsiveProp<Keys>,
): Readonly<[Keys, Keys, Keys, Keys]> => {
  if (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
    return [value, value, value, value]

  if ('length' in value)
    switch (value.length) {
      case 2:
        return [value[0], value[1], value[1], value[1]]

      case 3:
        return [value[0], value[1], value[2], value[2]]

      case 4:
        return value
    }

  throw new Error(`Invalid responsive prop value: ${JSON.stringify(value)}`)
}

/**
 * Resolves a responsive prop value to a class list picked from the provided
 * breakpoint-specific atoms.
 *
 * @param value Responsive prop value.
 * @param mobileAtoms Atoms for the mobile breakpoint.
 * @param tabletAtoms Atoms for the tablet breakpoint.
 * @param desktopAtoms Atoms for the desktop breakpoint.
 * @param desktopWideAtoms Atoms for the desktopWide breakpoint.
 *
 * @returns A stringified set of classes for the provided prop value.
 */
export const resolveResponsiveProp = <Keys extends string | number>(
  value: ResponsiveProp<Keys>,
  mobileAtoms: Record<Keys, string | number>,
  tabletAtoms: Record<Keys, string | number>,
  desktopAtoms: Record<Keys, string | number>,
  desktopWideAtoms: Record<Keys, string | number>,
) => {
  if (typeof value === 'string') return mobileAtoms[value]

  const [
    mobileValue,
    tabletValue,
    desktopValue,
    desktopWideValue,
  ] = normalizeResponsiveProp(value)

  return (
    mobileAtoms[mobileValue] +
    (tabletValue !== mobileValue ? ' ' + tabletAtoms[tabletValue] : '') +
    (desktopValue !== tabletValue ? ' ' + desktopAtoms[desktopValue] : '') +
    (desktopWideValue !== desktopValue
      ? ' ' + desktopWideAtoms[desktopWideValue]
      : '')
  )
}

export const semigroupResponsiveStyle: Semigroup<Style> = {
  concat: (x, y) => ({
    ...x,
    ...y,
    '@media': {
      ...y['@media'],
      ...x['@media'],
    },
  }),
}
