import { CreateQuoteView } from "./create-quote-view"
import { useCreateQuoteViewModel } from "./use-create-quote-view-model"

import type { AppRoutesProps } from "@/navigation/app-routes"

type CreateQuoteProps = AppRoutesProps<"createQuote">

export const CreateQuote = ({ route }: CreateQuoteProps) => {
  const props = useCreateQuoteViewModel(route.params)

  return <CreateQuoteView {...props} />
}
