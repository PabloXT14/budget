import { useState } from "react"
import { View } from "react-native"

import { colors } from "@/theme"
import { styles } from "./styles"

import { Button } from "@/components/shared/button"
import { Icon } from "@/components/shared/icon"
import { Input } from "@/components/shared/input"

export const Search = () => {
  const [isInputFocused, setIsInputFocused] = useState(false)

  return (
    <View style={styles.container}>
      <Input.Container variant={isInputFocused ? "focus" : "default"}>
        <Input.Icon
          name="search"
          variant={isInputFocused ? "focus" : "default"}
        />
        <Input.Field
          placeholder="Título ou cliente"
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          variant={isInputFocused ? "focus" : "default"}
        />
      </Input.Container>

      <Button variant="secondary">
        <Icon name="filter" size={24} color={colors.purple.base} />
      </Button>
    </View>
  )
}
