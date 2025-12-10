import { StyleSheet } from "react-native"

import { colors, typography } from "@/theme"

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 10,
    overflow: "hidden",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
  },

  title: {
    color: colors.gray[500],
    fontSize: typography.text.xs.size,
    fontFamily: typography.text.xs.weight,
    lineHeight: typography.text.xs.lineHeight,
  },

  content: {
    padding: 16,
    gap: 12,
  },

  subtotalContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  subtotalTitle: {
    flexGrow: 1,
    color: colors.gray[700],
    fontSize: typography.text.sm.size,
    fontFamily: typography.text.sm.weight,
    lineHeight: typography.text.sm.lineHeight,
  },

  subtotalValue: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 12,
  },

  itemQuantity: {
    color: colors.gray[600],
    fontSize: typography.text.xs.size,
    fontFamily: typography.text.xs.weight,
    lineHeight: typography.text.xs.lineHeight,
  },

  itemPrice: {
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
    fontSize: typography.text.sm.size,
    fontFamily: typography.text.sm.weight,
    lineHeight: typography.text.sm.lineHeight,
  },

  discountContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  discountInput: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
  },

  discountTitle: {
    color: colors.gray[700],
    fontSize: typography.text.sm.size,
    fontFamily: typography.text.sm.weight,
    lineHeight: typography.text.sm.lineHeight,
  },

  discountPercentContainer: {
    width: 80,
  },

  discountPercent: {
    color: colors.gray[600],
    fontSize: typography.title.md.size,
    fontFamily: typography.title.md.weight,
  },

  discountValue: {
    color: colors.danger.base,
    fontSize: typography.text.sm.size,
    fontFamily: typography.text.sm.weight,
    lineHeight: typography.text.sm.lineHeight,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: colors.gray[100],
    borderTopWidth: 1,
    borderTopColor: colors.gray[200],
  },

  footerTitle: {
    color: colors.gray[700],
    fontSize: typography.title.sm.size,
    fontFamily: typography.title.sm.weight,
    lineHeight: typography.title.sm.lineHeight,
  },

  footerValue: {
    gap: 2,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  priceWithoutDiscount: {
    color: colors.gray[600],
    fontSize: typography.text.xs.size,
    fontFamily: typography.text.xs.weight,
    lineHeight: typography.text.xs.lineHeight,
    textDecorationLine: "line-through",
  },

  totalPrice: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  totalCurrency: {
    color: colors.gray[700],
    fontSize: typography.text.xs.size,
    fontFamily: typography.text.xs.weight,
    lineHeight: typography.text.xs.lineHeight,
  },

  totalValue: {
    color: colors.gray[700],
    fontSize: typography.title.lg.size,
    fontFamily: typography.title.lg.weight,
    lineHeight: typography.title.lg.lineHeight,
  },
})
