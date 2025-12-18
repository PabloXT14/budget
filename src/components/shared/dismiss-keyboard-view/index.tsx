import type { ReactNode } from "react"
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native"

const IOS_KEYBOARD_VERTICAL_OFFSET = 64

type DismissKeyboardViewProps = {
  children: ReactNode
  contentContainerStyle?: object
}

export const DismissKeyboardView = ({
  children,
  contentContainerStyle,
}: DismissKeyboardViewProps) => (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={
      Platform.OS === "ios" ? IOS_KEYBOARD_VERTICAL_OFFSET : 0
    }
  >
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[{ flexGrow: 1 }, contentContainerStyle]}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  </KeyboardAvoidingView>
)
