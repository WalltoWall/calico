# Calico

Calico is a customizable styling library that maps React props to statically
generated class names.

## Install

```bash
yarn add @walltowall/calico
```

## Usage

```tsx
import { Box } from '@walltowall/calico'

const Example = () => (
  <Box display="block" color={['red', 'green', 'blue']} marginTop={[10, 8]} />
)
```

All exported components and functions are documented via
[TSDoc](https://github.com/microsoft/tsdoc).

View the source files using the links below to read each component or function's
documentation.

## API

- Components
  - [`Box`][box] -- Component that accepts atomic styles as props and maps them
    to `className`s,
- Hooks
  - [`useBackgroundStyles`][usebackgroundstyles] -- React hook to resolve
    background-related atomic CSS styles to `className`s.
  - [`useBorderStyles`][useborderstyles] -- React hook to resolve border related
    atomic CSS styles to `className`s.
  - [`useEffectStyles`][useeffectstyles] -- React hook to resolve `opacity` and
    `boxShadow` atomic CSS styles to `className`s.
  - [`useFlexboxStyles`][useflexboxstyles] -- React hook to resolve Flexbox
    related atomic CSS styles to `className`s.
  - [`useGridStyles`][usegridstyles] -- React hook to resolve Grid related
    atomic CSS styles to `className`s.
  - [`useInteractivityStyles`][useinteractivitystyles] -- React hook to resolve
    interactivity related atomic CSS styles to `className`s.
  - [`useLayoutStyles`][uselayoutstyles] -- React hook to resolve layout related
    atomic CSS styles to `className`s.
  - [`useSizingStyles`][uselayoutstyles] -- React hook to resolve sizing related
    atomic CSS styles to `className`s.
  - [`useSpaceStyles`][usespacestyles] -- React hook to resolve space related
    atomic CSS styles to `className`s.
  - [`useTypographyStyles`][usetypographystyles] -- React hook to resolve
    typography related atomic CSS styles to `className`s.

[box]: ./src/Box.tsx
[usebackgroundstyles]: ./src/useBackgroundStyles.ts
[useborderstyles]: ./src/useBorderStyles.ts
[useeffectstyles]: ./src/useEffectStyles.ts
[useflexboxstyles]: ./src/useFlexboxStyles.ts
[usegridstyles]: ./src/useGridStyles.ts
[useinteractivitystyles]: ./src/useInteractivityStyles.ts
[uselayoutstyles]: ./src/useLayoutStyles.ts
[usesizingstyles]: ./src/useSizingStyles.ts
[usespacestyles]: ./src/useSpaceStyles.ts
[usetypographystyles]: ./src/useTypographyStyles.ts
