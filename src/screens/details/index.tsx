import { ScrollView, StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import type { AppRoutesProps } from "@/routes/app-routes"

import { colors } from "@/theme"
import { BUDGETS } from "@/data/budgets"

import { Header } from "./components/header"
import { BudgetInfo } from "./components/budget-info"
import { ServicesList } from "./components/services-list"
import { Footer } from "./components/footer"

export const Details = ({ route }: AppRoutesProps<"details">) => {
  const { params } = route

  const budget = BUDGETS.find((item) => item.id === params.budgetId)

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
        </View>
      </ScrollView>

      <Footer />
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
