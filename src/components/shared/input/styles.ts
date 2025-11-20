import { StyleSheet } from "react-native"

import type { InputVariant } from "."
import { colors, typography } from "@/theme"

export const styles = StyleSheet.create({
  /* Container */
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 9999,
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderColor: colors.gray[300],
  },

  containerFocus: {
    borderColor: colors.purple.base,
  },

  containerDanger: {
    borderColor: colors.danger.base,
  },
  /* Field */
  field: {
    width: "100%",
    padding: 0,
    margin: 0,

    textAlignVertical: "center",

    fontSize: typography.text.md.size,
    fontFamily: typography.text.md.weight,
    lineHeight: typography.text.md.lineHeight,
    includeFontPadding: false, // Remove extra padding on Android

    color: colors.gray[700],
  },

  fieldFocus: {
    color: colors.gray[700],
  },

  fieldDanger: {
    color: colors.gray[700],
  },

  /* Label */
  label: {
    fontSize: typography.title.md.size,
    fontFamily: typography.title.md.weight,
    lineHeight: typography.title.md.lineHeight,

    color: colors.gray[600],
  },

  labelFocus: {
    color: colors.purple.base,
  },

  labelDanger: {
    color: colors.danger.base,
  },
})

export const getInputContainerStyles = (variant: InputVariant = "default") => [
  styles.container,
  variant === "focus" && styles.containerFocus,
  variant === "danger" && styles.containerDanger,
]

export const getInputFieldStyles = (variant: InputVariant = "default") => [
  styles.field,
  variant === "focus" && styles.fieldFocus,
  variant === "danger" && styles.fieldDanger,
]

export const getInputLabelStyles = (variant: InputVariant = "default") => [
  styles.label,
  variant === "focus" && styles.labelFocus,
  variant === "danger" && styles.labelDanger,
]
