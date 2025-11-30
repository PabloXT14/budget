import { colors, typography } from "@/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[100],
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray[200],
  },

  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 12,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
  },

  icon: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: colors.purple.light,
  },

  title: {
    color: colors.gray[700],
    fontSize: typography.title.lg.size,
    fontFamily: typography.title.lg.weight,
    lineHeight: typography.title.lg.lineHeight,
    flexShrink: 1, // Para o texto nunca ultrapassar o container
  },

  content: {
    padding: 16,
    gap: 12,
  },

  label: {
    color: colors.gray[600],
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

  top: {
    gap: 4,
  },

  bottom: {
    flexDirection: "row",
    gap: 12,
  },

  created: {
    flex: 1,
    gap: 4,
  },

  updated: {
    flex: 1,
    gap: 4,
  },
})
