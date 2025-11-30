import { Text, View } from "react-native"
import { type NavigationProp, useNavigation } from "@react-navigation/native"

import { styles } from "./styles"
import { colors } from "@/theme"

import { Button, ButtonText } from "@/components/shared/button"
import { Icon } from "@/components/shared/icon"

import type { AppRoutesList } from "@/routes/app-routes"

import { BUDGETS } from "@/data/budgets"
import { BudgetStatus } from "@/@types/budget"

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
      <Button onPress={() => navigation.navigate("createEditBudget")}>
        <Icon name="plus" size={24} color={colors.white} />
        <ButtonText>Novo</ButtonText>
      </Button>
    </View>
  )
}
