import { StyleSheet } from "react-native"

import { colors, typography } from "@/theme"

import { BudgetStatus } from "@/@types/budget"

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

  reject: {
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

  indicatorReject: {
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

  textReject: {
    color: colors.danger.dark,
  },
})

export function getStatusStyles(status: BudgetStatus) {
  return [
    styles.base,
    status === BudgetStatus.SENT && styles.sent,
    status === BudgetStatus.DRAFT && styles.draft,
    status === BudgetStatus.APPROVED && styles.approved,
    status === BudgetStatus.REJECTED && styles.reject,
  ]
}

export function getIndicatorStyles(status: BudgetStatus) {
  return [
    styles.indicatorBase,
    status === BudgetStatus.SENT && styles.indicatorSent,
    status === BudgetStatus.DRAFT && styles.indicatorDraft,
    status === BudgetStatus.APPROVED && styles.indicatorApproved,
    status === BudgetStatus.REJECTED && styles.indicatorReject,
  ]
}

export function getTextStyles(status: BudgetStatus) {
  return [
    styles.textBase,
    status === BudgetStatus.SENT && styles.textSent,
    status === BudgetStatus.DRAFT && styles.textDraft,
    status === BudgetStatus.APPROVED && styles.textApproved,
    status === BudgetStatus.REJECTED && styles.textReject,
  ]
}
