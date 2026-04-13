import { CreateBudgetView } from "./create-budget-view"
import { useCreateBudgetViewModel } from "./use-create-budget-view-model"

import type { AppRoutesProps } from "@/navigation/app-routes"

type CreateBudgetProps = AppRoutesProps<"createBudget">

export const CreateBudget = ({ route }: CreateBudgetProps) => {
  const props = useCreateBudgetViewModel(route.params)

  return <CreateBudgetView {...props} />
}
