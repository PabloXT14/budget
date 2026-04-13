import type { AppRoutesProps } from "@/navigation/app-routes"

type UseHomeViewModelProps = AppRoutesProps<"home">

export const useHomeViewModel = (props?: UseHomeViewModelProps) => ({
  ...props,
})
