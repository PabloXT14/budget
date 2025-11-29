import { StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import type { AppRoutesProps } from "@/routes/app-routes"

import { colors } from "@/theme"

import { Header } from "./components/header"
import { Search } from "./components/search"
import { BudgetList } from "./components/budget-list"

export const Home = (_props: AppRoutesProps<"home">) => (
  <SafeAreaView style={styles.container}>
    <Header />

    <View style={styles.content}>
      <Search />

      <BudgetList />
    </View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    gap: 24,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
})
