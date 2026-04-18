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
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Icon name="shop" size={16} color={colors.purple.base} />

        <Text style={styles.title}>Informações gerais</Text>
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        <Input.Container>
          <Input.Field placeholder="Título" defaultValue={title} />
        </Input.Container>

        <Input.Container>
          <Input.Field placeholder="Cliente" defaultValue={client} />
        </Input.Container>
      </View>
    </View>
  )
}
