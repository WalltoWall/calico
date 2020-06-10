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
  <Box
    styles={{
      display: 'block',
      color: ['red', 'green', 'blue'],
      marginTop: [10, 8],
    }}
  />
)
```

All exported components and functions are documented via
[TSDoc](https://github.com/microsoft/tsdoc).

View the source files using the links below to read each component or function's
documentation.

## API

- Components
  - [`Box`][box] — Component that accepts atomic styles as props and maps them
    to `className`s,
- Hooks
  - [`useBoxStyles`][useboxstyles] — Low level react hook to resolve atomic CSS
    styles to `className`s. Useful for creating your own `Box`.
- Functions
  - [`createCalicoTheme`][createcalicotheme] — TODO
  - [`mapFontsets`][mapfontsets] — TODO
  - [`createMq`][createmq] — TODO
  - [`normalizeResponsiveProp`][utils] — TODO
  - [`resolveResponsiveProp`][utils] — TODO
- Other Exports
  - `baseCalicoTheme` — TODO
  - `ResponsiveProp` — TODO
  - `SafeReactHTMLAttributes` — TODO

[box]: ./src/Box.tsx
[useboxstyles]: ./src/useBoxStyles.ts
[mapfontsets]: ./src/mapFontsets.ts
[createcalicotheme]: ./src/createCalicoTheme.ts
[createmq]: ./src/createMq.ts
[utils]: ./src/utils.ts
