import { View } from "react-native"
import { type NavigationProp, useNavigation } from "@react-navigation/native"

import { Button, ButtonText } from "@/shared/components/button"
import { Icon } from "@/shared/components/icon"

import { colors } from "@/shared/theme"
import { styles } from "./styles"

import type { AppRoutesList } from "@/navigation/app-routes"

type FooterProps = {
  budgetId: string
}

export const Footer = ({ budgetId }: FooterProps) => {
  const navigation = useNavigation<NavigationProp<AppRoutesList>>()

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
        <Button
          variant="secondary"
          onPress={() => navigation.navigate("editBudget", { budgetId })}
        >
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
