import { StyleSheet } from "react-native"

import { colors, typography } from "@/shared/theme"

import { QuoteStatus } from "@/shared/interfaces/quote"

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

export function getStatusStyles(status: QuoteStatus) {
  return [
    styles.base,
    status === QuoteStatus.SENT && styles.sent,
    status === QuoteStatus.DRAFT && styles.draft,
    status === QuoteStatus.APPROVED && styles.approved,
    status === QuoteStatus.REJECTED && styles.reject,
  ]
}

export function getIndicatorStyles(status: QuoteStatus) {
  return [
    styles.indicatorBase,
    status === QuoteStatus.SENT && styles.indicatorSent,
    status === QuoteStatus.DRAFT && styles.indicatorDraft,
    status === QuoteStatus.APPROVED && styles.indicatorApproved,
    status === QuoteStatus.REJECTED && styles.indicatorReject,
  ]
}

export function getTextStyles(status: QuoteStatus) {
  return [
    styles.textBase,
    status === QuoteStatus.SENT && styles.textSent,
    status === QuoteStatus.DRAFT && styles.textDraft,
    status === QuoteStatus.APPROVED && styles.textApproved,
    status === QuoteStatus.REJECTED && styles.textReject,
  ]
}
