import { useState } from "react"
import { FlatList, Text, View } from "react-native"

import { colors } from "@/shared/theme"
import { styles } from "./styles"

import { Icon } from "@/shared/components/icon"
import { QuoteStatus } from "@/shared/interfaces/quote"
import { Status } from "@/shared/components/status"
import { Radio } from "@/shared/components/radio"

type StatusSectionProps = {
  status?: QuoteStatus
}

export const StatusSection = ({ status }: StatusSectionProps) => {
  const [selectedStatus, setSelectedStatus] = useState<QuoteStatus>(
    status ?? QuoteStatus.DRAFT
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
          data={Object.values(QuoteStatus)}
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
