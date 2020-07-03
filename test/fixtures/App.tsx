import React from 'react'
import ReactDOM from 'react-dom'
import { TreatProvider } from 'react-treat'

import { Box } from '../../src/Box'
import { theme } from './theme.treat'

const App = () => (
  <>
    <Box
      id="background"
      styles={{
        backgroundSize: 'cover',
        backgroundPositionX: 'left',
        backgroundPositionY: 'top',
        backgroundRepeat: 'repeat',
      }}
    />
    <Box
      id="border"
      styles={{
        borderColor: 'white',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: 'none',
      }}
    />
    <Box
      id="effect"
      styles={{
        opacity: 25,
      }}
    />
    <Box
      id="flexbox"
      styles={{
        alignItems: 'center',
        alignContent: 'start',
        alignSelf: 'end',
        justifyItems: 'center',
        justifyContent: 'start',
        justifySelf: 'end',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 'auto',
      }}
    />
    <Box
      id="grid"
      styles={{
        gridAutoFlow: 'row',
        gridTemplateColumns: 1,
        gridTemplateRows: 1,
        gridColumn: 'auto',
        gridRow: 'auto',
        gap: 1,
      }}
    />
    <Box
      id="interactivity"
      styles={{
        outline: 'none',
        userSelect: 'none',
        pointerEvents: 'none',
      }}
    />
    <Box
      id="layout"
      styles={{
        display: 'flex',
        overflow: 'hidden',
        position: 'relative',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 2,
      }}
    />
    <Box
      id="sizing"
      styles={{
        width: 'auto',
        height: 'full',
        maxWidth: 'small',
      }}
    />
    <Box
      id="space"
      styles={{
        margin: 1,
        padding: 1,
      }}
    />
    <Box
      id="transition"
      styles={{
        transitionTimingFunction: 'easeIn',
        transitionDuration: 'normal',
      }}
    />
    <Box
      id="typography"
      styles={{
        fontWeight: 'thin',
        fontStyle: 'italic',
        lineHeight: 'solid',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 'normal',
        color: 'white',
      }}
    />
    <Box
      id="hover"
      hoverStyles={{
        color: 'white',
      }}
    />
    <Box
      id="focus"
      focusStyles={{
        color: 'white',
      }}
    />
    <Box
      id="responsive"
      styles={{
        color: ['black', null, 'white'],
      }}
    />
  </>
)

ReactDOM.render(
  <TreatProvider theme={theme}>
    <App />,
  </TreatProvider>,
  document.body.appendChild(document.createElement('div')),
)
