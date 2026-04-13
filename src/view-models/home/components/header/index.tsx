import { Text, View } from "react-native"
import { type NavigationProp, useNavigation } from "@react-navigation/native"

import { styles } from "./styles"
import { colors } from "@/shared/theme"

import { Button, ButtonText } from "@/shared/components/button"
import { Icon } from "@/shared/components/icon"

import type { AppRoutesList } from "@/navigation/app-routes"

import { BUDGETS } from "@/shared/data/budgets"
import { BudgetStatus } from "@/shared/types/budget"

export const Header = () => {
  const navigation = useNavigation<NavigationProp<AppRoutesList>>()

  const totalDraftBudgets = BUDGETS.filter(
    (budget) => budget.status === BudgetStatus.DRAFT
  ).length

  return (
    <View style={styles.container}>
      {/* INFO */}
      <View style={styles.info}>
        <Text style={styles.title}>Orçamentos</Text>
        <Text style={styles.subtitle}>
          Você tem {totalDraftBudgets} item em rascunho
        </Text>
      </View>

      {/* NEW BUDGET */}
      <Button onPress={() => navigation.navigate("createBudget")}>
        <Icon name="plus" size={24} color={colors.white} />
        <ButtonText>Novo</ButtonText>
      </Button>
    </View>
  )
}
