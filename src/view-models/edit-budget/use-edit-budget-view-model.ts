import { BUDGETS } from "@/shared/data/budgets"

import type { Budget } from "@/shared/types/budget"
import type { AppRoutesProps } from "@/navigation/app-routes"

type EditBudgetViewModel = AppRoutesProps<"editBudget">["route"]["params"]

export const useEditBudgetViewModel = ({ budgetId }: EditBudgetViewModel) => {
  const budget = BUDGETS.find((b) => b.id === budgetId)

  return {
    budget: budget as Budget,
  }
}
