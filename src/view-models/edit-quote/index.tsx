import { EditQuoteView } from "./edit-quote-view"
import { useEditQuoteViewModel } from "./use-edit-quote-view-model"

import type { AppRoutesProps } from "@/navigation/app-routes"

type EditQuoteProps = AppRoutesProps<"editQuote">

export const EditQuote = ({ route }: EditQuoteProps) => {
  const props = useEditQuoteViewModel(route.params)

  return <EditQuoteView {...props} />
}
