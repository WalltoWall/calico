import React from 'react'

export type ResponsiveProp<AtomName> =
  | AtomName
  | Readonly<[AtomName, AtomName]>
  | Readonly<[AtomName, AtomName, AtomName]>
  | Readonly<[AtomName, AtomName, AtomName, AtomName]>

type ConflictingHtmlProps = 'color' | 'width' | 'height'

export type SafeReactHTMLAttributes = Omit<
  React.AllHTMLAttributes<'div'>,
  ConflictingHtmlProps
> & {
  loading?: string
}
