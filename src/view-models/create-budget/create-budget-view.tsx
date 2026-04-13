import { StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { colors } from "@/shared/theme/colors"

import { DismissKeyboardView } from "@/shared/components/dismiss-keyboard-view"
import { Header } from "./components/header"
import { Info } from "./components/info"
import { StatusSection } from "./components/status-section"
import { ServicesSection } from "./components/services-section"
import { PriceSection } from "./components/price-section"

import type { useCreateBudgetViewModel } from "./use-create-budget-view-model"

type CreateBudgetViewProps = ReturnType<typeof useCreateBudgetViewModel>

export const CreateBudgetView = ({ newBudget }: CreateBudgetViewProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      {/* CONTENT */}
      <DismissKeyboardView>
        <View style={styles.content}>
          <Info title={newBudget.title} client={newBudget.client} />

          <StatusSection status={newBudget.status} />

          <ServicesSection services={newBudget.items} />

          <PriceSection
            services={newBudget.items}
            discountPercentage={newBudget.discountPercentage}
          />
        </View>
      </DismissKeyboardView>
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
