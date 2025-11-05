import { Text, View } from "react-native"

import { getStatusStyles, getIndicatorStyles, getTextStyles } from "./styles"

export type StatusVariant = "sent" | "draft" | "approved" | "declined"

type StatusProps = {
  variant: StatusVariant
}

const STATUS_TITLE: Record<StatusVariant, string> = {
  sent: "Enviado",
  draft: "Rascunho",
  approved: "Aprovado",
  declined: "Recusado",
}

export const Status = ({ variant }: StatusProps) => (
  <View style={getStatusStyles(variant)}>
    <View style={getIndicatorStyles(variant)} />

    <Text style={getTextStyles(variant)}>{STATUS_TITLE[variant]}</Text>
  </View>
)
