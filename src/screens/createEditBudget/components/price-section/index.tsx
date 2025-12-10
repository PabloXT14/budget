import { useState } from "react"
import { Text, View } from "react-native"

import { formatPrice } from "@/utils/format-price"
import { colors } from "@/theme"
import { styles } from "./styles"

import { Icon } from "@/components/shared/icon"
import { Input } from "@/components/shared/input"

import type { BudgetItem } from "@/@types/budget"

type PriceSectionProps = {
  services?: BudgetItem[]
  discountPercentage?: number
}

const CENTS_TO_CURRENCY = 100
const PERCENTAGE_TO_NUMBER = 100

export const PriceSection = ({
  services = [],
  discountPercentage = 0,
}: PriceSectionProps) => {
  const [discountInput, setDiscountInput] = useState(
    discountPercentage * PERCENTAGE_TO_NUMBER
  )

  const subtotal = services.reduce(
    (acc, item) =>
      acc + (item.quantity * item.unitPriceInCents) / CENTS_TO_CURRENCY,
    0
  )

  const discount = subtotal * (discountInput / PERCENTAGE_TO_NUMBER)

  const total = subtotal - discount

  const formattedSubtotal = formatPrice({ price: subtotal, showSymbol: false })
  const formattedDiscount = formatPrice({ price: discount, showSymbol: false })
  const formattedTotal = formatPrice({ price: total, showSymbol: false })

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Icon name="creditCard" size={16} color={colors.purple.base} />

        <Text style={styles.title}>Investimento</Text>
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        {/* SUBTOTAL */}
        <View style={styles.subtotalContainer}>
          <Text style={styles.subtotalTitle}>Subtotal</Text>

          <View style={styles.subtotalValue}>
            <Text style={styles.itemQuantity}>{services.length} itens</Text>

            <View style={styles.itemPrice}>
              <Text style={styles.currency}>R$</Text>
              <Text style={styles.value}>{formattedSubtotal}</Text>
            </View>
          </View>
        </View>

        {/* DISCOUNT */}
        <View style={styles.discountContainer}>
          <View style={styles.discountInput}>
            <Text style={styles.discountTitle}>Desconto</Text>

            <View style={styles.discountPercentContainer}>
              <Input.Container>
                <Input.Field
                  keyboardType="numeric"
                  value={String(discountInput)}
                  onChangeText={(text) => setDiscountInput(Number(text))}
                />

                <Text style={styles.discountPercent}>%</Text>
              </Input.Container>
            </View>
          </View>

          <Text style={styles.discountValue}>- R$ {formattedDiscount}</Text>
        </View>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Valor total</Text>

        <View style={styles.footerValue}>
          {discount > 0 && (
            <Text style={styles.priceWithoutDiscount}>
              R$ {formattedSubtotal}
            </Text>
          )}

          <View style={styles.totalPrice}>
            <Text style={styles.totalCurrency}>R$</Text>
            <Text style={styles.totalValue}>{formattedTotal}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
