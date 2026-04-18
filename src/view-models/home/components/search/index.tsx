import { View } from "react-native"

import { colors } from "@/shared/theme"
import { styles } from "./styles"

import { useBottomSheet } from "@/shared/contexts/bottom-sheet.context"

import { Button } from "@/shared/components/button"
import { Icon } from "@/shared/components/icon"
import { Input } from "@/shared/components/input"
import { Filter } from "../filter"

export const Search = () => {
  const { openBottomSheet } = useBottomSheet()

  return (
    <View style={styles.container}>
      <Input.Container>
        <Input.Icon name="search" />
        <Input.Field placeholder="Título ou cliente" />
      </Input.Container>

      <Button
        variant="secondary"
        onPress={() => {
          openBottomSheet({
            content: <Filter />,
            config: { snapPoints: ["70%"] },
          })
        }}
      >
        <Icon name="filter" size={24} color={colors.purple.base} />
      </Button>
    </View>
  )
}
