import { useState } from "react"
import { StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import type { AppRoutesProps } from "@/routes/app-routes"

import { Input } from "@/components/shared/input"

import { colors } from "@/theme"

export const Home = (_props: AppRoutesProps<"home">) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <Input.Container variant={isFocused ? "focus" : undefined}>
        <Input.Icon name="calendar" variant={isFocused ? "focus" : undefined} />
        <Input.Label variant={isFocused ? "focus" : undefined}>R$</Input.Label>
        <Input.Field
          placeholder="Placeholder"
          variant={isFocused ? "focus" : undefined}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </Input.Container>

      <Input.Container variant="focus">
        <Input.Icon name="calendar" variant="focus" />
        <Input.Label variant="focus">R$</Input.Label>
        <Input.Field placeholder="Placeholder" variant="focus" />
      </Input.Container>

      <Input.Container variant="danger">
        <Input.Icon name="calendar" variant="danger" />
        <Input.Label variant="danger">R$</Input.Label>
        <Input.Field placeholder="Placeholder" variant="danger" />
      </Input.Container>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    padding: 16,
  },
})
