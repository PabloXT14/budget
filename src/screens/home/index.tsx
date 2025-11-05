import { StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import type { AppRoutesProps } from "@/routes/app-routes"

import { colors } from "@/theme"
import { Status } from "@/components/shared/status"

export const Home = (_props: AppRoutesProps<"home">) => (
  <SafeAreaView style={styles.container}>
    <Status variant="sent" />
    <Status variant="draft" />
    <Status variant="approved" />
    <Status variant="declined" />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
})
