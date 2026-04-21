import { Text, View } from "react-native"

import { colors } from "@/shared/theme"
import { styles } from "./styles"

import { Icon } from "@/shared/components/icon"
import { Button, ButtonText } from "@/shared/components/button"
import { Item } from "./components/item"

import type { QuoteItem } from "@/shared/interfaces/quote"

type QuoteItemsSectionProps = {
  items?: QuoteItem[]
  onEditItem: (item: QuoteItem) => void
  onAddItem: () => void
}

export const QuoteItemsSection = ({
  items,
  onEditItem,
  onAddItem,
}: QuoteItemsSectionProps) => {
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
          <Item key={item.id} item={item} onEdit={() => onEditItem(item)} />
        ))}

        <Button variant="secondary" onPress={() => onAddItem()}>
          <Icon name="plus" size={24} color={colors.purple.base} />
          <ButtonText variant="secondary">Adicionar serviço</ButtonText>
        </Button>
      </View>
    </View>
  )
}
