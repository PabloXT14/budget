import { randomUUID } from "expo-crypto"

import { type Budget, BudgetStatus } from "@/@types/budget"

export const BUDGETS: Budget[] = [
  {
    id: randomUUID(),
    title: "Orçamento para desenvolvimento de aplicativo móvel",
    client: "Empresa XYZ",
    status: BudgetStatus.APPROVED,
    discountPercentage: 10,
    items: [
      {
        id: randomUUID(),
        description: "Desenvolvimento Frontend",
        quantity: 1,
        unitPrice: 15_000,
      },
      {
        id: randomUUID(),
        description: "Desenvolvimento Backend",
        quantity: 1,
        unitPrice: 10_000,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    title: "Orçamento para consultoria em TI",
    client: "Empresa ABC",
    status: BudgetStatus.DRAFT,
    items: [
      {
        id: randomUUID(),
        description: "Análise de infraestrutura",
        quantity: 1,
        unitPrice: 5000,
      },
      {
        id: randomUUID(),
        description: "Recomendações de melhorias",
        quantity: 1,
        unitPrice: 3000,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    title: "Serviços de SEO",
    client: "SEO Masters",
    status: BudgetStatus.SENT,
    discountPercentage: 0,
    items: [
      {
        id: randomUUID(),
        description: "Desenvolvimento Frontend",
        quantity: 1,
        unitPrice: 15_000,
      },
      {
        id: randomUUID(),
        description: "Desenvolvimento Backend",
        quantity: 1,
        unitPrice: 10_000,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    title: "Criação de conteúdo",
    client: "Content Creators",
    status: BudgetStatus.DRAFT,
    discountPercentage: 0,
    items: [
      {
        id: randomUUID(),
        description: "Desenvolvimento Frontend",
        quantity: 1,
        unitPrice: 15_000,
      },
      {
        id: randomUUID(),
        description: "Desenvolvimento Backend",
        quantity: 1,
        unitPrice: 10_000,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    title: "Gestão de redes sociais",
    client: "Social Experts",
    status: BudgetStatus.REJECTED,
    discountPercentage: 0,
    items: [
      {
        id: randomUUID(),
        description: "Desenvolvimento Frontend",
        quantity: 1,
        unitPrice: 15_000,
      },
      {
        id: randomUUID(),
        description: "Desenvolvimento Backend",
        quantity: 1,
        unitPrice: 10_000,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    title: "Design de interface",
    client: "UI/UX Designers",
    status: BudgetStatus.APPROVED,
    discountPercentage: 0,
    items: [
      {
        id: randomUUID(),
        description: "Desenvolvimento Frontend",
        quantity: 1,
        unitPrice: 15_000,
      },
      {
        id: randomUUID(),
        description: "Desenvolvimento Backend",
        quantity: 1,
        unitPrice: 10_000,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    title: "Desenvolvimento de aplicativos",
    client: "App Developers",
    status: BudgetStatus.SENT,
    discountPercentage: 0,
    items: [
      {
        id: randomUUID(),
        description: "Desenvolvimento Frontend",
        quantity: 1,
        unitPrice: 15_000,
      },
      {
        id: randomUUID(),
        description: "Desenvolvimento Backend",
        quantity: 1,
        unitPrice: 10_000,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]
