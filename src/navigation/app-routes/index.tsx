import {
  createStackNavigator,
  type StackScreenProps,
} from "@react-navigation/stack"

import { Home } from "@/view-models/home"
import { CreateBudget } from "@/view-models/create-budget"
import { EditBudget } from "@/view-models/edit-budget"
import { BudgetDetails } from "@/view-models/budget-details"

export type AppRoutesList = {
  home: undefined
  createBudget: undefined
  editBudget: {
    budgetId: string
  }
  budgetDetails: {
    budgetId: string
  }
}

export type AppRoutesProps<T extends keyof AppRoutesList> = StackScreenProps<
  AppRoutesList,
  T
>

const { Navigator, Screen } = createStackNavigator<AppRoutesList>()

export const AppRoutes = () => (
  <Navigator
    initialRouteName="home"
    screenOptions={{ headerShown: false, animation: "slide_from_right" }}
  >
    <Screen name="home" component={Home} />
    <Screen name="createBudget" component={CreateBudget} />
    <Screen name="editBudget" component={EditBudget} />
    <Screen name="budgetDetails" component={BudgetDetails} />
  </Navigator>
)
