import {
  Text,
  type TextProps,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native"

import { getButtonStyles, getTextStyles } from "./styles"

export type ButtonVariant = "primary" | "secondary" | "danger"

type ButtonProps = TouchableOpacityProps & {
  variant?: ButtonVariant
}

const Button = ({ style, variant, ...props }: ButtonProps) => (
  <TouchableOpacity
    style={[getButtonStyles(variant), style]}
    activeOpacity={0.6}
    {...props}
  />
)

type ButtonTextProps = TextProps & {
  variant?: ButtonVariant
}

const ButtonText = ({ style, variant, ...props }: ButtonTextProps) => (
  <Text style={[getTextStyles(variant), style]} {...props} />
)

export { Button, ButtonText }
