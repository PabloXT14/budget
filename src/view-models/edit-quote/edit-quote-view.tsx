import { StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { colors } from "@/shared/theme/colors"

import { DismissKeyboardView } from "@/shared/components/dismiss-keyboard-view"
import { Header } from "./components/header"
import { Info } from "./components/info"
import { StatusSection } from "./components/status-section"
import { QuoteItemsSection } from "./components/quote-items-section"
import { PriceSection } from "./components/price-section"
import { Footer } from "./components/footer"

import type { useEditQuoteViewModel } from "./use-edit-quote-view-model"

type EditQuoteViewProps = ReturnType<typeof useEditQuoteViewModel>

export const EditQuoteView = ({
  quote,
  handleOpenEditQuoteItem,
  handleOpenEditQuoteItemWithData,
}: EditQuoteViewProps) => {
  if (!quote) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <DismissKeyboardView>
        {/* CONTENT */}
        <View style={styles.content}>
          <Info title={quote.title} client={quote.customer.name} />

          <StatusSection status={quote.status} />

          <QuoteItemsSection
            items={quote.items}
            onEditItem={handleOpenEditQuoteItem}
            onAddItem={handleOpenEditQuoteItemWithData}
          />

          <PriceSection
            quoteItems={quote.items}
            discountPercentage={quote.discountPercentage}
          />
        </View>
      </DismissKeyboardView>

      <Footer />
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
})
