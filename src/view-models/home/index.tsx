import type { AppRoutesProps } from "@/navigation/app-routes"
import { HomeView } from "./home-view"

import { useHomeViewModel } from "./use-home-view-model"

type HomeProps = AppRoutesProps<"home">

export const Home = (_props: HomeProps) => {
  const props = useHomeViewModel()

  return <HomeView {...props} />
}
