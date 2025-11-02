import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import type { AppRoutesProps } from "@/routes/app-routes"

import { colors, typography } from "@/theme"
import { Icon } from "@/components/shared/icon"

export const Home = ({ navigation }: AppRoutesProps<"home">) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Home</Text>

    <TouchableOpacity
      onPress={() => navigation.navigate("createEditBudget")}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Create</Text>

      <Icon name="plus" color={colors.white} />
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() =>
        navigation.navigate("createEditBudget", { budgetId: "123" })
      }
      style={styles.button}
    >
      <Text style={styles.buttonText}>Edit</Text>

      <Icon name="editPen" color={colors.white} />
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => navigation.navigate("details", { budgetId: "123" })}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Details</Text>

      <Icon name="chevronRight" color={colors.white} />
    </TouchableOpacity>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  text: {
    color: colors.black,
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: colors.purple.base,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 9999,
  },
  buttonText: {
    color: colors.white,
    fontSize: typography.title.sm.size,
    fontFamily: typography.title.sm.weight,
    lineHeight: typography.title.sm.lineHeight,
  },
})
