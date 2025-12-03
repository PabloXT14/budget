import { Text, TouchableOpacity, View } from "react-native"
import { type NavigationProp, useNavigation } from "@react-navigation/native"

import { styles } from "./styles"
import { colors } from "@/theme"

import { Icon } from "@/components/shared/icon"

import type { AppRoutesList } from "@/routes/app-routes"

export const Header = () => {
  const navigation = useNavigation<NavigationProp<AppRoutesList>>()

  return (
    <View style={styles.container}>
      {/* BACK BUTTON */}
      <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
        <Icon name="chevronLeft" size={24} color={colors.gray[600]} />
      </TouchableOpacity>

      {/* TITLE */}
      <View style={styles.info}>
        <Text style={styles.title}>Orçamento</Text>
      </View>
    </View>
  )
}
