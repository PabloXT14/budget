import { StyleSheet } from "react-native"

import { colors } from "@/theme"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: colors.gray[200],
    padding: 20,
  },
  options: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
})
