import type { AppRoutesProps } from "@/navigation/app-routes"

type UseQuoteDetailsViewModelProps =
  AppRoutesProps<"quoteDetails">["route"]["params"]

export const useQuoteDetailsViewModel = (
  props: UseQuoteDetailsViewModelProps
) => ({
  ...props,
})
