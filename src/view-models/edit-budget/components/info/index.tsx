import { useState } from "react"
import { Text, View } from "react-native"

import { colors } from "@/shared/theme"
import { styles } from "./styles"

import { Icon } from "@/shared/components/icon"
import { Input } from "@/shared/components/input"

type InfoProps = {
  title?: string
  client?: string
}

export const Info = ({ title, client }: InfoProps) => {
  const [isTitleFocused, setIsInputFocused] = useState(false)
  const [titleSelection, setTitleSelection] = useState({ start: 0, end: 0 })

  const [isClientFocused, setIsClientFocused] = useState(false)
  const [clientSelection, setClientSelection] = useState({ start: 0, end: 0 })

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Icon name="shop" size={16} color={colors.purple.base} />

        <Text style={styles.title}>Informações gerais</Text>
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        <Input.Container isFocused={isTitleFocused}>
          <Input.Field
            placeholder="Título"
            defaultValue={title}
            onFocusChange={setIsInputFocused}
            selection={titleSelection}
            onSelectionChange={(e) =>
              setTitleSelection(e.nativeEvent.selection)
            }
          />
        </Input.Container>

        <Input.Container isFocused={isClientFocused}>
          <Input.Field
            placeholder="Cliente"
            defaultValue={client}
            onFocusChange={setIsClientFocused}
            selection={clientSelection}
            onSelectionChange={(e) =>
              setClientSelection(e.nativeEvent.selection)
            }
          />
        </Input.Container>
      </View>
    </View>
  )
}
