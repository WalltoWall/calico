import React from 'react'

export type ResponsiveProp<AtomName> =
  | AtomName
  | Readonly<[AtomName, AtomName]>
  | Readonly<[AtomName, AtomName, AtomName]>
  | Readonly<[AtomName, AtomName, AtomName, AtomName]>

export type SafeReactHTMLAttributes = React.AllHTMLAttributes<'div'> & {
  loading?: string
}
