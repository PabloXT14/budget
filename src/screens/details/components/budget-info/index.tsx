import { Text, View } from "react-native"
import dayjs from "dayjs"

import { Icon } from "@/components/shared/icon"

import type { Budget } from "@/@types/budget"

import { colors } from "@/theme"
import { styles } from "./styles"

type BudgetInfoProps = {
  data: Pick<Budget, "title" | "client" | "createdAt" | "updatedAt">
}

export const BudgetInfo = ({ data }: BudgetInfoProps) => {
  const createdAt = dayjs(data.createdAt).format("DD/MM/YYYY")
  const updatedAt = dayjs(data.updatedAt).format("DD/MM/YYYY")

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        {/* ICON */}
        <View style={styles.icon}>
          <Icon name="shop" size={20} color={colors.purple.base} />
        </View>

        {/* TITLE */}
        <Text style={styles.title}>{data.title}</Text>
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        {/* TOP */}
        <View style={styles.top}>
          <Text style={styles.label}>Cliente</Text>
          <Text style={styles.value}>{data.client}</Text>
        </View>

        {/* BOTTOM */}
        <View style={styles.bottom}>
          {/* CREATED */}
          <View style={styles.created}>
            <Text style={styles.label}>Criado em</Text>
            <Text style={styles.value}>{createdAt}</Text>
          </View>

          {/* UPDATED */}
          <View style={styles.updated}>
            <Text style={styles.label}>Atualizado em</Text>
            <Text style={styles.value}>{updatedAt}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
