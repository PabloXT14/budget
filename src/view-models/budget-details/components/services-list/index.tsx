import { Text, View } from "react-native"

import { styles } from "./styles"

import { colors } from "@/shared/theme"

import { Icon } from "@/shared/components/icon"
import { ServiceItem } from "./components/service-item"

import type { BudgetItem } from "@/shared/types/budget"

type ServicesListProps = {
  items: BudgetItem[]
}

export const ServicesList = ({ items }: ServicesListProps) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Icon name="noteWhiteText" size={16} color={colors.purple.base} />

      <Text style={styles.title}>Serviços inclusos</Text>
    </View>

    <View style={styles.list}>
      {items.map((item) => (
        <ServiceItem key={item.id} item={item} />
      ))}
    </View>
  </View>
)
