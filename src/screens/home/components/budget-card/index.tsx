import {
  Text,
  TouchableOpacity,
  View,
  type TouchableOpacityProps,
} from "react-native"
import { type NavigationProp, useNavigation } from "@react-navigation/native"

import { formatPrice } from "@/utils/format-price"
import { styles } from "./styles"

import { Status } from "@/components/shared/status"

import type { Budget } from "@/@types/budget"
import type { AppRoutesList } from "@/routes/app-routes"

const CENTS_TO_CURRENCY = 100

type BudgetCardProps = TouchableOpacityProps & {
  data: Budget
}
export const BudgetCard = ({ data, style, ...rest }: BudgetCardProps) => {
  const navigation = useNavigation<NavigationProp<AppRoutesList>>()

  const totalPrice = data.items.reduce(
    (acc, item) =>
      acc + (item.quantity * item.unitPriceInCents) / CENTS_TO_CURRENCY,
    0
  )

  const totalPriceWithDiscount = data.discountPercentage
    ? totalPrice - totalPrice * data.discountPercentage
    : totalPrice

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate("details", { budgetId: data.id })}
      style={[styles.container, style]}
      {...rest}
    >
      {/* LEFT CONTENT */}
      <View style={styles.leftContent}>
        <Text style={styles.title} numberOfLines={2}>
          {data.title}
        </Text>

        <Text style={styles.subtitle} numberOfLines={1}>
          {data.client}
        </Text>
      </View>

      {/* RIGHT CONTENT */}
      <View style={styles.rightContent}>
        <Status variant={data.status} />

        {/* PRICE */}
        <View style={styles.price}>
          <Text style={styles.priceCurrency}>R$</Text>
          <Text style={styles.priceValue} numberOfLines={1}>
            {formatPrice({ price: totalPriceWithDiscount, showSymbol: false })}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
