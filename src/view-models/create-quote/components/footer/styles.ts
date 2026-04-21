import { StyleSheet } from "react-native"

import { colors } from "@/shared/theme"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.gray[200],
  },
})
