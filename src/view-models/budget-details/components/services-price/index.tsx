import { Text, View } from "react-native"

import { formatPriceFromCents } from "@/shared/utils/format-price"
import { colors } from "@/shared/theme"
import { styles } from "./styles"

import { Icon } from "@/shared/components/icon"

import type { BudgetItem } from "@/shared/types/budget"

type ServicesPriceProps = {
  items: BudgetItem[]
  discountPercentage?: number
}

const PERCENT_MULTIPLIER = 100

export const ServicesPrice = ({
  items,
  discountPercentage = 0,
}: ServicesPriceProps) => {
  const subtotalInCents = items.reduce(
    (acc, item) => acc + item.quantity * item.unitPriceInCents,
    0
  )

  const discountInCents = subtotalInCents * discountPercentage

  const totalInCents = subtotalInCents - discountInCents

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
              {formatPriceFromCents({
                price: subtotalInCents,
                showSymbol: true,
              })}
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
              -{" "}
              {formatPriceFromCents({
                price: discountInCents,
                showSymbol: true,
              })}
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.bottom}>
          <Text style={styles.totalLabel}>Investimento total</Text>

          <View style={styles.total}>
            <Text style={styles.currency}>R$</Text>
            <Text style={styles.price}>
              {formatPriceFromCents({ price: totalInCents })}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
