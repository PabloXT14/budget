import { Text, View } from "react-native"

import { getStatusStyles, getIndicatorStyles, getTextStyles } from "./styles"

import type { BudgetStatus } from "@/@types/budget"

type StatusProps = {
  variant: BudgetStatus
}

export const Status = ({ variant }: StatusProps) => (
  <View style={getStatusStyles(variant)}>
    <View style={getIndicatorStyles(variant)} />

    <Text style={getTextStyles(variant)}>{variant}</Text>
  </View>
)
