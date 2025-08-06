import { Transaction, SummaryCardData, User } from "@/types/dashboard";


export const sampleTransactions: Transaction[] = [
  { id: '1', date: '2023-10-01', remark: 'Salary', amount: 3000, currency: 'USD', type: 'Credit' },
  { id: '2', date: '2023-10-02', remark: 'Groceries', amount: -150, currency: 'USD', type: 'Debit' },
  { id: '3', date: '2023-10-03', remark: 'Gym Membership', amount: -50, currency: 'USD', type: 'Debit' },
  { id: '4', date: '2023-10-04', remark: 'Dinner', amount: -40, currency: 'USD', type: 'Debit' },
  { id: '5', date: '2023-10-05', remark: 'Movie Tickets', amount: -30, currency: 'USD', type: 'Debit' },
  { id: '6', date: '2023-10-06', remark: 'Rent', amount: -1200, currency: 'USD', type: 'Debit' },
  { id: '7', date: '2023-10-07', remark: 'Utilities', amount: -100, currency: 'USD', type: 'Debit' },
  { id: '8', date: '2023-10-08', remark: 'Car Payment', amount: -400, currency: 'USD', type: 'Debit' },
  { id: '9', date: '2023-10-09', remark: 'Insurance', amount: -200, currency: 'USD', type: 'Debit' },
];

export const summaryData = {
  totalBalance: { title: 'Total Balance', value: 12345, change: 5, format: 'currency' as const },
  totalCredits: { title: 'Total Credits', value: 7890, change: 3, format: 'currency' as const },
  totalDebits: { title: 'Total Debits', value: 4455, change: -2, format: 'currency' as const },
  transactionCount: { title: 'Transactions', value: 150, change: 10, format: 'number' as const },
}

export const sampleUsers: User[] = [
  { name: 'Ava', avatar: 'https://i.pravatar.cc/40?img=1' },
  { name: 'Liam', avatar: 'https://i.pravatar.cc/40?img=2' },
  { name: 'Noah', avatar: 'https://i.pravatar.cc/40?img=3' },
]
