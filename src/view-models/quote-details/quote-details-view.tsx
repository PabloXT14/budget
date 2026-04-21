import { ScrollView, StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { colors } from "@/shared/theme"
import { QUOTES } from "@/shared/data/quotes"

import { Header } from "./components/header"
import { QuoteInfo } from "./components/quote-info"
import { QuoteItemsList } from "./components/quote-items-list"
import { QuotePrice } from "./components/quote-price"
import { Footer } from "./components/footer"

import type { useQuoteDetailsViewModel } from "./use-quote-details-view-model"

type QuoteDetailsViewProps = ReturnType<typeof useQuoteDetailsViewModel>

export const QuoteDetailsView = ({ quoteId }: QuoteDetailsViewProps) => {
  const quote = QUOTES.find((item) => item.id === quoteId)

  if (!quote) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header quoteId={quote.id} status={quote.status} />

      {/* CONTENT */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <QuoteInfo data={quote} />

        <View style={styles.services}>
          <QuoteItemsList items={quote.items} />

          <QuotePrice
            items={quote.items}
            discountPercentage={quote.discountPercentage}
          />
        </View>
      </ScrollView>

      <Footer quoteId={quote.id} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flexGrow: 1,
    gap: 20,
    padding: 20,
  },
  services: {
    gap: 8,
  },
})
