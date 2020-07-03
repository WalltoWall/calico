import React from 'react'

export type ResponsiveProp<AtomName> =
  | AtomName
  | Readonly<[AtomName | null, AtomName | null]>
  | Readonly<[AtomName | null, AtomName | null, AtomName | null]>
  | Readonly<
      [AtomName | null, AtomName | null, AtomName | null, AtomName | null]
    >

export type SafeReactHTMLAttributes = React.AllHTMLAttributes<'div'> & {
  loading?: string
}
