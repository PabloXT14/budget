import { FlatList } from "react-native"

import { type Budget, BudgetStatus } from "@/@types/budget"

import { BudgetCard } from "../budget-card"

const DATA: Budget[] = [
  {
    id: "1",
    title: "Orçamento para desenvolvimento de aplicativo móvel",
    client: "Empresa XYZ",
    status: BudgetStatus.APPROVED,
    discountPercentage: 10,
    items: [
      {
        id: "item-1",
        description: "Desenvolvimento Frontend",
        quantity: 1,
        unitPrice: 15_000,
      },
      {
        id: "item-2",
        description: "Desenvolvimento Backend",
        quantity: 1,
        unitPrice: 10_000,
      },
    ],
    createdAt: "2023-10-01T10:00:00Z",
    updatedAt: "2023-10-02T12:00:00Z",
  },
  {
    id: "2",
    title: "Orçamento para consultoria em TI",
    client: "Empresa ABC",
    status: BudgetStatus.SENT,
    items: [
      {
        id: "item-3",
        description: "Análise de infraestrutura",
        quantity: 1,
        unitPrice: 5000,
      },
      {
        id: "item-4",
        description: "Recomendações de melhorias",
        quantity: 1,
        unitPrice: 3000,
      },
    ],
    createdAt: "2023-11-05T09:30:00Z",
    updatedAt: "2023-11-06T11:15:00Z",
  },
]

export const BudgetList = () => (
  <FlatList
    data={DATA}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <BudgetCard data={item} />}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingBottom: 24, gap: 8 }}
  />
)
