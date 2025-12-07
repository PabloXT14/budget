type FormatPriceProps = {
  price: number
  showSymbol?: boolean
}

export function formatPrice({ price, showSymbol = true }: FormatPriceProps) {
  const symbolToRemove = showSymbol ? "" : "R$"

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
    .format(price)
    .replace(symbolToRemove, "")
    .trim()
}
