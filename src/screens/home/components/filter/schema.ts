import z from "zod"
import { BudgetStatus } from "@/@types/budget"

export enum OrderBy {
  "most-recent" = "Mais recente",
  "most-old" = "Mais antigo",
  "most-expensive" = "Maior valor",
  "most-cheap" = "Menor valor",
}

export const filterFormSchema = z.object({
  status: z
    .array(z.enum(BudgetStatus))
    .min(1, "Selecione pelo menos um status"),
  orderBy: z.enum(OrderBy),
})

export type FilterFormData = z.infer<typeof filterFormSchema>
