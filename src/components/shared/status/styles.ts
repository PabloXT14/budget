import { StyleSheet } from "react-native"

import { colors, typography } from "@/theme"

import type { StatusVariant } from "."

export const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },

  // Variantes de fundo
  sent: {
    backgroundColor: colors.info.light,
  },

  draft: {
    backgroundColor: colors.gray[300],
  },

  approved: {
    backgroundColor: colors.success.light,
  },

  declined: {
    backgroundColor: colors.danger.light,
  },

  // Estilos de indicador
  indicatorBase: {
    width: 8,
    height: 8,
    borderRadius: 9999,
  },

  indicatorSent: {
    backgroundColor: colors.info.base,
  },

  indicatorDraft: {
    backgroundColor: colors.gray[400],
  },

  indicatorApproved: {
    backgroundColor: colors.success.base,
  },

  indicatorDeclined: {
    backgroundColor: colors.danger.base,
  },

  // Estilos de texto
  textBase: {
    color: colors.gray[600],
    fontSize: typography.title.xs.size,
    fontFamily: typography.title.xs.weight,
  },

  textSent: {
    color: colors.info.dark,
  },

  textDraft: {
    color: colors.gray[500],
  },

  textApproved: {
    color: colors.success.dark,
  },

  textDeclined: {
    color: colors.danger.dark,
  },
})

export function getStatusStyles(status: StatusVariant) {
  return [
    styles.base,
    status === "sent" && styles.sent,
    status === "draft" && styles.draft,
    status === "approved" && styles.approved,
    status === "declined" && styles.declined,
  ]
}

export function getIndicatorStyles(status: StatusVariant) {
  return [
    styles.indicatorBase,
    status === "sent" && styles.indicatorSent,
    status === "draft" && styles.indicatorDraft,
    status === "approved" && styles.indicatorApproved,
    status === "declined" && styles.indicatorDeclined,
  ]
}

export function getTextStyles(status: StatusVariant) {
  return [
    styles.textBase,
    status === "sent" && styles.textSent,
    status === "draft" && styles.textDraft,
    status === "approved" && styles.textApproved,
    status === "declined" && styles.textDeclined,
  ]
}
