export interface Transaction {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: 'USD';
  type: 'Credit' | 'Debit';
}

export interface SummaryCardData {
  title: string;
  value: number;
  change: number;
  format: 'currency' | 'number';
}

export interface User {
  name: string;
  avatar: string;
}

export interface SortConfig {
  key: keyof Transaction | null;
  direction: 'asc' | 'desc';
}

export interface DashboardData {
  transactions: Transaction[];
  summary: {
    totalBalance: SummaryCardData;
    totalCredits: SummaryCardData;
    totalDebits: SummaryCardData;
    transactionCount: SummaryCardData
  };
  users: User[];
}
