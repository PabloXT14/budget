import { Text, TouchableOpacity, View } from "react-native"

import { colors } from "@/theme"
import { styles } from "./styles"

import { Icon } from "@/components/shared/icon"
import { Button, ButtonText } from "@/components/shared/button"

import type { BudgetItem } from "@/@types/budget"

type ServicesSectionProps = {
  services?: BudgetItem[]
}

const CENTS_TO_CURRENCY = 100

export const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Icon name="noteWhiteText" size={16} color={colors.purple.base} />

        <Text style={styles.title}>Serviços inclusos</Text>
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        {services?.map((item) => {
          const totalItemPrice =
            (item.unitPriceInCents * item.quantity) / CENTS_TO_CURRENCY

          const formattedTotalPrice = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
            .format(totalItemPrice)
            .replace("R$", "")
            .trim()

          return (
            <View key={item.id} style={styles.item}>
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
                  <Text style={styles.value}>{formattedTotalPrice}</Text>
                </View>

                <Text style={styles.quantity}>Qt: {item.quantity}</Text>
              </View>

              <TouchableOpacity activeOpacity={0.6}>
                <Icon name="editPen" size={20} color={colors.purple.base} />
              </TouchableOpacity>
            </View>
          )
        })}

        <Button variant="secondary">
          <Icon name="plus" size={24} color={colors.purple.base} />
          <ButtonText variant="secondary">Adicionar serviço</ButtonText>
        </Button>
      </View>
    </View>
  )
}
