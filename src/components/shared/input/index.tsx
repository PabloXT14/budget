import {
  Text,
  TextInput,
  View,
  type TextInputProps,
  type TextProps,
  type ViewProps,
} from "react-native"

import { Icon as IconBase, type IconName } from "../icon"

export type InputVariant = "default" | "focus" | "danger"

import { colors } from "@/theme"

import {
  getInputContainerStyles,
  getInputFieldStyles,
  getInputLabelStyles,
} from "./styles"

type ContainerProps = ViewProps & {
  variant?: InputVariant
}
export const Container = ({ variant = "default", ...rest }: ContainerProps) => (
  <View style={getInputContainerStyles(variant)} {...rest} />
)

type FieldProps = TextInputProps & {
  variant?: InputVariant
}

export const Field = ({ variant = "default", ...rest }: FieldProps) => (
  <TextInput
    style={getInputFieldStyles(variant)}
    placeholderTextColor={colors.gray[500]}
    cursorColor={colors.gray[500]}
    {...rest}
  />
)

export type LabelProps = TextProps & {
  variant?: InputVariant
}
export const Label = ({ variant = "default", ...rest }: LabelProps) => (
  <Text style={getInputLabelStyles(variant)} {...rest} />
)

type IconProps = {
  name: IconName
  size?: number
  variant?: InputVariant
}
export const Icon = ({ name, size = 20, variant = "default" }: IconProps) => (
  <IconBase
    name={name}
    size={size}
    color={
      (variant === "focus" && colors.purple.base) ||
      (variant === "danger" && colors.danger.base) ||
      colors.gray[600]
    }
  />
)

export const Input = {
  Container,
  Field,
  Label,
  Icon,
}
