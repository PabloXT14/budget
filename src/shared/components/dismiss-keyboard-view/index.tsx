import type { ReactNode } from "react"
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native"

const IOS_KEYBOARD_VERTICAL_OFFSET = 64

type DismissKeyboardViewProps = {
  children: ReactNode
}

export const DismissKeyboardView = ({ children }: DismissKeyboardViewProps) => (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={
      Platform.OS === "ios" ? IOS_KEYBOARD_VERTICAL_OFFSET : 0
    }
  >
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  </KeyboardAvoidingView>
)
