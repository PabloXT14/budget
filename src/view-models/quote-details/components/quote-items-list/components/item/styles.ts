import { StyleSheet } from "react-native"

import { colors, typography } from "@/shared/theme"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  description: {
    flex: 1,
    flexShrink: 1,
    gap: 2,
  },

  title: {
    color: colors.gray[700],
    fontSize: typography.title.sm.size,
    fontFamily: typography.title.sm.weight,
    lineHeight: typography.title.sm.lineHeight,
  },

  subtitle: {
    color: colors.gray[500],
    fontSize: typography.text.xs.size,
    fontFamily: typography.text.xs.weight,
    lineHeight: typography.text.xs.lineHeight,
  },

  price: {
    gap: 2,
    alignItems: "flex-end",
  },

  currencyContainer: {
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
