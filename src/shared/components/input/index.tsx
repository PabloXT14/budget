import { useState } from "react"
import {
  Text,
  TextInput,
  View,
  type TextInputProps,
  type TextProps,
  type ViewProps,
} from "react-native"

import { Icon as IconBase, type IconName } from "../icon"
import { InputContext, useInputContext } from "@/shared/contexts/input-context"

import { colors } from "@/shared/theme"

import {
  getInputContainerStyles,
  getInputFieldStyles,
  getInputLabelStyles,
} from "./styles"

export type InputVariant = "default" | "focus" | "danger"

type ContainerProps = ViewProps & {
  variant?: InputVariant
}
export const Container = ({
  variant = "default",
  style,
  ...rest
}: ContainerProps) => {
  const [focusCount, setFocusCount] = useState(0)

  const handleFocus = () => {
    setFocusCount((prev) => prev + 1)
  }

  const handleBlur = () => {
    setFocusCount((prev) => Math.max(0, prev - 1))
  }

  const isFocused = focusCount > 0

  return (
    <InputContext.Provider
      value={{
        isFocused,
        onFocus: handleFocus,
        onBlur: handleBlur,
      }}
    >
      <View
        style={[getInputContainerStyles(isFocused ? "focus" : variant), style]}
        {...rest}
      />
    </InputContext.Provider>
  )
}

type FieldProps = TextInputProps & {
  variant?: InputVariant
}

export const Field = ({ variant = "default", style, ...rest }: FieldProps) => {
  const { onFocus, onBlur } = useInputContext()

  return (
    <TextInput
      style={[getInputFieldStyles(variant), style]}
      placeholderTextColor={colors.gray[500]}
      cursorColor={colors.gray[500]}
      onFocus={(event) => {
        onFocus()
        rest.onFocus?.(event)
      }}
      onBlur={(event) => {
        onBlur()
        rest.onBlur?.(event)
      }}
      {...rest}
    />
  )
}

export type LabelProps = TextProps & {
  variant?: InputVariant
}
export const Label = ({ variant = "default", style, ...rest }: LabelProps) => {
  const { isFocused } = useInputContext()

  return (
    <Text
      style={[getInputLabelStyles(isFocused ? "focus" : variant), style]}
      {...rest}
    />
  )
}

type IconProps = {
  name: IconName
  size?: number
  variant?: InputVariant
}
export const Icon = ({ name, size = 20, variant = "default" }: IconProps) => {
  const { isFocused } = useInputContext()

  return (
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
}

export const Input = {
  Container,
  Field,
  Label,
  Icon,
}
