import { Text, View } from "react-native"

import { formatPrice } from "@/utils/format-price"
import { colors } from "@/theme"
import { styles } from "./styles"

import { Icon } from "@/components/shared/icon"

import type { BudgetItem } from "@/@types/budget"

type ServicesPriceProps = {
  items: BudgetItem[]
  discountPercentage?: number
}

const CENTS_TO_CURRENCY = 100
const PERCENT_MULTIPLIER = 100

export const ServicesPrice = ({
  items,
  discountPercentage = 0,
}: ServicesPriceProps) => {
  const subtotal = items.reduce(
    (acc, item) =>
      acc + (item.quantity * item.unitPriceInCents) / CENTS_TO_CURRENCY,
    0
  )

  const discount = subtotal * discountPercentage

  const total = subtotal - discount

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon name="creditCard" size={20} color={colors.purple.base} />
      </View>

      <View style={styles.content}>
        {/* TOP */}
        <View style={styles.top}>
          {/* SUBTOTAL */}
          <View style={styles.subtotal}>
            <Text style={styles.subtotalLabel}>Subtotal</Text>
            <Text style={styles.subtotalValue}>
              {formatPrice({ price: subtotal })}
            </Text>
          </View>

          {/* DISCOUNT */}
          <View style={styles.discount}>
            <View style={styles.discountInfo}>
              <Text style={styles.discountLabel}>Desconto</Text>

              <View style={styles.tag}>
                <Text style={styles.tagText}>
                  {discountPercentage * PERCENT_MULTIPLIER}% off
                </Text>
              </View>
            </View>

            <Text style={styles.discountValue}>
              - {formatPrice({ price: discount })}
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.bottom}>
          <Text style={styles.totalLabel}>Investimento total</Text>

          <View style={styles.total}>
            <Text style={styles.currency}>R$</Text>
            <Text style={styles.price}>
              {formatPrice({ price: total, showSymbol: false })}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
