import { Text, TouchableOpacity, View } from "react-native"

import { formatPrice } from "@/shared/utils/format-price"
import { colors } from "@/shared/theme"
import { styles } from "./styles"

import { Icon } from "@/shared/components/icon"
import { Button, ButtonText } from "@/shared/components/button"

import { useBottomSheet } from "@/shared/contexts/bottom-sheet.context"

import type { BudgetItem } from "@/shared/types/budget"
import { AddEditService } from "../add-edit-service"

type ServicesSectionProps = {
  services?: BudgetItem[]
}

const CENTS_TO_CURRENCY = 100

export const ServicesSection = ({ services }: ServicesSectionProps) => {
  const { openBottomSheet } = useBottomSheet()

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
                  <Text style={styles.value}>
                    {formatPrice({ price: totalItemPrice, showSymbol: false })}
                  </Text>
                </View>

                <Text style={styles.quantity}>Qt: {item.quantity}</Text>
              </View>

              <TouchableOpacity activeOpacity={0.6}>
                <Icon name="editPen" size={20} color={colors.purple.base} />
              </TouchableOpacity>
            </View>
          )
        })}

        <Button
          variant="secondary"
          onPress={() =>
            openBottomSheet({
              content: <AddEditService />,
              config: { snapPoints: ["70%"] },
            })
          }
        >
          <Icon name="plus" size={24} color={colors.purple.base} />
          <ButtonText variant="secondary">Adicionar serviço</ButtonText>
        </Button>
      </View>
    </View>
  )
}
