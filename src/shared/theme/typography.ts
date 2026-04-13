import { fontFamily } from "./font-family"
import { fontSize } from "./font-size"

const LINE_HEIGHT_MULTIPLIER = 1.4 // 140% - standard typography line height

export const typography = {
  title: {
    lg: {
      size: fontSize.title.lg,
      lineHeight: fontSize.title.lg * LINE_HEIGHT_MULTIPLIER,
      weight: fontFamily.lato.bold,
    },
    md: {
      size: fontSize.title.md,
      lineHeight: fontSize.title.md * LINE_HEIGHT_MULTIPLIER,
      weight: fontFamily.lato.bold,
    },
    sm: {
      size: fontSize.title.sm,
      lineHeight: fontSize.title.sm * LINE_HEIGHT_MULTIPLIER,
      weight: fontFamily.lato.bold,
    },
    xs: {
      size: fontSize.title.xs,
      lineHeight: fontSize.title.xs * LINE_HEIGHT_MULTIPLIER,
      weight: fontFamily.lato.bold,
    },
  },
  text: {
    md: {
      size: fontSize.text.md,
      lineHeight: fontSize.text.md * LINE_HEIGHT_MULTIPLIER,
      weight: fontFamily.lato.regular,
    },
    sm: {
      size: fontSize.text.sm,
      lineHeight: fontSize.text.sm * LINE_HEIGHT_MULTIPLIER,
      weight: fontFamily.lato.regular,
    },
    xs: {
      size: fontSize.text.xs,
      lineHeight: fontSize.text.xs * LINE_HEIGHT_MULTIPLIER,
      weight: fontFamily.lato.regular,
    },
  },
}
