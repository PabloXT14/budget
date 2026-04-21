import {
  createStackNavigator,
  type StackScreenProps,
} from "@react-navigation/stack"

import { Home } from "@/view-models/home"
import { CreateQuote } from "@/view-models/create-quote"
import { EditQuote } from "@/view-models/edit-quote"
import { QuoteDetails } from "@/view-models/quote-details"

export type AppRoutesList = {
  home: undefined
  createQuote: undefined
  editQuote: {
    quoteId: string
  }
  quoteDetails: {
    quoteId: string
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
    <Screen name="createQuote" component={CreateQuote} />
    <Screen name="editQuote" component={EditQuote} />
    <Screen name="quoteDetails" component={QuoteDetails} />
  </Navigator>
)
