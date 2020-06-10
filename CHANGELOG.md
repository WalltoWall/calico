# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 0.2.0 (2020-06-10)


### ⚠ BREAKING CHANGES

* This PR changes how classNames are generated via `calico`. Instead of relying on a manually curated whitelist of CSS properties, all classNames are now generated based on objects within `theme.rules`. 

**variant support**

This PR allows for psuedo-style className generation support for `:hover` and `:focus`. You can specify which CSS property names to generate psuedo-classes for under `theme.variants`.

Adding variant styles can be achieved via the `hoverStyles` and `focusStyles` props respectively.

**Namespaced prop for styling**
* All styling must now be placed inside the `styles` object prop. Styles can no longer be applied as direct props to Box.

**Renamed exports**
* `useStyles` has been renamed to `useBoxStyles`.

**Refactored `theme` object**
* The `theme` object no longer accepts `space`, `colors` or `grid`.
* Theme breakpoints must now be provided as CSS-unit compatible strings such as '48rem'

### Features

* add cursor ([bf6dc45](https://github.com/WalltoWall/calico/commit/bf6dc4532bb139287f0b9a5261400e7119be60cc))
* add index file ([1c2f5a3](https://github.com/WalltoWall/calico/commit/1c2f5a3a3e214664beb3d5c0c21f65118601391a))
* add list-style ([2ef3922](https://github.com/WalltoWall/calico/commit/2ef3922a1ce74426cc9a687f6c7fd398e7abcae5))
* background styles in box ([d944368](https://github.com/WalltoWall/calico/commit/d944368b3e1d82a97d05000f39202fe157fe153d))
* colocate default sizing rules ([963dded](https://github.com/WalltoWall/calico/commit/963dded10d620532f14b42a5932ca5d42ba11d96))
* debugging progress ([bbb4c91](https://github.com/WalltoWall/calico/commit/bbb4c91f333f792d8bd2e50cf12016a7a41fd1ff))
* export responsive prop helpers ([7d79d1d](https://github.com/WalltoWall/calico/commit/7d79d1d5e7fc3d164124ca05d066855e7d09368f))
* export useInteractivityStyles and fix types ([c52eb48](https://github.com/WalltoWall/calico/commit/c52eb4836067b53da986f31fa69585200f2059bc))
* grid styles ([04a765e](https://github.com/WalltoWall/calico/commit/04a765ef76c880000ad13f6abbbb32fa79004b98))
* init ([0e53f5d](https://github.com/WalltoWall/calico/commit/0e53f5d6d41dbbf5d7ed01b9dde552837f94cf24))
* move base rules to theme ([c3ac2de](https://github.com/WalltoWall/calico/commit/c3ac2de00adcfe02b3971f4447c7e1961beac966))
* overflowX and Y ([7be3900](https://github.com/WalltoWall/calico/commit/7be3900b750f1f27167c9dc05ce86873bcab3950))
* readme and rest of exports ([cd7882a](https://github.com/WalltoWall/calico/commit/cd7882a00fc65257787fee1e37b4cd1fa69514d1))
* stronger theme type and functions ([3ae6719](https://github.com/WalltoWall/calico/commit/3ae671933118fcffa2ab64d61d8804c9051fb9d3))
* support custom theme type ([3a00d8a](https://github.com/WalltoWall/calico/commit/3a00d8a549c05a55a46118555bca0c0a7cbf067d))
* theme-rule based class generation & variants ([5cc8f27](https://github.com/WalltoWall/calico/commit/5cc8f27f5d2f90c216edcb975a6700b14866d90b))
* update flexBasis values to align with width ([56fbd6d](https://github.com/WalltoWall/calico/commit/56fbd6dae5ceebbcf73768ec0bdc428467bde2a4))
* use background styles and move color ([8bf04c6](https://github.com/WalltoWall/calico/commit/8bf04c6d73a5ecd492a823fcb5a5158597b590a9))
* use interactivity in box ([49dbee2](https://github.com/WalltoWall/calico/commit/49dbee206737d59474632f3441efc1dbee26c8de))
* use sizing styles ([a3d3739](https://github.com/WalltoWall/calico/commit/a3d373975140cb18b6c8c70a626457ab57cf26f2))
* use typography ([7f92304](https://github.com/WalltoWall/calico/commit/7f923048178218664a2c9d30dd17ae4db5dac699))
* useBackgroundStyles ([3e9b3be](https://github.com/WalltoWall/calico/commit/3e9b3be94da19b0a808828644b7389daaba6f9f5))
* useFlexbox ([f985173](https://github.com/WalltoWall/calico/commit/f985173c0ec9ba2814f7fa7891ecd61064a6faaf))
* useInteractivityStyles ([144fa8b](https://github.com/WalltoWall/calico/commit/144fa8bba1f7d291869185dc54c97c4d75324d23))
* webpack progress ([d84b115](https://github.com/WalltoWall/calico/commit/d84b115cacc04bcc3ef5fcd28cfefed502482017))


### Bug Fixes

* export types using `export type` ([c74d336](https://github.com/WalltoWall/calico/commit/c74d3365ac9aba9732115af719130bb5ae5adf1b))
* export useTransitionStyles ([7dd2d7d](https://github.com/WalltoWall/calico/commit/7dd2d7dc052811cbb7679d0b78fed14539f0635a))
* incorrect media query unit ([d2254c3](https://github.com/WalltoWall/calico/commit/d2254c3ab0e95a6c5943e0e3f73c13434f86a567))
* normalize width/height values ([c1f5f4d](https://github.com/WalltoWall/calico/commit/c1f5f4dac0bfdfd973154cebe742b5740d4b38b4))
* remove letter spacing from theme root ([3944113](https://github.com/WalltoWall/calico/commit/39441132295f305d54b77ef727b829dbc42f723c))
* remove unused console.log ([813b2fd](https://github.com/WalltoWall/calico/commit/813b2fd8124a3b8c1327fe2590f312d1120e45ae))
* support optional theme values ([#11](https://github.com/WalltoWall/calico/issues/11)) ([2c35d9c](https://github.com/WalltoWall/calico/commit/2c35d9c5a8106a4b0aac31a0777cc649e5686701))
* types of mapFontset to support partial breakpoints ([291730a](https://github.com/WalltoWall/calico/commit/291730a1c6bad28d1e2ef20ce932d316641b5900))
