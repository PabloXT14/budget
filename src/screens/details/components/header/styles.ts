import { colors, typography } from "@/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
  },

  info: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    color: colors.gray[700],
    fontSize: typography.title.sm.size,
    fontFamily: typography.title.sm.weight,
    lineHeight: typography.title.sm.lineHeight,
  },

  subtitle: {
    color: colors.gray[700],
    fontSize: typography.title.sm.size,
    fontFamily: typography.title.sm.weight,
    lineHeight: typography.title.sm.lineHeight,
  },
})
