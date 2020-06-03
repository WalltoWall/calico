import React from 'react'
import ReactDOM from 'react-dom'

import { Box } from '../src/Box'

const App = () => {
  return <Box />
}

ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement('div')),
)
