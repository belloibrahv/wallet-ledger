import { create } from "zustand";
import { Transaction, SortConfig } from "@/types/dashboard";
import { sampleTransactions } from "@/data/sampleData";

interface DashboardStore {
  transactions: Transaction[];
  sortConfig: SortConfig;
  activeTab: "Overview" | "Transactions";
  setSortConfig: (config: SortConfig) => void;
  setActiveTab: (tab: "Overview" | "Transactions") => void;
  getSortedTransactions: () => Transaction[];
}

export const useDashboardStore = create<DashboardStore>((set, get) => ({
  transactions: sampleTransactions,
  sortConfig: { key: null, direction: "asc" },
  activeTab: "Overview",

  setSortConfig: (config) => set({ sortConfig: config }),
  setActiveTab: (tab) => set({ activeTab: tab }),

  getSortedTransactions: () => {
    const { transactions, sortConfig } = get();

    if (!sortConfig.key) return transactions;

    return [...transactions].sort((a, b) => {
      const aValue = a[sortConfig.key!];
      const bValue = b[sortConfig.key!];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortConfig.direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortConfig.direction === "asc"
          ? aValue - bValue
          : bValue - aValue;
      }

      return 0;
    });
  },
}));
