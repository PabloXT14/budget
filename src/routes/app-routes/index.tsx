import {
  createStackNavigator,
  type StackScreenProps,
} from "@react-navigation/stack"

import { Home } from "@/screens/home"
import { Details } from "@/screens/details"
import { CreateEditBudget } from "@/screens/createEditBudget"

export type AppRoutesList = {
  home: undefined
  details: {
    budgetId: string
  }
  createEditBudget:
    | {
        budgetId: string
      }
    | undefined
}

export type AppRoutesProps<T extends keyof AppRoutesList> = StackScreenProps<
  AppRoutesList,
  T
>

const { Navigator, Screen } = createStackNavigator<AppRoutesList>()

export const AppRoutes = () => (
  <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
    <Screen name="home" component={Home} />
    <Screen name="details" component={Details} />
    <Screen name="createEditBudget" component={CreateEditBudget} />
  </Navigator>
)
