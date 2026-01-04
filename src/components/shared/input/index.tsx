import {
  Text,
  TextInput,
  View,
  type TextInputProps,
  type TextProps,
  type ViewProps,
} from "react-native"
import { BottomSheetTextInput } from "@gorhom/bottom-sheet"

import { Icon as IconBase, type IconName } from "../icon"

export type InputVariant = "default" | "focus" | "danger"

import { colors } from "@/theme"

import {
  getInputContainerStyles,
  getInputFieldStyles,
  getInputLabelStyles,
} from "./styles"
import type { ComponentProps } from "react"

type ContainerProps = ViewProps & {
  variant?: InputVariant
  isFocused?: boolean
}
export const Container = ({
  variant = "default",
  style,
  isFocused,
  ...rest
}: ContainerProps) => (
  <View
    style={[getInputContainerStyles(isFocused ? "focus" : variant), style]}
    {...rest}
  />
)

type FieldProps = TextInputProps & {
  variant?: InputVariant
  onFocusChange?: (focused: boolean) => void
}

export const Field = ({
  variant = "default",
  style,
  onFocusChange,
  ...rest
}: FieldProps) => (
  <TextInput
    style={[getInputFieldStyles(variant), style]}
    placeholderTextColor={colors.gray[500]}
    cursorColor={colors.gray[500]}
    onFocus={() => onFocusChange?.(true)}
    onBlur={() => onFocusChange?.(false)}
    {...rest}
  />
)

type BottomSheetFieldProps = ComponentProps<typeof BottomSheetTextInput> & {
  variant?: InputVariant
  onFocusChange?: (focused: boolean) => void
}

export const BottomSheetField = ({
  variant = "default",
  style,
  onFocusChange,
  ...rest
}: BottomSheetFieldProps) => {
  // const { bottomSheetRef } = useBottomSheet()

  return (
    <BottomSheetTextInput
      style={[getInputFieldStyles(variant), style]}
      placeholderTextColor={colors.gray[500]}
      cursorColor={colors.gray[500]}
      onFocus={() => onFocusChange?.(true)}
      onBlur={() => onFocusChange?.(false)}
      {...rest}
    />
  )
}

export type LabelProps = TextProps & {
  variant?: InputVariant
  isFocused?: boolean
}
export const Label = ({
  variant = "default",
  style,
  isFocused,
  ...rest
}: LabelProps) => (
  <Text
    style={[getInputLabelStyles(isFocused ? "focus" : variant), style]}
    {...rest}
  />
)

type IconProps = {
  name: IconName
  size?: number
  variant?: InputVariant
  isFocused?: boolean
}
export const Icon = ({
  name,
  size = 20,
  variant = "default",
  isFocused,
}: IconProps) => (
  <IconBase
    name={name}
    size={size}
    color={
      (isFocused && colors.purple.base) ||
      (variant === "focus" && colors.purple.base) ||
      (variant === "danger" && colors.danger.base) ||
      colors.gray[600]
    }
  />
)

export const Input = {
  Container,
  Field,
  BottomSheetField,
  Label,
  Icon,
}
