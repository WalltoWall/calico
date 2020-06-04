import React from 'react'
import ReactDOM from 'react-dom'
import { TreatProvider } from 'react-treat'

import { Box } from '../../src/Box'
import { theme } from './theme.treat'

const App = () => <Box id="main" />

ReactDOM.render(
  <TreatProvider theme={theme}>
    <App />,
  </TreatProvider>,
  document.body.appendChild(document.createElement('div')),
)
