import { StyleSheet, Text, View } from "react-native"

import type { AppRoutesProps } from "@/routes/app-routes"

import { colors } from "@/theme"

export const CreateEditBudget = ({
  route,
}: AppRoutesProps<"createEditBudget">) => {
  const { params } = route

  return (
    <View style={styles.container}>
      <Text style={styles.text}>CreateEditBudget {params?.budgetId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.black,
    fontSize: 20,
    fontWeight: "bold",
  },
})
