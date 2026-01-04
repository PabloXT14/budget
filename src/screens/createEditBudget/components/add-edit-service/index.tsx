import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"
import { colors } from "@/theme"

import { Icon } from "@/components/shared/icon"
import { Input } from "@/components/shared/input"
import { Button, ButtonText } from "@/components/shared/button"

import { useBottomSheet } from "@/contexts/bottom-sheet.context"

export const AddEditService = () => {
  const { closeBottomSheet } = useBottomSheet()

  const [isTitleFocused, setIsTitleFocused] = useState(false)
  const [isDescriptionFocused, setIsDescriptionFocused] = useState(false)
  const [isPriceFocused, setIsPriceFocused] = useState(false)
  const [quantity, setQuantity] = useState(1)

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Filtrar e ordenar</Text>

        <TouchableOpacity activeOpacity={0.6} onPress={closeBottomSheet}>
          <Icon name="multiply" size={24} color={colors.gray[600]} />
        </TouchableOpacity>
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        <Input.Container isFocused={isTitleFocused}>
          <Input.BottomSheetField
            placeholder="Título do serviço"
            onFocusChange={setIsTitleFocused}
          />
        </Input.Container>

        <Input.Container
          style={{ height: 120, borderRadius: 20, alignItems: "flex-start" }}
          isFocused={isDescriptionFocused}
        >
          <Input.BottomSheetField
            placeholder="Descrição do serviço"
            multiline
            numberOfLines={5}
            onFocusChange={setIsDescriptionFocused}
            style={{
              textAlignVertical: "top",
              height: "100%",
            }}
          />
        </Input.Container>

        {/* PRICE & QUANTITY */}
        <View style={{ gap: 8, flexDirection: "row", alignItems: "center" }}>
          <Input.Container style={{ flex: 1 }} isFocused={isPriceFocused}>
            <Input.Label isFocused={isPriceFocused}>R$</Input.Label>
            <Input.BottomSheetField
              keyboardType="numeric"
              placeholder="0,00"
              onFocusChange={setIsPriceFocused}
            />
          </Input.Container>

          <Input.Container
            style={{ maxWidth: 112, justifyContent: "space-between" }}
          >
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() =>
                setQuantity(() => (quantity > 1 ? quantity - 1 : 1))
              }
            >
              <Icon name="minus" size={20} color={colors.purple.base} />
            </TouchableOpacity>

            <Input.Field
              value={quantity.toString()}
              readOnly
              style={{
                textAlign: "center",
              }}
            />

            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setQuantity(quantity + 1)}
            >
              <Icon name="plus" size={20} color={colors.purple.base} />
            </TouchableOpacity>
          </Input.Container>
        </View>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Button variant="danger">
          <Icon name="trash2" size={24} color={colors.danger.base} />
        </Button>

        <Button>
          <Icon name="check" size={24} color={colors.white} />

          <ButtonText>Salvar</ButtonText>
        </Button>
      </View>
    </View>
  )
}
