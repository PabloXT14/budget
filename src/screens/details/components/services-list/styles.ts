import { StyleSheet } from "react-native"

import { colors, typography } from "@/theme"

export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray[200],
  },

  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
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

  list: {
    padding: 20,
    paddingTop: 16,
    gap: 20,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  itemDescription: {
    flex: 1,
    flexShrink: 1,
    gap: 2,
  },

  itemTitle: {
    color: colors.gray[700],
    fontSize: typography.title.sm.size,
    fontFamily: typography.title.sm.weight,
    lineHeight: typography.title.sm.lineHeight,
  },

  itemSubtitle: {
    color: colors.gray[500],
    fontSize: typography.text.xs.size,
    fontFamily: typography.text.xs.weight,
    lineHeight: typography.text.xs.lineHeight,
  },

  itemPrice: {
    gap: 2,
    alignItems: "flex-end",
  },

  itemCurrencyContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  itemCurrency: {
    color: colors.gray[700],
    fontSize: typography.text.xs.size,
    fontFamily: typography.text.xs.weight,
    lineHeight: typography.text.xs.lineHeight,
  },

  itemValue: {
    color: colors.gray[700],
    fontSize: typography.title.md.size,
    fontFamily: typography.title.md.weight,
    lineHeight: typography.title.md.lineHeight,
  },

  itemQuantity: {
    color: colors.gray[600],
    fontSize: typography.text.xs.size,
    fontFamily: typography.text.xs.weight,
    lineHeight: typography.text.xs.lineHeight,
  },
})
