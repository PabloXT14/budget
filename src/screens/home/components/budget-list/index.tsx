import { FlatList } from "react-native"

import { BudgetCard } from "../budget-card"

import { BUDGETS } from "@/data/budgets"

export const BudgetList = () => (
  <FlatList
    data={BUDGETS}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <BudgetCard data={item} />}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingBottom: 24, gap: 8 }}
  />
)
