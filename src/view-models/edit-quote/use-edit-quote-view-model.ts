import { createElement } from "react"

import { QUOTES } from "@/shared/data/quotes"

import { useBottomSheet } from "@/shared/contexts/bottom-sheet.context"

import { AddEditQuoteItem } from "@/shared/components/add-edit-quote-item"

import type { QuoteItem } from "@/shared/interfaces/quote"
import type { AppRoutesProps } from "@/navigation/app-routes"

type EditQuoteViewModel = AppRoutesProps<"editQuote">["route"]["params"]

export const useEditQuoteViewModel = ({ quoteId }: EditQuoteViewModel) => {
  const { openBottomSheet } = useBottomSheet()

  const quote = QUOTES.find((q) => q.id === quoteId)

  const handleOpenEditQuoteItem = (quoteItem: QuoteItem) => {
    openBottomSheet({
      content: createElement(AddEditQuoteItem, { quoteItem }),
      config: {
        snapPoints: ["90%"],
      },
    })
  }

  const handleOpenEditQuoteItemWithData = () => {
    openBottomSheet({
      content: createElement(AddEditQuoteItem),
      config: {
        snapPoints: ["90%"],
      },
    })
  }

  return {
    quote,
    handleOpenEditQuoteItem,
    handleOpenEditQuoteItemWithData,
  }
}
