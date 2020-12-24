import * as React from 'react'
import { StandardProperties, SimplePseudos } from 'csstype'

export type RecordValue<T> = T extends Record<any, infer U> ? U : T
export type Mutable<T> = { -readonly [P in keyof T]: T[P] }
export type UnwrappedArray<T> = T extends (infer U)[] ? U : T

/**
 * A set of atoms optionally represented as a responsive values.
 */
export type ResponsiveProp<AtomName> =
  | AtomName
  | readonly [AtomName | null, AtomName | null, ...(AtomName | null)[]]

export type SafeReactHTMLAttributes<
  E = React.ElementType
> = React.AllHTMLAttributes<E> & {
  loading?: string
}

/**
 * Record of identifiers to media query minimum widths used as breakpoints.
 */
export type Breakpoints<K extends string> = Record<K, string>

/**
 * Record of identifiers to media queries.
 */
export type MediaQueries<K extends string> = Record<K, string>

/**
 * Record of identifiers to atoms.
 */
export type Rules<K extends keyof StandardProperties> = { [P in K]?: Atoms<P> }

/**
 * Record of identifiers to CSS rules.
 */
export type Atoms<
  P extends keyof StandardProperties = keyof StandardProperties,
  K extends AtomName = AtomName
> = Record<K, AtomValue<P>>

/**
 * Identifier for a CSS rule.
 */
export type AtomName = string | number

/**
 * Value of a CSS rule.
 */
export type AtomValue<P extends keyof StandardProperties> = NonNullable<
  StandardProperties<string | number>[P]
>

/**
 * Record of CSS properties to a set of pseudo-classes or pseudo-elements to
 * generate.
 */
export type Pseudos<K extends keyof StandardProperties> = {
  [P in K]?: PseudosConfig
}

/**
 * Set of pseudo-classes and pseudo-elements where existance of a key
 * determines which classes will be generated.
 */
export type PseudosConfig = readonly [SimplePseudos, ...SimplePseudos[]]
