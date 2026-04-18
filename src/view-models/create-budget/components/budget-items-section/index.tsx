import { Text, View } from "react-native"

import { colors } from "@/shared/theme"
import { styles } from "./styles"

import { Icon } from "@/shared/components/icon"
import { Button, ButtonText } from "@/shared/components/button"
import { AddEditService } from "@/shared/components/add-edit-service"
import { Item } from "./components/item"

import { useBottomSheet } from "@/shared/contexts/bottom-sheet.context"

import type { BudgetItem } from "@/shared/types/budget"

type BudgetItemsSectionProps = {
  items?: BudgetItem[]
}

export const BudgetItemsSection = ({ items }: BudgetItemsSectionProps) => {
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
        {items?.map((item) => (
          <Item key={item.id} item={item} />
        ))}

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
