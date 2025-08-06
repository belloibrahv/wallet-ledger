"use client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import TableContainer from "@mui/material/TableContainer";
import TableSortLabel from "@mui/material/TableSortLabel";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import { FiberManualRecord as DotIcon } from "@mui/icons-material";
import { useDashboardStore } from "../../store/dashboardStore";
import { Transaction, SortConfig } from "../../types/dashboard";

interface TransactionRowProps {
  transaction: Transaction;
}

// Mobile Card Component
function TransactionCard({ transaction }: TransactionRowProps) {
  const formatAmount = (amount: number) => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Math.abs(amount));
    
    return amount < 0 ? `-${formatted}` : formatted;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <Card sx={{ 
      mb: 2, 
      border: '1px solid #E5E7EB',
      borderRadius: 3,
      boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    }}>
      <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.primary' }}>
            {transaction.remark}
          </Typography>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              fontWeight: 700,
              color: transaction.type === 'Credit' ? '#10B981' : 'text.primary',
            }}
          >
            {formatAmount(transaction.amount)}
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            {formatDate(transaction.date)}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DotIcon 
              sx={{ 
                fontSize: 8, 
                color: transaction.type === 'Credit' ? '#10B981' : '#EF4444' 
              }} 
            />
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
              {transaction.type}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

// Desktop Table Row Component
function TransactionTableRow({ transaction }: TransactionRowProps) {
  const formatAmount = (amount: number) => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Math.abs(amount));
    
    return amount < 0 ? `-${formatted}` : formatted;
  };

  return (
    <TableRow
      sx={{
        '&:hover': {
          bgcolor: 'rgba(0, 0, 0, 0.02)',
        },
        '&:last-child td': {
          border: 0,
        },
        '& td': {
          borderBottom: '1px solid #F3F4F6',
          py: 3,
        },
      }}
    >
      <TableCell sx={{ 
        fontSize: '0.875rem', 
        color: 'text.primary',
        fontWeight: 500,
      }}>
        {transaction.date}
      </TableCell>
      
      <TableCell sx={{ 
        fontSize: '0.875rem', 
        color: 'text.primary',
        fontWeight: 500,
      }}>
        {transaction.remark}
      </TableCell>
      
      <TableCell sx={{ fontSize: '0.875rem' }} align="right">
        <Typography 
          sx={{ 
            fontWeight: 700,
            color: transaction.type === 'Credit' ? '#10B981' : 'text.primary',
            fontSize: '0.875rem',
          }}
        >
          {formatAmount(transaction.amount)}
        </Typography>
      </TableCell>
      
      <TableCell sx={{ 
        fontSize: '0.875rem', 
        color: 'text.primary',
        fontWeight: 500,
      }}>
        {transaction.currency}
      </TableCell>
      
      <TableCell>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, border: 'solid 1px #eaeff0', width: '70px', height: '30px', borderRadius: '25px', justifyContent: 'center', backgroundColor: '#EAEFF0' }}>
          <DotIcon 
            sx={{ 
              fontSize: 10, 
              color: transaction.type === 'Credit' ? '#10B981' : '#EF4444',
            }} 
          />
          <Typography sx={{ 
            fontSize: '0.875rem', 
            color: 'text.primary',
            fontWeight: 600,
          }}>
            {transaction.type}
          </Typography>
        </Box>
      </TableCell>
    </TableRow>
  );
}

export function TransactionTable() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const { sortConfig, setSortConfig, getSortedTransactions } = useDashboardStore();
  const transactions = getSortedTransactions();

  const handleSort = (key: keyof Transaction) => {
    let direction: 'asc' | 'desc' = 'asc';
    
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    
    setSortConfig({ key, direction });
  };

  if (isMobile) {
    return (
      <Box>
        {transactions.map((transaction) => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}
      </Box>
    );
  }

  return (
    <Box>
      <TableContainer 
        component={Paper} 
        sx={{ 
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          border: '1px solid #E5E7EB',
          borderRadius: 3,
          overflow: 'hidden',
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: '#FAFAFA' }}>
              <TableCell sx={{ 
                fontWeight: 700, 
                color: 'text.secondary', 
                fontSize: '0.875rem', 
                py: 3,
                borderBottom: '1px solid #E5E7EB',
              }}>
                <TableSortLabel
                  active={sortConfig.key === 'date'}
                  direction={sortConfig.key === 'date' ? sortConfig.direction : 'asc'}
                  onClick={() => handleSort('date')}
                  sx={{
                    '& .MuiTableSortLabel-icon': {
                      opacity: 0.5,
                      color: 'text.secondary',
                    },
                    '&.Mui-active .MuiTableSortLabel-icon': {
                      opacity: 1,
                      color: '#0D9488',
                    },
                    '&:hover .MuiTableSortLabel-icon': {
                      opacity: 0.7,
                    },
                  }}
                >
                  Date
                </TableSortLabel>
              </TableCell>
              
              <TableCell sx={{ 
                fontWeight: 700, 
                color: 'text.secondary', 
                fontSize: '0.875rem', 
                py: 3,
                borderBottom: '1px solid #E5E7EB',
              }}>
                <TableSortLabel
                  active={sortConfig.key === 'remark'}
                  direction={sortConfig.key === 'remark' ? sortConfig.direction : 'asc'}
                  onClick={() => handleSort('remark')}
                  sx={{
                    '& .MuiTableSortLabel-icon': {
                      opacity: 0.5,
                      color: 'text.secondary',
                    },
                    '&.Mui-active .MuiTableSortLabel-icon': {
                      opacity: 1,
                      color: '#0D9488',
                    },
                    '&:hover .MuiTableSortLabel-icon': {
                      opacity: 0.7,
                    },
                  }}
                >
                  Remark
                </TableSortLabel>
              </TableCell>
              
              <TableCell 
                align="right" 
                sx={{ 
                  fontWeight: 700, 
                  color: 'text.secondary', 
                  fontSize: '0.875rem', 
                  py: 3,
                  borderBottom: '1px solid #E5E7EB',
                }}
              >
                <TableSortLabel
                  active={sortConfig.key === 'amount'}
                  direction={sortConfig.key === 'amount' ? sortConfig.direction : 'asc'}
                  onClick={() => handleSort('amount')}
                  sx={{
                    flexDirection: 'row-reverse',
                    '& .MuiTableSortLabel-icon': {
                      opacity: 0.5,
                      color: 'text.secondary',
                      marginLeft: 0,
                      marginRight: 0.5,
                    },
                    '&.Mui-active .MuiTableSortLabel-icon': {
                      opacity: 1,
                      color: '#0D9488',
                    },
                    '&:hover .MuiTableSortLabel-icon': {
                      opacity: 0.7,
                    },
                  }}
                >
                  Amount
                </TableSortLabel>
              </TableCell>
              
              <TableCell sx={{ 
                fontWeight: 700, 
                color: 'text.secondary', 
                fontSize: '0.875rem', 
                py: 3,
                borderBottom: '1px solid #E5E7EB',
              }}>
                <TableSortLabel
                  active={sortConfig.key === 'currency'}
                  direction={sortConfig.key === 'currency' ? sortConfig.direction : 'asc'}
                  onClick={() => handleSort('currency')}
                  sx={{
                    '& .MuiTableSortLabel-icon': {
                      opacity: 0.5,
                      color: 'text.secondary',
                    },
                    '&.Mui-active .MuiTableSortLabel-icon': {
                      opacity: 1,
                      color: '#0D9488',
                    },
                    '&:hover .MuiTableSortLabel-icon': {
                      opacity: 0.7,
                    },
                  }}
                >
                  Currency
                </TableSortLabel>
              </TableCell>
              
              <TableCell sx={{ 
                fontWeight: 700, 
                color: 'text.secondary', 
                fontSize: '0.875rem', 
                py: 3,
                borderBottom: '1px solid #E5E7EB',
              }}>
                <TableSortLabel
                  active={sortConfig.key === 'type'}
                  direction={sortConfig.key === 'type' ? sortConfig.direction : 'asc'}
                  onClick={() => handleSort('type')}
                  sx={{
                    '& .MuiTableSortLabel-icon': {
                      opacity: 0.5,
                      color: 'text.secondary',
                    },
                    '&.Mui-active .MuiTableSortLabel-icon': {
                      opacity: 1,
                      color: '#0D9488',
                    },
                    '&:hover .MuiTableSortLabel-icon': {
                      opacity: 0.7,
                    },
                  }}
                >
                  Type
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {transactions.map((transaction) => (
              <TransactionTableRow key={transaction.id} transaction={transaction} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
