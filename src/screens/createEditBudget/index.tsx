import { ScrollView, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import type { AppRoutesProps } from "@/routes/app-routes"

import { colors } from "@/theme"

import { Header } from "./components/header"
import { Info } from "./components/info"
import { StatusSection } from "./components/status-section"

export const CreateEditBudget = ({
  route,
}: AppRoutesProps<"createEditBudget">) => {
  const { params } = route

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      {/* CONTENT */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Info />
        <StatusSection />
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
