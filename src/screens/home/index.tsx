import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import type { AppRoutesProps } from "@/routes/app-routes"

import { colors } from "@/theme"

import { Checkbox } from "@/components/shared/checkbox"
import { Radio } from "@/components/shared/radio"

export const Home = (_props: AppRoutesProps<"home">) => {
  const [checked, setChecked] = useState(false)
  const [radioSelected, setRadioSelected] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        <Checkbox value={checked} onValueChange={() => setChecked(!checked)} />
        <Text style={{ fontSize: 16, color: colors.gray[600] }}>Label</Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        <Radio
          value={radioSelected}
          onValueChange={() => setRadioSelected(true)}
        />
        <Text style={{ fontSize: 16, color: colors.gray[600] }}>Label</Text>
      </View>
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
  },
})
