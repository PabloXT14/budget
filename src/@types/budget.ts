export type Budget = {
  id: string // Identificador único
  client: string // Nome do cliente
  title: string // Título do serviço
  items: BudgetItem[] // Uma lista de itens o tipo está abaixo
  discountPercentage?: number // Valor do desconto, opcional, caso haja
  status: BudgetStatus // Rascunho, Enviado, Aprovado ou Recusado
  createdAt: string // Data de criação
  updatedAt: string // Data quando foi atualizado pela última vez
}

export enum BudgetStatus {
  DRAFT = "Rascunho",
  SENT = "Enviado",
  APPROVED = "Aprovado",
  REJECTED = "Recusado",
}

export type BudgetItem = {
  id: string // Identificador único do item
  description: string // Descrição do item
  quantity: number // Quantidade do item
  unitPrice: number // Preço unitário do item
}
