import { styleMap } from 'treat'

import { responsiveSpaceMap } from './utils'
import { theme } from './theme'

export const margin = {
  top: styleMap(responsiveSpaceMap('marginTop', 'mobile', theme)),
  bottom: styleMap(responsiveSpaceMap('marginBottom', 'mobile', theme)),
  left: styleMap(responsiveSpaceMap('marginLeft', 'mobile', theme)),
  right: styleMap(responsiveSpaceMap('marginRight', 'mobile', theme)),
}
export const marginTablet = {
  top: styleMap(responsiveSpaceMap('marginTop', 'tablet', theme)),
  bottom: styleMap(responsiveSpaceMap('marginBottom', 'tablet', theme)),
  left: styleMap(responsiveSpaceMap('marginLeft', 'tablet', theme)),
  right: styleMap(responsiveSpaceMap('marginRight', 'tablet', theme)),
}
export const marginDesktop = {
  top: styleMap(responsiveSpaceMap('marginTop', 'desktop', theme)),
  bottom: styleMap(responsiveSpaceMap('marginBottom', 'desktop', theme)),
  left: styleMap(responsiveSpaceMap('marginLeft', 'desktop', theme)),
  right: styleMap(responsiveSpaceMap('marginRight', 'desktop', theme)),
}
export const marginDesktopWide = {
  top: styleMap(responsiveSpaceMap('marginTop', 'desktopWide', theme)),
  bottom: styleMap(responsiveSpaceMap('marginBottom', 'desktopWide', theme)),
  left: styleMap(responsiveSpaceMap('marginLeft', 'desktopWide', theme)),
  right: styleMap(responsiveSpaceMap('marginRight', 'desktopWide', theme)),
}

export const padding = {
  top: styleMap(responsiveSpaceMap('paddingTop', 'mobile', theme)),
  bottom: styleMap(responsiveSpaceMap('paddingBottom', 'mobile', theme)),
  left: styleMap(responsiveSpaceMap('paddingLeft', 'mobile', theme)),
  right: styleMap(responsiveSpaceMap('paddingRight', 'mobile', theme)),
}
export const paddingTablet = {
  top: styleMap(responsiveSpaceMap('paddingTop', 'tablet', theme)),
  bottom: styleMap(responsiveSpaceMap('paddingBottom', 'tablet', theme)),
  left: styleMap(responsiveSpaceMap('paddingLeft', 'tablet', theme)),
  right: styleMap(responsiveSpaceMap('paddingRight', 'tablet', theme)),
}
export const paddingDesktop = {
  top: styleMap(responsiveSpaceMap('paddingTop', 'desktop', theme)),
  bottom: styleMap(responsiveSpaceMap('paddingBottom', 'desktop', theme)),
  left: styleMap(responsiveSpaceMap('paddingLeft', 'desktop', theme)),
  right: styleMap(responsiveSpaceMap('paddingRight', 'desktop', theme)),
}
export const paddingDesktopWide = {
  top: styleMap(responsiveSpaceMap('paddingTop', 'desktopWide', theme)),
  bottom: styleMap(responsiveSpaceMap('paddingBottom', 'desktopWide', theme)),
  left: styleMap(responsiveSpaceMap('paddingLeft', 'desktopWide', theme)),
  right: styleMap(responsiveSpaceMap('paddingRight', 'desktopWide', theme)),
}
