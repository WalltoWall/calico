import * as React from 'react'
import { TreatProvider } from 'react-treat'
import { CalicoTheme, baseCalicoTheme } from './createCalicoTheme'

const CalicoContext = React.createContext<CalicoTheme>(
  baseCalicoTheme as CalicoTheme,
)

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
