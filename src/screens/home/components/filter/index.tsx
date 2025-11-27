import { Text, TouchableOpacity, View } from "react-native"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { useBottomSheet } from "@/contexts/bottom-sheet.context"

import { filterFormSchema, OrderBy, type FilterFormData } from "./schema"
import { styles } from "./styles"
import { colors } from "@/theme"

import { BudgetStatus } from "@/@types/budget"

import { Icon } from "@/components/shared/icon"
import { Checkbox } from "@/components/shared/checkbox"
import { Status } from "@/components/shared/status"
import { Radio } from "@/components/shared/radio"
import { Button, ButtonText } from "@/components/shared/button"

export const Filter = () => {
  const { closeBottomSheet } = useBottomSheet()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FilterFormData>({
    resolver: zodResolver(filterFormSchema),
    defaultValues: {
      status: [],
      orderBy: OrderBy["most-recent"],
    },
  })

  const handleApplyFilter = (data: FilterFormData) => {
    // biome-ignore lint/suspicious/noConsole: debug
    console.log(data)
  }

  const handleToggleStatus = (
    status: BudgetStatus,
    field: { value: BudgetStatus[]; onChange: (value: BudgetStatus[]) => void }
  ) => {
    if (field.value.includes(status)) {
      field.onChange(field.value.filter((item) => item !== status))
    } else {
      field.onChange([...field.value, status])
    }
  }

  const handleReset = () => {
    reset({
      status: [],
      orderBy: OrderBy["most-recent"],
    })
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Filtrar e ordenar</Text>

        <TouchableOpacity activeOpacity={0.6} onPress={closeBottomSheet}>
          <Icon name="multiply" size={24} color={colors.gray[600]} />
        </TouchableOpacity>
      </View>

      {/* BODY */}
      <View style={styles.body}>
        {/* STATUS */}
        <Controller
          control={control}
          name="status"
          render={({ field }) => (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Status</Text>

              <View style={styles.list}>
                {Object.values(BudgetStatus).map((status) => (
                  <TouchableOpacity
                    style={styles.option}
                    key={status}
                    onPress={() => handleToggleStatus(status, field)}
                  >
                    <Checkbox
                      value={field.value?.includes(status)}
                      onValueChange={() => handleToggleStatus(status, field)}
                    />
                    <Status variant={status} />
                  </TouchableOpacity>
                ))}

                {errors.status && (
                  <Text style={styles.error}>{errors.status.message}</Text>
                )}
              </View>
            </View>
          )}
        />

        {/* ORDER */}
        <Controller
          control={control}
          name="orderBy"
          render={({ field }) => (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Ordenação</Text>

              <View style={styles.list}>
                {Object.values(OrderBy).map((orderBy) => (
                  <TouchableOpacity
                    style={styles.option}
                    key={orderBy}
                    onPress={() => field.onChange(orderBy)}
                  >
                    <Radio
                      value={field.value === orderBy}
                      onValueChange={() => field.onChange(orderBy)}
                    />
                    <Text style={styles.optionLabel}>{orderBy}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
        />
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Button variant="secondary" onPress={handleReset}>
          <ButtonText variant="secondary">Resetar filtros</ButtonText>
        </Button>

        <Button onPress={handleSubmit(handleApplyFilter)}>
          <Icon name="check" size={24} color={colors.white} />
          <ButtonText>Aplicar</ButtonText>
        </Button>
      </View>
    </View>
  )
}
