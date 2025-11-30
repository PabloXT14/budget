import { View } from "react-native"

import { Button, ButtonText } from "@/components/shared/button"
import { Icon } from "@/components/shared/icon"

import { colors } from "@/theme"
import { styles } from "./styles"

export const Footer = () => {
  return (
    <View style={styles.container}>
      {/* OPTIONS */}
      <View style={styles.options}>
        <Button variant="danger">
          <Icon name="trash2" size={24} color={colors.danger.base} />
        </Button>
        <Button variant="secondary">
          <Icon name="copy" size={24} color={colors.purple.base} />
        </Button>
        <Button variant="secondary">
          <Icon name="editPen" size={24} color={colors.purple.base} />
        </Button>
      </View>

      <Button>
        <Icon name="directionUpRight" size={24} color={colors.white} />
        <ButtonText>Compartilhar</ButtonText>
      </Button>
    </View>
  )
}
