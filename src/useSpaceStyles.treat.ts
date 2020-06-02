import { styleMap } from 'treat'

import { responsiveSpaceMap } from './utils'
import { theme } from './theme'

export const margin = {
  top: styleMap((theme) => responsiveSpaceMap('marginTop', 'mobile', theme)),
  bottom: styleMap((theme) =>
    responsiveSpaceMap('marginBottom', 'mobile', theme),
  ),
  left: styleMap((theme) => responsiveSpaceMap('marginLeft', 'mobile', theme)),
  right: styleMap((theme) =>
    responsiveSpaceMap('marginRight', 'mobile', theme),
  ),
}
export const marginTablet = {
  top: styleMap((theme) => responsiveSpaceMap('marginTop', 'tablet', theme)),
  bottom: styleMap((theme) =>
    responsiveSpaceMap('marginBottom', 'tablet', theme),
  ),
  left: styleMap((theme) => responsiveSpaceMap('marginLeft', 'tablet', theme)),
  right: styleMap((theme) =>
    responsiveSpaceMap('marginRight', 'tablet', theme),
  ),
}
export const marginDesktop = {
  top: styleMap((theme) => responsiveSpaceMap('marginTop', 'desktop', theme)),
  bottom: styleMap((theme) =>
    responsiveSpaceMap('marginBottom', 'desktop', theme),
  ),
  left: styleMap((theme) => responsiveSpaceMap('marginLeft', 'desktop', theme)),
  right: styleMap((theme) =>
    responsiveSpaceMap('marginRight', 'desktop', theme),
  ),
}
export const marginDesktopWide = {
  top: styleMap((theme) =>
    responsiveSpaceMap('marginTop', 'desktopWide', theme),
  ),
  bottom: styleMap((theme) =>
    responsiveSpaceMap('marginBottom', 'desktopWide', theme),
  ),
  left: styleMap((theme) =>
    responsiveSpaceMap('marginLeft', 'desktopWide', theme),
  ),
  right: styleMap((theme) =>
    responsiveSpaceMap('marginRight', 'desktopWide', theme),
  ),
}

export const padding = {
  top: styleMap((theme) => responsiveSpaceMap('paddingTop', 'mobile', theme)),
  bottom: styleMap((theme) =>
    responsiveSpaceMap('paddingBottom', 'mobile', theme),
  ),
  left: styleMap((theme) => responsiveSpaceMap('paddingLeft', 'mobile', theme)),
  right: styleMap((theme) =>
    responsiveSpaceMap('paddingRight', 'mobile', theme),
  ),
}
export const paddingTablet = {
  top: styleMap((theme) => responsiveSpaceMap('paddingTop', 'tablet', theme)),
  bottom: styleMap((theme) =>
    responsiveSpaceMap('paddingBottom', 'tablet', theme),
  ),
  left: styleMap((theme) => responsiveSpaceMap('paddingLeft', 'tablet', theme)),
  right: styleMap((theme) =>
    responsiveSpaceMap('paddingRight', 'tablet', theme),
  ),
}
export const paddingDesktop = {
  top: styleMap((theme) => responsiveSpaceMap('paddingTop', 'desktop', theme)),
  bottom: styleMap((theme) =>
    responsiveSpaceMap('paddingBottom', 'desktop', theme),
  ),
  left: styleMap((theme) =>
    responsiveSpaceMap('paddingLeft', 'desktop', theme),
  ),
  right: styleMap((theme) =>
    responsiveSpaceMap('paddingRight', 'desktop', theme),
  ),
}
export const paddingDesktopWide = {
  top: styleMap((theme) =>
    responsiveSpaceMap('paddingTop', 'desktopWide', theme),
  ),
  bottom: styleMap((theme) =>
    responsiveSpaceMap('paddingBottom', 'desktopWide', theme),
  ),
  left: styleMap((theme) =>
    responsiveSpaceMap('paddingLeft', 'desktopWide', theme),
  ),
  right: styleMap((theme) =>
    responsiveSpaceMap('paddingRight', 'desktopWide', theme),
  ),
}
