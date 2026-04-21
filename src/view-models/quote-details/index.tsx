import { useQuoteDetailsViewModel } from "./use-quote-details-view-model"

import { QuoteDetailsView } from "./quote-details-view"

import type { AppRoutesProps } from "@/navigation/app-routes"

type QuoteDetailsProps = AppRoutesProps<"quoteDetails">

export const QuoteDetails = ({ route }: QuoteDetailsProps) => {
  const props = useQuoteDetailsViewModel({
    quoteId: route.params.quoteId,
  })

  return <QuoteDetailsView {...props} />
}
