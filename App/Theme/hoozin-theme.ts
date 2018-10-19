/**
 * Contains reusable themeable style objects, useful for branding
 */
import * as variables from './variables';

/* Hoozin brand logo */
const BRAND_LOGO: any = {
    ...variables.BASE_FONT,
    ...variables.FONT_LIGHT,
    ...variables.LOGO_TEXT,
    color: variables.COLOR_SCHEME.PRIMARY_TEXT,
}

/* Hoozin brand body text */
const BRAND_BODY_TEXT: any = {
    ...variables.BASE_FONT,
    ...variables.FONT_REGULAR,
    ...variables.BODY_TEXT,
    color: variables.COLOR_SCHEME.PRIMARY_TEXT
}

/* Hoozin brand heading text */
const BRAND_HEADING_TEXT: any = {
    ...variables.BASE_FONT,
    ...variables.FONT_REGULAR,
    ...variables.HEADING2_TEXT,
    color: variables.COLOR_SCHEME.HEADING_TEXT
}

/* Hoozin brand color scheme */
const BRAND_COLOR: any = { ...variables.COLOR_SCHEME }

export default {
    BRAND_LOGO,
    BRAND_BODY_TEXT,
    BRAND_HEADING_TEXT,
    BRAND_COLOR
}