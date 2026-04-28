import { createElement, useState } from "react"
import { randomUUID } from "expo-crypto"

import { useBottomSheet } from "@/shared/contexts/bottom-sheet.context"

import { AddEditQuoteItem } from "@/shared/components/add-edit-quote-item"

import {
  type Quote,
  type QuoteItem,
  QuoteStatus,
} from "@/shared/interfaces/quote"
import type { AppRoutesProps } from "@/navigation/app-routes"

type CreateQuoteViewModel = AppRoutesProps<"createQuote">["route"]["params"]

export const useCreateQuoteViewModel = (_props: CreateQuoteViewModel) => {
  const [newQuote, setNewQuote] = useState<Quote>({
    id: randomUUID(),
    title: "",
    customer: {
      id: "",
      name: "",
    },
    items: [],
    discountPercentage: 0,
    status: QuoteStatus.DRAFT,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })

  const { openBottomSheet } = useBottomSheet()

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
    newQuote,
    setNewQuote,
    handleOpenEditQuoteItem,
    handleOpenEditQuoteItemWithData,
  }
}
