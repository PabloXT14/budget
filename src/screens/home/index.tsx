import { StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import type { AppRoutesProps } from "@/routes/app-routes"

import { colors } from "@/theme"

import { Button, ButtonText } from "@/components/shared/button"
import { Icon } from "@/components/shared/icon"

export const Home = ({ navigation }: AppRoutesProps<"home">) => (
  <SafeAreaView style={styles.container}>
    <Button>
      <Icon name="directionUpRight" color={colors.white} />
      <ButtonText>Label</ButtonText>
    </Button>

    <Button variant="secondary">
      <Icon name="directionUpRight" color={colors.purple.base} />
      <ButtonText variant="secondary">Label</ButtonText>
    </Button>

    <Button variant="danger">
      <Icon name="directionUpRight" color={colors.danger.base} />
      <ButtonText variant="danger">Label</ButtonText>
    </Button>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
})
