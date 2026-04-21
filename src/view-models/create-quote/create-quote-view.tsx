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

import type { useCreateQuoteViewModel } from "./use-create-quote-view-model"

type CreateQuoteViewProps = ReturnType<typeof useCreateQuoteViewModel>

export const CreateQuoteView = ({
  newQuote,
  handleOpenEditQuoteItem,
  handleOpenEditQuoteItemWithData,
}: CreateQuoteViewProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <DismissKeyboardView>
        <Header />

        {/* CONTENT */}
        <View style={styles.content}>
          <Info title={newQuote.title} client={newQuote.customer.name} />

          <StatusSection status={newQuote.status} />

          <QuoteItemsSection
            items={[
              {
                id: "1",
                title: "Serviço 1",
                description: "Descrição do serviço 1",
                quantity: 2,
                unitPriceInCents: 5000,
              },
            ]}
            onEditItem={handleOpenEditQuoteItem}
            onAddItem={handleOpenEditQuoteItemWithData}
          />

          <PriceSection
            quoteItems={newQuote.items}
            discountPercentage={newQuote.discountPercentage}
          />
        </View>

        <Footer />
      </DismissKeyboardView>
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
