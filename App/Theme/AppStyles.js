import {Colors} from './Colors';
import {Family, Sizes, Weights} from './Fonts';

/* Hoozin brand logo */
const BRAND_LOGO = {
    ...Family.BASE_FONT,
    ...Weights.FONT_LIGHT,
    ...Sizes.LOGO_TEXT,
    color: Colors.PRIMARY_TEXT,
}

/* Hoozin brand body text */
const BRAND_BODY_TEXT = {
    ...Family.BASE_FONT,
    ...Weights.FONT_REGULAR,
    ...Sizes.BODY_TEXT,
    color: Colors.PRIMARY_TEXT
}

/* Hoozin brand heading text */
const BRAND_HEADING_TEXT = {
    ...Family.BASE_FONT,
    ...Weights.FONT_REGULAR,
    ...Sizes.HEADING2_TEXT,
    color: Colors.HEADING_TEXT
}

export default {
    BRAND_LOGO,
    BRAND_BODY_TEXT,
    BRAND_HEADING_TEXT
}