import { FlatList } from "react-native"

import { QuoteCard } from "../quote-card"

import { QUOTES } from "@/shared/data/quotes"

export const QuotesList = () => (
  <FlatList
    data={QUOTES}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <QuoteCard data={item} />}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingBottom: 24, gap: 8 }}
  />
)
