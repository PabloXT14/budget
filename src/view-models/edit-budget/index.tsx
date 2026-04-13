import { EditBudgetView } from "./edit-budget-view"
import { useEditBudgetViewModel } from "./use-edit-budget-view-model"

import type { AppRoutesProps } from "@/navigation/app-routes"

type EditBudgetProps = AppRoutesProps<"editBudget">

export const EditBudget = ({ route }: EditBudgetProps) => {
  const props = useEditBudgetViewModel(route.params)

  return <EditBudgetView {...props} />
}
