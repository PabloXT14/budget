import { createElement } from "react"
import { BUDGETS } from "@/shared/data/budgets"

import { useBottomSheet } from "@/shared/contexts/bottom-sheet.context"

import { AddEditService } from "@/shared/components/add-edit-service"

import type { Budget, BudgetItem } from "@/shared/types/budget"
import type { AppRoutesProps } from "@/navigation/app-routes"

type EditBudgetViewModel = AppRoutesProps<"editBudget">["route"]["params"]

export const useEditBudgetViewModel = ({ budgetId }: EditBudgetViewModel) => {
  const { openBottomSheet } = useBottomSheet()

  const budget = BUDGETS.find((b) => b.id === budgetId)

  const handleOpenEditBudgetItem = (budgetItem: BudgetItem) => {
    openBottomSheet({
      content: createElement(AddEditService, { budgetItem }),
      config: {
        snapPoints: ["70%"],
      },
    })
  }

  const handleOpenEditBudgetItemWithData = () => {
    openBottomSheet({
      content: createElement(AddEditService),
      config: {
        snapPoints: ["70%"],
      },
    })
  }

  return {
    budget: budget as Budget,
    handleOpenEditBudgetItem,
    handleOpenEditBudgetItemWithData,
  }
}
