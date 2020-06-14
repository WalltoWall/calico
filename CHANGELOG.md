# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.3.2](https://github.com/WalltoWall/calico/compare/v0.3.1...v0.3.2) (2020-06-14)


### Bug Fixes

* use correct overflow property names ([1fb22a8](https://github.com/WalltoWall/calico/commit/1fb22a8325ce73aa861038b93a61b233a8580b35))

### [0.3.1](https://github.com/WalltoWall/calico/compare/v0.3.0...v0.3.1) (2020-06-14)


### Bug Fixes

* correct scrollX and scrollY values ([a70c9d8](https://github.com/WalltoWall/calico/commit/a70c9d85aa0eed2e74138c5ef00923a24b490038))
* provide debug name ([0a3433e](https://github.com/WalltoWall/calico/commit/0a3433e0840f21e4930299cf9fc122cd859833a0))

## [0.3.0](https://github.com/WalltoWall/calico/compare/v0.2.1...v0.3.0) (2020-06-11)


### Features

* split hook into `useBoxStyles` and `usePseudoBoxStyles` ([80e65e8](https://github.com/WalltoWall/calico/commit/80e65e84de233d61c766f739945c1a54b1964fe8))


### Bug Fixes

* include falsey styles (fixes [#16](https://github.com/WalltoWall/calico/issues/16)) ([20d36e3](https://github.com/WalltoWall/calico/commit/20d36e33fb794376358fe1412069bfed6d1e2973))

### [0.2.1](https://github.com/WalltoWall/calico/compare/v0.2.0...v0.2.1) (2020-06-10)


### Features

* add missing util exports ([5ef7e2b](https://github.com/WalltoWall/calico/commit/5ef7e2bf2658f47ef6dea3a0c5cb238f2558c3b3))

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
