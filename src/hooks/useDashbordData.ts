import { useMemo } from 'react';
import { useDashboardStore } from '../store/dashboardStore';
import { summaryData } from '../data/sampleData';

export function useDashboardData() {
  const { transactions, sortConfig, activeTab } = useDashboardStore();

  const dashboardStats = useMemo(() => {
    const totalCredits = transactions
      .filter(t => t.type === 'Credit')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const totalDebits = transactions
      .filter(t => t.type === 'Debit')
      .reduce((sum, t) => sum + Math.abs(t.amount), 0);
    
    const totalBalance = totalCredits - totalDebits;
    const transactionCount = transactions.length;

    return {
      totalBalance,
      totalCredits,
      totalDebits,
      transactionCount,
    };
  }, [transactions]);

  const summaryCardsData = useMemo(() => {
    return {
      totalBalance: { ...summaryData.totalBalance, value: dashboardStats.totalBalance },
      totalCredits: { ...summaryData.totalCredits, value: dashboardStats.totalCredits },
      totalDebits: { ...summaryData.totalDebits, value: dashboardStats.totalDebits },
      transactionCount: { ...summaryData.transactionCount, value: dashboardStats.transactionCount },
    };
  }, [dashboardStats]);

  return {
    transactions,
    sortConfig,
    activeTab,
    dashboardStats,
    summaryCardsData,
  };
}
