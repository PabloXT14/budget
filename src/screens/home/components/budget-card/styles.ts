import { colors, typography } from "@/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 12,
    borderRadius: 10,
    padding: 16,
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderColor: colors.gray[200],
  },

  leftContent: {
    flex: 1,
    gap: 8,
  },

  title: {
    color: colors.gray[700],
    fontFamily: typography.title.md.weight,
    fontSize: typography.title.md.size,
    lineHeight: typography.title.md.lineHeight,
  },

  subtitle: {
    color: colors.gray[600],
    fontFamily: typography.text.sm.weight,
    fontSize: typography.text.sm.size,
    lineHeight: typography.text.sm.lineHeight,
  },

  rightContent: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "flex-end",
  },

  price: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  priceCurrency: {
    color: colors.gray[700],
    fontFamily: typography.text.xs.weight,
    fontSize: typography.text.xs.size,
    lineHeight: typography.text.xs.lineHeight,
  },

  priceValue: {
    color: colors.gray[700],
    fontFamily: typography.title.md.weight,
    fontSize: typography.title.md.size,
    lineHeight: typography.title.md.lineHeight,
  },
})
