import { useState } from "react"
import { Text, View } from "react-native"

import { colors } from "@/theme"
import { styles } from "./styles"

import { Icon } from "@/components/shared/icon"
import { Input } from "@/components/shared/input"

export const Info = () => {
  const [isTitleFocused, setIsInputFocused] = useState(false)
  const [isClientFocused, setIsClientFocused] = useState(false)

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Icon name="shop" size={16} color={colors.purple.base} />

        <Text style={styles.title}>Informações gerais</Text>
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        <Input.Container variant={isTitleFocused ? "focus" : "default"}>
          <Input.Field
            placeholder="Título"
            variant={isTitleFocused ? "focus" : "default"}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
        </Input.Container>

        <Input.Container variant={isClientFocused ? "focus" : "default"}>
          <Input.Field
            placeholder="Cliente"
            variant={isClientFocused ? "focus" : "default"}
            onFocus={() => setIsClientFocused(true)}
            onBlur={() => setIsClientFocused(false)}
          />
        </Input.Container>
      </View>
    </View>
  )
}
