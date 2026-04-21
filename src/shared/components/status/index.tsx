import { Text, View } from "react-native"

import { getStatusStyles, getIndicatorStyles, getTextStyles } from "./styles"

import type { QuoteStatus } from "@/shared/interfaces/quote"

type StatusProps = {
  variant: QuoteStatus
}

export const Status = ({ variant }: StatusProps) => (
  <View style={getStatusStyles(variant)}>
    <View style={getIndicatorStyles(variant)} />

    <Text style={getTextStyles(variant)}>{variant}</Text>
  </View>
)
