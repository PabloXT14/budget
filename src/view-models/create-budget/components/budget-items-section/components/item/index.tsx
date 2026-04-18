import { Text, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"
import { colors } from "@/shared/theme"

import { Icon } from "@/shared/components/icon"

import type { BudgetItem } from "@/shared/types/budget"
import { formatPriceFromCents } from "@/shared/utils/format-price"

type ItemProps = {
  item: BudgetItem
}

export const Item = ({ item }: ItemProps) => {
  const totalItemPriceInCents = item.unitPriceInCents * item.quantity

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.infoTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.infoDescription} numberOfLines={1}>
          {item.description}
        </Text>
      </View>

      <View style={styles.price}>
        <View style={styles.priceValue}>
          <Text style={styles.currency}>R$</Text>
          <Text style={styles.value}>
            {formatPriceFromCents({ price: totalItemPriceInCents })}
          </Text>
        </View>

        <Text style={styles.quantity}>Qt: {item.quantity}</Text>
      </View>

      <TouchableOpacity activeOpacity={0.6}>
        <Icon name="editPen" size={20} color={colors.purple.base} />
      </TouchableOpacity>
    </View>
  )
}
