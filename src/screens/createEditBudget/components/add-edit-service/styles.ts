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

  content: {
    padding: 20,
    paddingBottom: 32,
    gap: 12,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.gray[200],
  },
})
