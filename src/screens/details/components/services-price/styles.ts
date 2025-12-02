import { colors, typography } from "@/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
    padding: 16,
    backgroundColor: colors.gray[100],
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray[200],
  },

  icon: {
    width: 36,
    height: 36,
    backgroundColor: colors.purple.light,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    flex: 1,
    gap: 8,
  },

  divider: {
    width: "100%",
    height: 1,
    backgroundColor: colors.gray[200],
  },

  top: {
    gap: 2,
  },

  subtotal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  subtotalLabel: {
    color: colors.gray[600],
    fontSize: typography.text.sm.size,
    fontFamily: typography.text.sm.weight,
    lineHeight: typography.text.sm.lineHeight,
  },

  subtotalValue: {
    color: colors.gray[600],
    fontSize: typography.title.xs.size,
    fontFamily: typography.title.xs.weight,
    lineHeight: typography.title.xs.lineHeight,
  },

  discount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  discountInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  discountLabel: {
    color: colors.gray[600],
    fontSize: typography.text.sm.size,
    fontFamily: typography.text.sm.weight,
    lineHeight: typography.text.sm.lineHeight,
  },

  discountValue: {
    color: colors.success.dark,
    fontSize: typography.title.xs.size,
    fontFamily: typography.title.xs.weight,
    lineHeight: typography.title.xs.lineHeight,
  },

  tag: {
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 6,
    backgroundColor: colors.success.light,
  },

  tagText: {
    color: colors.success.dark,
    fontSize: typography.title.xs.size,
    fontFamily: typography.title.xs.weight,
    lineHeight: typography.title.xs.lineHeight,
  },

  bottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  totalLabel: {
    color: colors.gray[700],
    fontSize: typography.title.sm.size,
    fontFamily: typography.title.sm.weight,
    lineHeight: typography.title.sm.lineHeight,
  },

  total: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
  },

  currency: {
    color: colors.gray[700],
    fontSize: typography.text.xs.size,
    fontFamily: typography.text.xs.weight,
    lineHeight: typography.text.xs.lineHeight,
  },

  price: {
    color: colors.gray[700],
    fontSize: typography.title.lg.size,
    fontFamily: typography.title.lg.weight,
    lineHeight: typography.title.lg.lineHeight,
  },
})
