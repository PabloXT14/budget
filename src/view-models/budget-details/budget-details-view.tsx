import { ScrollView, StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { colors } from "@/shared/theme"
import { BUDGETS } from "@/shared/data/budgets"

import { Header } from "./components/header"
import { BudgetInfo } from "./components/budget-info"
import { ServicesList } from "./components/services-list"
import { ServicesPrice } from "./components/services-price"
import { Footer } from "./components/footer"

import type { useBudgetDetailsViewModel } from "./use-budget-details-view-model"

type BudgetDetailsViewProps = ReturnType<typeof useBudgetDetailsViewModel>

export const BudgetDetailsView = ({ budgetId }: BudgetDetailsViewProps) => {
  const budget = BUDGETS.find((item) => item.id === budgetId)

  if (!budget) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header budgetId={budget.id} status={budget.status} />

      {/* CONTENT */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <BudgetInfo data={budget} />

        <View style={styles.services}>
          <ServicesList items={budget.items} />

          <ServicesPrice
            items={budget.items}
            discountPercentage={budget.discountPercentage}
          />
        </View>
      </ScrollView>

      <Footer budgetId={budget.id} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flexGrow: 1,
    gap: 20,
    padding: 20,
  },
  services: {
    gap: 8,
  },
})
