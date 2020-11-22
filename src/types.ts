import * as React from 'react'
import { StandardProperties } from 'csstype'

// type Prepend<I, T extends unknown[]> = [I, ...T]
// type Append<I, T extends unknown[]> = [...T, I]

type ResponsivePropElements<AtomName> = (AtomName | null)[]

export type ResponsiveProp<AtomName> =
  | AtomName
  // | Append<AtomName, Prepend<AtomName | null, (AtomName | null)[]>>
  | [
      AtomName | null,
      AtomName | null,
      ...ResponsivePropElements<AtomName>,
      AtomName,
    ]

export type SafeReactHTMLAttributes<E = Element> = React.AllHTMLAttributes<
  E
> & {
  loading?: string
}

/**
 * Record of identifiers to CSS rules.
 */
export type Rules<K extends keyof StandardProperties> = Partial<
  {
    [P in K]: Record<
      string | number,
      NonNullable<StandardProperties<string | number>[P]>
    >
  }
>

/**
 * Record of CSS properties to a set of variants to generate. Variants include
 * pseudo-classes such as `:hover` and `:focus`.
 */
export type Variants<K extends keyof StandardProperties> = Partial<
  Record<K, Partial<Record<'hover' | 'focus', true>>>
>
