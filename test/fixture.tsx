import React from 'react'
import ReactDOM from 'react-dom'

import { Box } from '../src/Box'

const App = () => React.createElement(Box, { id: 'main' })

ReactDOM.render(
  React.createElement(App),
  document.body.appendChild(document.createElement('div')),
)
