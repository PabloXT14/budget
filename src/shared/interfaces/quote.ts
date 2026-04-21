import type { Customer } from "./customer"

export enum QuoteStatus {
  DRAFT = "Rascunho",
  SENT = "Enviado",
  APPROVED = "Aprovado",
  REJECTED = "Recusado",
}

export type QuoteItem = {
  id: string
  title: string
  description: string
  unitPriceInCents: number // em centavos (boa prática)
  quantity: number
}

export type Quote = {
  id: string
  title: string

  customer: Customer

  status: QuoteStatus

  items: QuoteItem[]

  discountPercentage?: number // opcional, caso haja desconto

  createdAt: string
  updatedAt: string
}
