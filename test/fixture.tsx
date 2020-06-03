import React from 'react'
import ReactDOM from 'react-dom'

import { Box } from '../src/Box'

const App = () => <Box id="main" />

ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement('div')),
)
