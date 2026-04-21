import {
  Text,
  TouchableOpacity,
  View,
  type TouchableOpacityProps,
} from "react-native"
import { type NavigationProp, useNavigation } from "@react-navigation/native"

import { formatPriceFromCents } from "@/shared/utils/format-price"
import { styles } from "./styles"

import { Status } from "@/shared/components/status"

import type { Quote } from "@/shared/interfaces/quote"
import type { AppRoutesList } from "@/navigation/app-routes"

type QuoteCardProps = TouchableOpacityProps & {
  data: Quote
}
export const QuoteCard = ({ data, style, ...rest }: QuoteCardProps) => {
  const navigation = useNavigation<NavigationProp<AppRoutesList>>()

  const totalPriceInCents = data.items.reduce(
    (acc, item) => acc + item.quantity * item.unitPriceInCents,
    0
  )

  const totalPriceWithDiscount = data.discountPercentage
    ? totalPriceInCents - totalPriceInCents * data.discountPercentage
    : totalPriceInCents

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate("quoteDetails", { quoteId: data.id })}
      style={[styles.container, style]}
      {...rest}
    >
      {/* LEFT CONTENT */}
      <View style={styles.leftContent}>
        <Text style={styles.title} numberOfLines={2}>
          {data.title}
        </Text>

        <Text style={styles.subtitle} numberOfLines={1}>
          {data.customer.name}
        </Text>
      </View>

      {/* RIGHT CONTENT */}
      <View style={styles.rightContent}>
        <Status variant={data.status} />

        {/* PRICE */}
        <View style={styles.price}>
          <Text style={styles.priceCurrency}>R$</Text>
          <Text style={styles.priceValue} numberOfLines={1}>
            {formatPriceFromCents({
              price: totalPriceWithDiscount,
            })}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
