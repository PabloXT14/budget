import { StyleSheet } from "react-native"

import { colors, typography } from "@/theme"

import type { ButtonVariant } from "."

export const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 9999,
    borderWidth: 1,
  },

  // Variantes de fundo
  primary: {
    backgroundColor: colors.purple.base,
    borderColor: colors.purple.base,
  },

  secondary: {
    backgroundColor: colors.gray[100],
    borderColor: colors.gray[300],
  },

  danger: {
    backgroundColor: colors.gray[100],
    borderColor: colors.gray[300],
  },

  // Estilos de texto
  textBase: {
    fontSize: typography.title.sm.size,
    fontFamily: typography.title.sm.weight,
  },

  textPrimary: {
    color: colors.white,
  },

  textSecondary: {
    color: colors.purple.base,
  },

  textDanger: {
    color: colors.danger.base,
  },
})

// Função para escolher estilo pela variante
export function getButtonStyles(variant: ButtonVariant = "primary") {
  return [
    styles.base,
    variant === "primary" && styles.primary,
    variant === "secondary" && styles.secondary,
    variant === "danger" && styles.danger,
  ]
}

export function getTextStyles(variant: ButtonVariant = "primary") {
  return [
    styles.textBase,
    variant === "primary" && styles.textPrimary,
    variant === "secondary" && styles.textSecondary,
    variant === "danger" && styles.textDanger,
  ]
}
