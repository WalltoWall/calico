import React from 'react'

export type ResponsiveProp<AtomName> =
  | AtomName
  | Readonly<[AtomName | null, AtomName]>
  | Readonly<[AtomName | null, AtomName | null, AtomName]>
  | Readonly<[AtomName | null, AtomName | null, AtomName | null, AtomName]>

export type SafeReactHTMLAttributes = React.AllHTMLAttributes<'div'> & {
  loading?: string
}
