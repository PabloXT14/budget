import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"
import { colors } from "@/shared/theme"

import { Icon } from "@/shared/components/icon"
import { Input } from "@/shared/components/input"
import { Button, ButtonText } from "@/shared/components/button"
import { DismissKeyboardView } from "@/shared/components/dismiss-keyboard-view"

import { useBottomSheet } from "@/shared/contexts/bottom-sheet.context"

export const AddEditService = () => {
  const { closeBottomSheet } = useBottomSheet()

  const [quantity, setQuantity] = useState(1)

  return (
    <DismissKeyboardView>
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
          <Input.Container>
            <Input.Field placeholder="Título do serviço" />
          </Input.Container>

          <Input.Container
            style={{ height: 120, borderRadius: 20, alignItems: "flex-start" }}
          >
            <Input.Field
              placeholder="Descrição do serviço"
              multiline
              numberOfLines={5}
              style={{
                textAlignVertical: "top",
                height: "100%",
              }}
            />
          </Input.Container>

          {/* PRICE & QUANTITY */}
          <View style={{ gap: 8, flexDirection: "row", alignItems: "center" }}>
            <Input.Container style={{ flex: 1 }}>
              <Input.Label>R$</Input.Label>
              <Input.Field keyboardType="numeric" placeholder="0,00" />
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
    </DismissKeyboardView>
  )
}
