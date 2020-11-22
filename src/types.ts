import * as React from 'react'
import { StandardProperties, SimplePseudos } from 'csstype'

export type ResponsiveProp<AtomName> =
  | AtomName
  | [AtomName | null, AtomName | null, ...(AtomName | null)[]]

export type SafeReactHTMLAttributes<
  E = Element
> = React.AllHTMLAttributes<E> & {
  loading?: string
}

/**
 * Set of media queries derived from a set of breakpoints.
 */
export type MediaQueries<TBreakpoints extends readonly string[]> = {
  [P in keyof TBreakpoints]: string
}

/**
 * Record of identifiers to CSS rules.
 */
export type Rules = Partial<Record<keyof StandardProperties, unknown>> &
  Partial<
    {
      [P in keyof StandardProperties]: Record<
        string | number,
        NonNullable<StandardProperties<string | number>[P]>
      >
    }
  >

/**
 * Record of CSS properties to a set of pseudo-classes or pseudo-elements to
 * generate.
 */
export type Pseudos<K extends string | number | symbol> = Partial<
  Record<K, Partial<Record<SimplePseudos, true>>>
>
