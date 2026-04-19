import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"
import { colors } from "@/shared/theme"

import { Icon } from "@/shared/components/icon"
import { Input } from "@/shared/components/input"
import { Button, ButtonText } from "@/shared/components/button"
import { DismissKeyboardView } from "@/shared/components/dismiss-keyboard-view"

import { useBottomSheet } from "@/shared/contexts/bottom-sheet.context"

import type { BudgetItem } from "@/shared/types/budget"

type AddEditServiceProps = {
  budgetItem?: BudgetItem | null
  onSave?: () => void
  onDelete?: () => void
}

const CENTS_TO_CURRENCY = 100

export const AddEditService = ({
  budgetItem = null,
  onSave,
  onDelete,
}: AddEditServiceProps) => {
  const { closeBottomSheet } = useBottomSheet()

  const [title, setTitle] = useState(budgetItem?.title || "")
  const [description, setDescription] = useState(budgetItem?.description || "")
  const [price, setPrice] = useState(
    (budgetItem?.unitPriceInCents || 0) / CENTS_TO_CURRENCY
  )

  const [quantity, setQuantity] = useState(budgetItem?.quantity || 1)

  return (
    <DismissKeyboardView>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.title}>Serviço</Text>

          <TouchableOpacity activeOpacity={0.6} onPress={closeBottomSheet}>
            <Icon name="multiply" size={24} color={colors.gray[600]} />
          </TouchableOpacity>
        </View>

        {/* CONTENT */}
        <View style={styles.content}>
          <Input.Container>
            <Input.Field
              placeholder="Título do serviço"
              value={title}
              onChangeText={setTitle}
            />
          </Input.Container>

          <Input.Container
            style={{ height: 120, borderRadius: 20, alignItems: "flex-start" }}
          >
            <Input.Field
              value={description}
              onChangeText={setDescription}
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
              <Input.Field
                keyboardType="numeric"
                placeholder="0,00"
                value={price.toString()}
                onChangeText={(text) => setPrice(Number(text) || 0)}
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
          <Button variant="danger" onPress={onDelete}>
            <Icon name="trash2" size={24} color={colors.danger.base} />
          </Button>

          <Button onPress={onSave}>
            <Icon name="check" size={24} color={colors.white} />

            <ButtonText>Salvar</ButtonText>
          </Button>
        </View>
      </View>
    </DismissKeyboardView>
  )
}
