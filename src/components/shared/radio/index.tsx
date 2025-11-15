import { TouchableOpacity, View } from "react-native"

import { styles } from "./styles"

type RadioProps = {
  value: boolean
  onValueChange: () => void
}

export const Radio = ({ value, onValueChange }: RadioProps) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onValueChange}
    style={[styles.base, value && styles.checked]}
  >
    {value && <View style={styles.indicator} />}
  </TouchableOpacity>
)
