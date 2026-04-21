import { StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { Header } from "./components/header"
import { Search } from "./components/search"
import { QuotesList } from "./components/quotes-list"

import { colors } from "@/shared/theme"

import type { useHomeViewModel } from "./use-home-view-model"

type HomeViewProps = ReturnType<typeof useHomeViewModel>

export const HomeView = (_props: HomeViewProps) => (
  <SafeAreaView style={styles.container}>
    <Header />

    <View style={styles.content}>
      <Search />

      <QuotesList />
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
