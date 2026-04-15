import { View } from "react-native"

import { styles } from "./styles"
import { colors } from "@/shared/theme"

import { Button, ButtonText } from "@/shared/components/button"
import { Icon } from "@/shared/components/icon"

export const Footer = () => (
  <View style={styles.container}>
    <Button variant="secondary">
      <ButtonText variant="secondary">Cancelar</ButtonText>
    </Button>

    <Button>
      <Icon name="check" size={24} color={colors.white} />
      <ButtonText>Atualizar</ButtonText>
    </Button>
  </View>
)
