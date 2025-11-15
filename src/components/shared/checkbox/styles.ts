import { colors } from "@/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  base: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: colors.gray[400],
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    backgroundColor: colors.purple.base,
    borderColor: colors.purple.base,
  },
})
