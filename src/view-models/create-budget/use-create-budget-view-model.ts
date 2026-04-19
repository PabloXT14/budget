import { createElement, useState } from "react"
import { randomUUID } from "expo-crypto"

import { useBottomSheet } from "@/shared/contexts/bottom-sheet.context"

import { AddEditService } from "@/shared/components/add-edit-service"

import {
  type Budget,
  type BudgetItem,
  BudgetStatus,
} from "@/shared/types/budget"
import type { AppRoutesProps } from "@/navigation/app-routes"

type CreateBudgetViewModel = AppRoutesProps<"createBudget">["route"]["params"]

export const useCreateBudgetViewModel = (_props: CreateBudgetViewModel) => {
  const [newBudget, setNewBudget] = useState<Budget>({
    id: randomUUID(),
    title: "",
    client: "",
    items: [],
    discountPercentage: 0,
    status: BudgetStatus.DRAFT,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })

  const { openBottomSheet } = useBottomSheet()

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
    newBudget,
    setNewBudget,
    handleOpenEditBudgetItem,
    handleOpenEditBudgetItemWithData,
  }
}
