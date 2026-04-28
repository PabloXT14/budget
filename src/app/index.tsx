import { StatusBar } from "expo-status-bar"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { KeyboardProvider } from "react-native-keyboard-controller"

import { Routes } from "@/navigation"
import { BottomSheetProvider } from "@/shared/contexts/bottom-sheet.context"

export function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <KeyboardProvider>
          <BottomSheetProvider>
            <Routes />

            <StatusBar style="dark" />
          </BottomSheetProvider>
        </KeyboardProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}
