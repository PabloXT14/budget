import { Text, View } from "react-native"

import { styles } from "./styles"

import { formatPriceFromCents } from "@/shared/utils/format-price"

import type { QuoteItem } from "@/shared/interfaces/quote"

type ItemProps = {
  item: QuoteItem
}

export const Item = ({ item }: ItemProps) => {
  return (
    <View style={styles.container} key={item.id}>
      {/* DESCRIPTION */}
      <View style={styles.description}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.description}</Text>
      </View>

      {/* PRICE */}
      <View style={styles.price}>
        <View style={styles.currencyContainer}>
          <Text style={styles.currency}>R$</Text>
          <Text style={styles.value}>
            {formatPriceFromCents({ price: item.unitPriceInCents })}
          </Text>
        </View>
        <Text style={styles.quantity}>Qt: {item.quantity}</Text>
      </View>
    </View>
  )
}
