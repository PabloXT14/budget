import { Text, View } from "react-native"

import { styles } from "./styles"

import { formatPriceFromCents } from "@/shared/utils/format-price"

import type { BudgetItem } from "@/shared/types/budget"

type ServiceItemProps = {
  item: BudgetItem
}

export const ServiceItem = ({ item }: ServiceItemProps) => {
  const totalItemPriceInCents = item.unitPriceInCents * item.quantity

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
            {formatPriceFromCents({ price: totalItemPriceInCents })}
          </Text>
        </View>
        <Text style={styles.quantity}>Qt: {item.quantity}</Text>
      </View>
    </View>
  )
}
