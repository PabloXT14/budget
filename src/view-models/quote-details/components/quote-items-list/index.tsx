import { Text, View } from "react-native"

import { styles } from "./styles"

import { colors } from "@/shared/theme"

import { Icon } from "@/shared/components/icon"
import { Item } from "./components/item"

import type { QuoteItem } from "@/shared/interfaces/quote"

type QuoteItemsListProps = {
  items: QuoteItem[]
}

export const QuoteItemsList = ({ items }: QuoteItemsListProps) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Icon name="noteWhiteText" size={16} color={colors.purple.base} />

      <Text style={styles.title}>Serviços inclusos</Text>
    </View>

    <View style={styles.list}>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </View>
  </View>
)
