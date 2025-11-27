import { TouchableOpacity } from "react-native"

import { Icon } from "../icon"

import { colors } from "@/theme"
import { styles } from "./styles"

type CheckboxProps = {
  value: boolean
  onValueChange?: () => void
}

export const Checkbox = ({ value, onValueChange }: CheckboxProps) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onValueChange}
    style={[styles.base, value && styles.checked]}
  >
    {value && <Icon name="check" size={16} color={colors.white} />}
  </TouchableOpacity>
)
