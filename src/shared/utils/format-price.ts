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

export function formatPriceFromCents({
  price,
  showSymbol = false,
}: FormatPriceProps): string {
  const symbolToRemove = showSymbol ? "" : "R$"
  const CENTS_TO_CURRENCY = 100

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
    .format(price / CENTS_TO_CURRENCY)
    .replace(symbolToRemove, "")
    .trim()
}
