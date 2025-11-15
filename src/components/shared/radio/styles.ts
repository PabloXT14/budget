import { colors } from "@/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  base: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: colors.gray[400],
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    backgroundColor: colors.purple.base,
    borderColor: colors.purple.base,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 9999,
    backgroundColor: colors.white,
  },
})
