import { Text, View } from "react-native"
import { type NavigationProp, useNavigation } from "@react-navigation/native"

import { styles } from "./styles"
import { colors } from "@/shared/theme"

import { Button, ButtonText } from "@/shared/components/button"
import { Icon } from "@/shared/components/icon"

import { QUOTES } from "@/shared/data/quotes"
import { QuoteStatus } from "@/shared/interfaces/quote"

import type { AppRoutesList } from "@/navigation/app-routes"

export const Header = () => {
  const navigation = useNavigation<NavigationProp<AppRoutesList>>()

  const totalDraftQuotes = QUOTES.filter(
    (quote) => quote.status === QuoteStatus.DRAFT
  ).length

  return (
    <View style={styles.container}>
      {/* INFO */}
      <View style={styles.info}>
        <Text style={styles.title}>Orçamentos</Text>
        <Text style={styles.subtitle}>
          Você tem {totalDraftQuotes} item(s) em rascunho
        </Text>
      </View>

      {/* NEW BUDGET */}
      <Button onPress={() => navigation.navigate("createQuote")}>
        <Icon name="plus" size={24} color={colors.white} />
        <ButtonText>Novo</ButtonText>
      </Button>
    </View>
  )
}
