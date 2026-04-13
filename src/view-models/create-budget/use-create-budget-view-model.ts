import { useState } from "react"
import { randomUUID } from "expo-crypto"

import { type Budget, BudgetStatus } from "@/shared/types/budget"

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

  return {
    newBudget,
    setNewBudget,
  }
}
