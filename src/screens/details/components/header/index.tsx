import { Text, TouchableOpacity, View } from "react-native"
import { type NavigationProp, useNavigation } from "@react-navigation/native"

import { styles } from "./styles"
import { colors } from "@/theme"
import { Icon } from "@/components/shared/icon"
import { Status } from "@/components/shared/status"

import type { AppRoutesList } from "@/routes/app-routes"
import type { BudgetStatus } from "@/@types/budget"

type HeaderProps = {
  budgetId: string
  status: BudgetStatus
}

const BUDGET_ID_DISPLAY_LENGTH = 5

export const Header = ({ budgetId, status }: HeaderProps) => {
  const navigation = useNavigation<NavigationProp<AppRoutesList>>()

  return (
    <View style={styles.container}>
      {/* BACK BUTTON */}
      <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
        <Icon name="chevronLeft" size={24} color={colors.gray[600]} />
      </TouchableOpacity>

      {/* TITLE */}
      <View style={styles.info}>
        <Text style={styles.title}>Orçamento</Text>
        <Text style={styles.subtitle}>
          {" "}
          #{budgetId.slice(0, BUDGET_ID_DISPLAY_LENGTH)}
        </Text>
      </View>

      {/* STATUS */}
      <Status variant={status} />
    </View>
  )
}
