import React from 'react'
import ReactDOM from 'react-dom'
import { TreatProvider } from 'react-treat'

import { Box } from '../../src/Box'

const App = () => <Box id="main" />

ReactDOM.render(
  <TreatProvider theme="">
    <App />,
  </TreatProvider>,
  document.body.appendChild(document.createElement('div')),
)
