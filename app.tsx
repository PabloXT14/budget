import { StatusBar } from "expo-status-bar"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { Routes } from "@/routes"
import { BottomSheetProvider } from "@/contexts/bottom-sheet.context"

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <BottomSheetProvider>
          <StatusBar style="dark" />

          <Routes />
        </BottomSheetProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}
