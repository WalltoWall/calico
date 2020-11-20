import * as React from 'react'
import { TreatProvider } from 'react-treat'
import { CalicoTheme } from './createCalicoTheme'

const CalicoContext = React.createContext({} as CalicoTheme)

type CalicoProviderProps = {
  children: React.ReactNode
  calicoTheme: CalicoTheme
  treatTheme: string
}

export const CalicoProvider = ({
  calicoTheme,
  children,
  treatTheme,
}: CalicoProviderProps) => {
  return (
    <CalicoContext.Provider value={calicoTheme}>
      <TreatProvider theme={treatTheme}>{children}</TreatProvider>
    </CalicoContext.Provider>
  )
}

export const useCalicoTheme = () => React.useContext(CalicoContext)
