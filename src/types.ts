import * as React from 'react'
import { StandardProperties, SimplePseudos } from 'csstype'

export type ResponsiveProp<AtomName> =
  | AtomName
  | readonly [AtomName | null, AtomName | null, ...(AtomName | null)[]]

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
 * Record of identifiers to atoms.
 */
export type Rules = Partial<{ [P in keyof StandardProperties]: Atoms<P> }>

/**
 * Record of identifiers to CSS rules.
 */
export type Atoms<P extends keyof StandardProperties> = Record<
  string | number,
  NonNullable<StandardProperties<string | number>[P]>
>

/**
 * Record of CSS properties to a set of pseudo-classes or pseudo-elements to
 * generate.
 */
export type Pseudos<K extends string | number | symbol> = {
  [P in K]?: PseudosConfig
}

/**
 * Record of pseudo-classes and pseudo-elements where existance of a key
 * determines which classes will be generated.
 */
export type PseudosConfig = readonly SimplePseudos[]
