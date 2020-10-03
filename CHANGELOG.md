# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.4.0](https://github.com/WalltoWall/calico/compare/v0.3.8...v0.4.0) (2020-10-03)


### Features

* support polymorphic components via react-polymorphic-box ([#31](https://github.com/WalltoWall/calico/issues/31)) ([e7ba84c](https://github.com/WalltoWall/calico/commit/e7ba84ce1f0fda37baf832619234bb988ef3150c))


### Bug Fixes

* update all dependencies ([1c71e3f](https://github.com/WalltoWall/calico/commit/1c71e3f6c619e2bcc8c6bb1e6ad5a963d95759eb))

### [0.3.8](https://github.com/WalltoWall/calico/compare/v0.3.7...v0.3.8) (2020-07-29)


### Bug Fixes

* responsive props for numbers and duplicated classnames ([#26](https://github.com/WalltoWall/calico/issues/26)) ([c768b35](https://github.com/WalltoWall/calico/commit/c768b357c8ba0a9b36075f6d25531886021b25dc))

### [0.3.7](https://github.com/WalltoWall/calico/compare/v0.3.6...v0.3.7) (2020-07-07)


### Bug Fixes

* allow for null in mq function ([29174dd](https://github.com/WalltoWall/calico/commit/29174dde825864daf1abdf0c134f547af30ee7dc))
* allow for null in types of createmq ([af0d641](https://github.com/WalltoWall/calico/commit/af0d64121f3a26b289f3e7a5dc8d917ce620c0e8))

### [0.3.6](https://github.com/WalltoWall/calico/compare/v0.3.5...v0.3.6) (2020-07-03)


### Features

* support null in responsive arrays ([#24](https://github.com/WalltoWall/calico/issues/24)) ([b2bb58f](https://github.com/WalltoWall/calico/commit/b2bb58f84c7df4a80fb20d083543a6960ffa3d57))

### [0.3.5](https://github.com/WalltoWall/calico/compare/v0.3.4...v0.3.5) (2020-06-23)


### Bug Fixes

* remove conflicting prop deny list ([e5e9e3a](https://github.com/WalltoWall/calico/commit/e5e9e3a83afc6a2caa92c79ec27d3f5ebc2f237a))

### [0.3.4](https://github.com/WalltoWall/calico/compare/v0.3.3...v0.3.4) (2020-06-17)


### Features

* box forward ref ([6b2c6a1](https://github.com/WalltoWall/calico/commit/6b2c6a18e439231b77c3210e4ec8383e95035ab1))

### [0.3.3](https://github.com/WalltoWall/calico/compare/v0.3.2...v0.3.3) (2020-06-14)


### Bug Fixes

* add missing textTransform value ([4e99a5d](https://github.com/WalltoWall/calico/commit/4e99a5dc8e640a6f989d67edff1ce69035d80399))

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
