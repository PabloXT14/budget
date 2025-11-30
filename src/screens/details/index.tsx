import { ScrollView, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import type { AppRoutesProps } from "@/routes/app-routes"

import { colors } from "@/theme"
import { BUDGETS } from "@/data/budgets"

import { Header } from "./components/header"
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
      <ScrollView contentContainerStyle={styles.content} />

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
    flex: 1,
  },
})
