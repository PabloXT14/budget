import type { AppRoutesProps } from "@/navigation/app-routes"

type UseBudgetDetailsViewModelProps =
  AppRoutesProps<"budgetDetails">["route"]["params"]

export const useBudgetDetailsViewModel = (
  props: UseBudgetDetailsViewModelProps
) => ({
  ...props,
})
