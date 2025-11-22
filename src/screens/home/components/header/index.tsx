import { Text, View } from "react-native"
import { type NavigationProp, useNavigation } from "@react-navigation/native"

import { styles } from "./styles"
import { colors } from "@/theme"

import { Button, ButtonText } from "@/components/shared/button"
import { Icon } from "@/components/shared/icon"

import type { AppRoutesList } from "@/routes/app-routes"

export const Header = () => {
  const navigation = useNavigation<NavigationProp<AppRoutesList>>()

  return (
    <View style={styles.container}>
      {/* INFO */}
      <View style={styles.info}>
        <Text style={styles.title}>Orçamentos</Text>
        <Text style={styles.subtitle}>Você tem 1 item em rascunho</Text>
      </View>

      {/* NEW BUDGET */}
      <Button onPress={() => navigation.navigate("createEditBudget")}>
        <Icon name="plus" size={24} color={colors.white} />
        <ButtonText>Novo</ButtonText>
      </Button>
    </View>
  )
}
