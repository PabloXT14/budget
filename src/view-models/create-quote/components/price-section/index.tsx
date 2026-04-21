import { useState } from "react"
import { Text, View } from "react-native"

import { formatPriceFromCents } from "@/shared/utils/format-price"
import { colors } from "@/shared/theme"
import { styles } from "./styles"

import { Icon } from "@/shared/components/icon"
import { Input } from "@/shared/components/input"

import type { QuoteItem } from "@/shared/interfaces/quote"

type PriceSectionProps = {
  quoteItems?: QuoteItem[]
  discountPercentage?: number
}

const PERCENTAGE_TO_NUMBER = 100

export const PriceSection = ({
  quoteItems = [],
  discountPercentage = 0,
}: PriceSectionProps) => {
  const [discountInput, setDiscountInput] = useState(
    discountPercentage * PERCENTAGE_TO_NUMBER
  )

  const subtotalInCents = quoteItems.reduce(
    (acc, item) => acc + item.quantity * item.unitPriceInCents,
    0
  )

  const discountInCents =
    subtotalInCents * (discountInput / PERCENTAGE_TO_NUMBER)

  const totalInCents = subtotalInCents - discountInCents

  const formattedSubtotal = formatPriceFromCents({ price: subtotalInCents })
  const formattedDiscount = formatPriceFromCents({ price: discountInCents })
  const formattedTotal = formatPriceFromCents({ price: totalInCents })

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
            <Text style={styles.itemQuantity}>{quoteItems.length} itens</Text>

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
          {discountInCents > 0 && (
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
