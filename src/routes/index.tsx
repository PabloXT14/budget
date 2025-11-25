import { NavigationContainer } from "@react-navigation/native"
import {
  Lato_400Regular,
  Lato_700Bold,
  useFonts,
} from "@expo-google-fonts/lato"

import { AppRoutes } from "./app-routes"

export const Routes = () => {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}
