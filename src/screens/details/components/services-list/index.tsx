import { Text, View } from "react-native"

import { colors } from "@/theme"
import { styles } from "./styles"

import { Icon } from "@/components/shared/icon"

import type { BudgetItem } from "@/@types/budget"

type ServicesListProps = {
  items: BudgetItem[]
}

const CENTS_TO_CURRENCY = 100

export const ServicesList = ({ items }: ServicesListProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="noteWhiteText" size={16} color={colors.purple.base} />

        <Text style={styles.title}>Serviços inclusos</Text>
      </View>

      <View style={styles.list}>
        {items.map((item) => {
          const totalItemPrice =
            (item.unitPriceInCents * item.quantity) / CENTS_TO_CURRENCY

          const formattedUnitPrice = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
            .format(totalItemPrice)
            .replace("R$", "")
            .trim()

          return (
            <View style={styles.item} key={item.id}>
              {/* DESCRIPTION */}
              <View style={styles.itemDescription}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemSubtitle}>{item.description}</Text>
              </View>

              {/* PRICE */}
              <View style={styles.itemPrice}>
                <View style={styles.itemCurrencyContainer}>
                  <Text style={styles.itemCurrency}>R$</Text>
                  <Text style={styles.itemValue}>{formattedUnitPrice}</Text>
                </View>
                <Text style={styles.itemQuantity}>Qt: {item.quantity}</Text>
              </View>
            </View>
          )
        })}
      </View>
    </View>
  )
}
