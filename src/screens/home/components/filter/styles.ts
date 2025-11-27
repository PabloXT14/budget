import { StyleSheet } from "react-native"

import { colors, typography } from "@/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
  },
  title: {
    flexGrow: 1,
    color: colors.gray[700],
    fontSize: typography.title.sm.size,
    fontFamily: typography.title.sm.weight,
    lineHeight: typography.title.sm.lineHeight,
  },

  body: {
    padding: 20,
    paddingBottom: 32,
    gap: 20,
  },

  section: {
    gap: 16,
  },
  sectionTitle: {
    color: colors.gray[500],
    fontSize: typography.text.xs.size,
    fontFamily: typography.text.xs.weight,
    lineHeight: typography.text.xs.lineHeight,
  },

  list: {
    gap: 12,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  optionLabel: {
    color: colors.gray[600],
    fontSize: typography.text.md.size,
    fontFamily: typography.text.md.weight,
    lineHeight: typography.text.md.lineHeight,
  },

  error: {
    color: colors.danger.base,
    fontSize: typography.text.sm.size,
    fontFamily: typography.text.sm.weight,
    lineHeight: typography.text.sm.lineHeight,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    padding: 20,
    paddingBottom: 40,
    borderTopWidth: 1,
    borderTopColor: colors.gray[200],
  },
})
