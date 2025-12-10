import { ScrollView, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import type { AppRoutesProps } from "@/routes/app-routes"

import { colors } from "@/theme"

import { Header } from "./components/header"
import { Info } from "./components/info"
import { StatusSection } from "./components/status-section"
import { ServicesSection } from "./components/services-section"

import { BUDGETS } from "@/data/budgets"
import { PriceSection } from "./components/price-section"

export const CreateEditBudget = ({
  route,
}: AppRoutesProps<"createEditBudget">) => {
  const { params } = route

  const budgetId = params?.budgetId

  const budget = BUDGETS.find((item) => item.id === budgetId)

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      {/* CONTENT */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Info title={budget?.title} client={budget?.client} />
        <StatusSection status={budget?.status} />
        <ServicesSection services={budget?.items} />
        <PriceSection
          services={budget?.items}
          discountPercentage={budget?.discountPercentage}
        />
      </ScrollView>
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
})
