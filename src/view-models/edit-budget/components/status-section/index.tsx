import { useState } from "react"
import { FlatList, Text, View } from "react-native"

import { colors } from "@/shared/theme"
import { styles } from "./styles"

import { Icon } from "@/shared/components/icon"
import { BudgetStatus } from "@/shared/types/budget"
import { Status } from "@/shared/components/status"
import { Radio } from "@/shared/components/radio"

type StatusSectionProps = {
  status?: BudgetStatus
}

export const StatusSection = ({ status }: StatusSectionProps) => {
  const [selectedStatus, setSelectedStatus] = useState<BudgetStatus>(
    status ?? BudgetStatus.DRAFT
  )

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Icon name="tag" size={16} color={colors.purple.base} />

        <Text style={styles.title}>Status</Text>
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        <FlatList
          data={Object.values(BudgetStatus)}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.option}>
              <Radio
                value={item === selectedStatus}
                onValueChange={() => setSelectedStatus(item)}
              />

              <Status variant={item} />
            </View>
          )}
          scrollEnabled={false} // para não dar erro de lista virtualizada com o scrollview pai
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={{ gap: 12 }}
          contentContainerStyle={{ gap: 12 }}
        />
      </View>
    </View>
  )
}
