import { StyleSheet } from "react-native"

import { colors, typography } from "@/theme"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    gap: 16,
    borderBottomWidth: 1,
    borderColor: colors.gray[200],
  },

  info: {
    flex: 1,
    gap: 2,
    justifyContent: "center",
  },

  title: {
    color: colors.purple.base,
    fontSize: typography.title.lg.size,
    fontFamily: typography.title.lg.weight,
    lineHeight: typography.title.lg.lineHeight,
  },

  subtitle: {
    color: colors.gray[500],
    fontSize: typography.text.sm.size,
    fontFamily: typography.text.sm.weight,
    lineHeight: typography.text.sm.lineHeight,
  },
})
