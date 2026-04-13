import { useBudgetDetailsViewModel } from "./use-budget-details-view-model"

import { BudgetDetailsView } from "./budget-details-view"

import type { AppRoutesProps } from "@/navigation/app-routes"

type BudgetDetailsProps = AppRoutesProps<"budgetDetails">

export const BudgetDetails = ({ route }: BudgetDetailsProps) => {
  const props = useBudgetDetailsViewModel({
    budgetId: route.params.budgetId,
  })

  return <BudgetDetailsView {...props} />
}
