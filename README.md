# Calico

Calico is a customizable styling library that maps React props to statically
generated class names.

## Motiviation

Calico is a CSS-in-JS project library that aims to combine the benefits of
various styling solutions into one:

- **Atomic CSS** as inspired by libraries like
  [Tailwind CSS](https://tailwindcss.com)
  - Statically extracted, but customizable upfront in a `theme` file.
  - Encourages reusabilty with a finite set of generated `className`s.
- **Very light runtime** made possible by the
  [`treat`](https://seek-oss.github.io/treat/) library.
  - Static style extraction with full type safety.
  - Dynamic styles via swapping `className`s.
- **Developer-centric** as inspired by
  [`styled-system`](https://styled-system.com) and
  [`theme-ui`](https://theme-ui.com).
  - Define responsive styles via arrays.
  - Namespaced styles to ease type-extensibility.
  - One-off styles can be defined in `.treat` files with additional responsive
    helpers added onto your `theme`.

## Install

Install the package in addition to its peer dependencies:

```bash
yarn add @walltowall/calico treat react-treat
```

## Getting Started

First, we'll need to define a theme that will define our design tokens.

```ts
// theme.ts
import { createCalicoTheme, baseCalicoTheme } from '@walltowall/calico'

const colors = {
  black: '#000',
} as const

const space = {
  0: 0,
  1: '0.25rem',
} as const

export type Theme = typeof theme
export const theme = createCalicoTheme({
  breakpoints: {
    mobile: '0rem',
    tablet: '48rem',
    desktop: '75rem',
    desktopWide: '90rem',
  },

  // The rules object will determine the classes we will generate
  // at build-time.
  rules: {
    // Any valid CSS property can be specified.
    color: colors,
    backgroundColor: colors,
    margin: space,

    // Extending default rules can be done naturally:
    borderRadius: {
      ...baseCalicoTheme.rules.borderRadius,
      full: '50%',
    },
  },

  // The variants object determines the variant classes that will be
  // generated.
  variants: {
    backgroundColor: {
      hover: true,
      focus: true,
    },
  },
})
```

Next, we'll need to create a `treat` file to generate the classes from our
`theme`.

```ts
// theme.treat.ts
import { createTheme } from 'treat'
import { theme as calicoTheme } from './theme'

export const theme = createTheme(calicoTheme)
```

Once we've setup all of our className generation, let's setup TypeScript so we
have full type-safety while we're styling in our project.

```ts
// calico.d.ts
import { Theme as CalicoTheme } from './theme'

declare module 'treat/theme' {
  export interface Theme extends CalicoTheme {}
}
```

Finally, we need to setup our `<TreatProvider>` so we can utilize our theme
styles.

```tsx
// app.tsx
import React from 'react'
import { TreatProvider } from 'react-treat'
import { theme } from './theme.treat'

const App: React.FC = ({ children }) => (
  <TreatProvider theme={theme}>{children}</TreatProvider>
)
```

Now that everyhing is in place, we can now style our components!

```tsx
import React from 'react'
import { Box } from '@walltowall/calico'

export const Example = () => (
  <Box styles={{ color: 'black', margin: [1, 0] }}>
    I will be the color black!
  </Box>
)
```

## API

All exported components and functions are documented via
[TSDoc](https://github.com/microsoft/tsdoc).

View the source files using the links below to read each component or function's
documentation.

- **Components**
  - [`Box`](./src/Box.tsx) — Component that accepts atomic styles via props and
    resolves them to `className`s,
- **Hooks**
  - [`useBoxStyles`](./src/useBoxStyles.ts) — Low level react hook to resolve
    atomic CSS styles to `className`s.
  - [`usePsuedoBoxStyles`](./src/useBoxStyles.ts) — Low level hook to resolve
    pseudo atomic CSS styles to `className`s.
- **Functions**
  - [`createCalicoTheme`](./src/createCalicoTheme.ts) — Creates a `treat`
    compatible theme object whose rules are merged with the default calico
    rules.
  - [`mapFontsets`](./src/mapFontsets.ts) — Utiltiy function for generating
    `treat` styles that remove the leading and trailing white-space for your
    fonts.
  - [`createMq`](./src/createMq.ts) — Low level higher-order function that
    returns a version of `style` from `treat` that accepts `ResponsiveProp`
    inputs. This is automatically added to your `theme` in `createCalicoTheme`
    under `theme.mq`. Should not need to use this directly, but is provided if
    needed.
  - [`normalizeResponsiveProp`](./src/utils.ts) — Low level function for
    normalizing a value to be a valid `ResponsiveProp`.
  - [`resolveResponsiveProp`](./src/utils.ts) — Low level utility for resolving
    a `ResponsiveProp` to a list of classNames.
- **Other Exports**
  - `baseCalicoTheme` — A theme object that contains all of the default `rules`
    and `variants`.
  - `ResponsiveProp` — A type that represents a valid responsive array.
  - `SafeReactHTMLAttributes` — A type that represents all safe React HTML props
    that are passed to `<Box />`.
