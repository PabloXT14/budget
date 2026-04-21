import { StyleSheet } from "react-native"

import { colors, typography } from "@/shared/theme"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  info: {
    flex: 1,
    flexShrink: 1,
    justifyContent: "center",
    gap: 2,
  },

  infoTitle: {
    color: colors.gray[700],
    fontSize: typography.title.sm.size,
    fontFamily: typography.title.sm.weight,
    lineHeight: typography.title.sm.lineHeight,
  },

  infoDescription: {
    color: colors.gray[500],
    fontSize: typography.text.xs.size,
    fontFamily: typography.text.xs.weight,
    lineHeight: typography.text.xs.lineHeight,
  },

  price: {
    alignItems: "flex-end",
    gap: 2,
  },

  priceValue: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  currency: {
    color: colors.gray[700],
    fontSize: typography.text.xs.size,
    fontFamily: typography.text.xs.weight,
    lineHeight: typography.text.xs.lineHeight,
  },

  value: {
    color: colors.gray[700],
    fontSize: typography.title.md.size,
    fontFamily: typography.title.md.weight,
    lineHeight: typography.title.md.lineHeight,
  },

  quantity: {
    color: colors.gray[600],
    fontSize: typography.text.xs.size,
    fontFamily: typography.text.xs.weight,
    lineHeight: typography.text.xs.lineHeight,
  },
})
