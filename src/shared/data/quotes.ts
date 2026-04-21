import { randomUUID } from "expo-crypto"

import { type Quote, QuoteStatus } from "@/shared/interfaces/quote"

export const QUOTES: Quote[] = [
  {
    id: randomUUID(),
    title: "Orçamento para desenvolvimento de aplicativo móvel",
    customer: {
      id: randomUUID(),
      name: "Empresa XYZ",
    },
    status: QuoteStatus.APPROVED,
    discountPercentage: 0.1, // 10%
    items: [
      {
        id: randomUUID(),
        title: "Design de interfaces",
        description: "Criação de wireframes e protótipos de alta fidelidade",
        quantity: 1,
        unitPriceInCents: 384_750,
      },
      {
        id: randomUUID(),
        title: "Desenvolvimento front-end",
        description: "Criação de interfaces de usuário interativas",
        quantity: 2,
        unitPriceInCents: 384_750,
      },
      {
        id: randomUUID(),
        title: "Desenvolvimento back-end",
        description: "Implementação de servidor, banco de dados e APIs",
        quantity: 1,
        unitPriceInCents: 384_750,
      },
      {
        id: randomUUID(),
        title: "Implantação e suporte",
        description: "Publicação nas lojas de aplicativos e suporte técnico",
        quantity: 1,
        unitPriceInCents: 450_750,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    title: "Orçamento para consultoria em TI",
    customer: {
      id: randomUUID(),
      name: "Empresa ABC",
    },
    status: QuoteStatus.DRAFT,
    discountPercentage: 0.2,
    items: [
      {
        id: randomUUID(),
        title: "Desenvolvimento front-end",
        description: "Criação de interfaces de usuário interativas",
        quantity: 2,
        unitPriceInCents: 384_750,
      },
      {
        id: randomUUID(),
        title: "Desenvolvimento back-end",
        description: "Implementação de servidor, banco de dados e APIs",
        quantity: 1,
        unitPriceInCents: 384_750,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    title: "Serviços de SEO",
    customer: {
      id: randomUUID(),
      name: "SEO Masters",
    },
    status: QuoteStatus.SENT,
    discountPercentage: 0,
    items: [
      {
        id: randomUUID(),
        title: "Desenvolvimento back-end",
        description: "Implementação de servidor, banco de dados e APIs",
        quantity: 1,
        unitPriceInCents: 384_750,
      },
      {
        id: randomUUID(),
        title: "Implantação e suporte",
        description: "Publicação nas lojas de aplicativos e suporte técnico",
        quantity: 1,
        unitPriceInCents: 450_750,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    title: "Criação de conteúdo",
    customer: {
      id: randomUUID(),
      name: "Content Creators",
    },
    status: QuoteStatus.DRAFT,
    discountPercentage: 0.2,
    items: [
      {
        id: randomUUID(),
        title: "Design de interfaces",
        description: "Criação de wireframes e protótipos de alta fidelidade",
        quantity: 1,
        unitPriceInCents: 384_750,
      },
      {
        id: randomUUID(),
        title: "Desenvolvimento front-end",
        description: "Criação de interfaces de usuário interativas",
        quantity: 2,
        unitPriceInCents: 384_750,
      },
      {
        id: randomUUID(),
        title: "Desenvolvimento back-end",
        description: "Implementação de servidor, banco de dados e APIs",
        quantity: 1,
        unitPriceInCents: 384_750,
      },
      {
        id: randomUUID(),
        title: "Implantação e suporte",
        description: "Publicação nas lojas de aplicativos e suporte técnico",
        quantity: 1,
        unitPriceInCents: 450_750,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    title: "Gestão de redes sociais",
    customer: {
      id: randomUUID(),
      name: "Social Experts",
    },
    status: QuoteStatus.REJECTED,
    discountPercentage: 0,
    items: [
      {
        id: randomUUID(),
        title: "Design de interfaces",
        description: "Criação de wireframes e protótipos de alta fidelidade",
        quantity: 1,
        unitPriceInCents: 384_750,
      },
      {
        id: randomUUID(),
        title: "Desenvolvimento front-end",
        description: "Criação de interfaces de usuário interativas",
        quantity: 2,
        unitPriceInCents: 384_750,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    title: "Design de interface",
    customer: {
      id: randomUUID(),
      name: "UI/UX Designers",
    },
    status: QuoteStatus.APPROVED,
    discountPercentage: 0,
    items: [
      {
        id: randomUUID(),
        title: "Design de interfaces",
        description: "Criação de wireframes e protótipos de alta fidelidade",
        quantity: 1,
        unitPriceInCents: 384_750,
      },
      {
        id: randomUUID(),
        title: "Desenvolvimento front-end",
        description: "Criação de interfaces de usuário interativas",
        quantity: 2,
        unitPriceInCents: 384_750,
      },
      {
        id: randomUUID(),
        title: "Desenvolvimento back-end",
        description: "Implementação de servidor, banco de dados e APIs",
        quantity: 1,
        unitPriceInCents: 384_750,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    title: "Desenvolvimento de aplicativos",
    customer: {
      id: randomUUID(),
      name: "App Developers",
    },
    status: QuoteStatus.SENT,
    discountPercentage: 0,
    items: [
      {
        id: randomUUID(),
        title: "Design de interfaces",
        description: "Criação de wireframes e protótipos de alta fidelidade",
        quantity: 1,
        unitPriceInCents: 384_750,
      },
      {
        id: randomUUID(),
        title: "Desenvolvimento front-end",
        description: "Criação de interfaces de usuário interativas",
        quantity: 2,
        unitPriceInCents: 384_750,
      },

      {
        id: randomUUID(),
        title: "Implantação e suporte",
        description: "Publicação nas lojas de aplicativos e suporte técnico",
        quantity: 1,
        unitPriceInCents: 450_750,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]
