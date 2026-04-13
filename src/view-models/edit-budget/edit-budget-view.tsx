import { StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { colors } from "@/shared/theme/colors"

import { DismissKeyboardView } from "@/shared/components/dismiss-keyboard-view"
import { Header } from "./components/header"
import { Info } from "./components/info"
import { StatusSection } from "./components/status-section"
import { ServicesSection } from "./components/services-section"
import { PriceSection } from "./components/price-section"

import type { useEditBudgetViewModel } from "./use-edit-budget-view-model"

type EditBudgetViewProps = ReturnType<typeof useEditBudgetViewModel>

export const EditBudgetView = ({ budget }: EditBudgetViewProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      {/* CONTENT */}
      <DismissKeyboardView>
        <View style={styles.content}>
          <Info title={budget.title} client={budget.client} />

          <StatusSection status={budget.status} />

          <ServicesSection services={budget.items} />

          <PriceSection
            services={budget.items}
            discountPercentage={budget.discountPercentage}
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
