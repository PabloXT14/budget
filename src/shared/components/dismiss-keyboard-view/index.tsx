import type { ReactNode } from "react"
import { Keyboard, TouchableWithoutFeedback } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-controller"

type DismissKeyboardViewProps = {
  children: ReactNode
}

export const DismissKeyboardView = ({ children }: DismissKeyboardViewProps) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      bottomOffset={64}
    >
      {children}
    </KeyboardAwareScrollView>
  </TouchableWithoutFeedback>
)
