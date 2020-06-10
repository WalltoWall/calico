import React from 'react'

export type ResponsiveProp<AtomName> =
  | AtomName
  | Readonly<[AtomName, AtomName]>
  | Readonly<[AtomName, AtomName, AtomName]>
  | Readonly<[AtomName, AtomName, AtomName, AtomName]>

type ConflictingHtmlProps =
  | 'color'
  | 'style'
  | 'className'
  | 'width'
  | 'height'
  | 'css'

export type SafeReactHTMLAttributes = Omit<
  React.AllHTMLAttributes<'div'>,
  ConflictingHtmlProps
> & {
  loading?: string
}
