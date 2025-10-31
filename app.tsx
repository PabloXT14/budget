import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato"

import { colors, typography } from "./src/theme"

import { Icon } from "@/components/shared/icon"

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} style={styles.button}>
        <Icon name="tag" color={colors.white} />
        <Text style={styles.buttonText}>Button</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: colors.purple.base,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 9999,
  },
  buttonText: {
    color: colors.white,
    fontFamily: typography.title.sm.weight,
    fontSize: typography.title.sm.size,
    lineHeight: typography.title.sm.lineHeight,
  },
})
