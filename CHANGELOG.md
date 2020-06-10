# Changelog

All notable changes to this project will be documented in this file. See
[standard-version](https://github.com/conventional-changelog/standard-version)
for commit guidelines.

## 0.2.0 (2020-06-10)

### ⚠ BREAKING CHANGES

- classNames are now entirely generated via `theme.rules`.
- `useStyles` has been renamed to `useBoxStyles`.
- The `theme` object no longer accepts `space`, `colors` or `grid`.
- `theme.breakpoints` must now be provided as CSS-unit compatible strings such
  as '48rem'.
- All styling must now be placed inside the `styles` object prop. Styles can no
  longer be applied as direct props to `<Box />`.

### New Features

#### Namespaced props for styling

Styling is now namespaced under the `styles` prop for `<Box />`. Styling props
directly is no longer supported.

#### Variant Support

Variants are now supported in `calico`! Specify the variants you want to
generate via `theme.variants`. Currently, both `hover` and `focus` variants are
supported.

Adding variant styles can be achieved via the `hoverStyles` and `focusStyles`
props respectively.
