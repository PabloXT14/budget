import { Text, TouchableOpacity, View } from "react-native"
import { type NavigationProp, useNavigation } from "@react-navigation/native"

import { styles } from "./styles"
import { colors } from "@/shared/theme"

import { Icon } from "@/shared/components/icon"
import { Status } from "@/shared/components/status"

import type { AppRoutesList } from "@/navigation/app-routes"
import type { QuoteStatus } from "@/shared/interfaces/quote"

type HeaderProps = {
  quoteId: string
  status: QuoteStatus
}

const QUOTE_ID_DISPLAY_LENGTH = 5

export const Header = ({ quoteId, status }: HeaderProps) => {
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
        <Text style={styles.subtitle}>
          {" "}
          #{quoteId.slice(0, QUOTE_ID_DISPLAY_LENGTH)}
        </Text>
      </View>

      {/* STATUS */}
      <Status variant={status} />
    </View>
  )
}
