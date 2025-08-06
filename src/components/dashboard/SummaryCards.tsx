"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import { summaryData } from "../../data/sampleData";
import { SummaryCardData } from "../../types/dashboard";

interface SummaryCardProps {
  data: SummaryCardData;
}

function SummaryCard({ data }: SummaryCardProps) {
  const formatValue = (value: number, format: 'currency' | 'number') => {
    if (format === 'currency') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value);
    }
    return value.toLocaleString();
  };

  const formatChange = (change: number) => {
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change}%`;
  };

  const getChangeColor = (change: number) => {
    return change >= 0 ? '#10B981' : '#EF4444';
  };

  return (
    <Card
      sx={{
        height: '100%',
        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        border: '1px solid #F3F4F6',
        borderRadius: 3,
        bgcolor: 'background.paper',
        '&:hover': {
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        },
      }}
    >
      <CardContent sx={{ p: 4, '&:last-child': { pb: 4 } }}>
        {/* Header with title and menu */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            mb: 3,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              fontSize: '0.875rem',
              fontWeight: 500,
              lineHeight: 1.4,
            }}
          >
            {data.title}
          </Typography>
          
          <IconButton
            size="small"
            aria-label="more options"
            sx={{
              color: 'text.secondary',
              p: 0.5,
              mt: -0.5,
              '&:hover': {
                bgcolor: 'rgba(107, 114, 128, 0.1)',
              },
              '&:focus-visible': {
                outline: "2px solid #0D9488",
                outlineOffset: "2px",
              },
            }}
          >
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Value */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: '2.5rem',
            color: 'text.primary',
            mb: 1.5,
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
          }}
        >
          {formatValue(data.value, data.format)}
        </Typography>

        {/* Change indicator */}
        <Typography
          variant="body2"
          sx={{
            color: getChangeColor(data.change),
            fontSize: '0.875rem',
            fontWeight: 600,
            lineHeight: 1.4,
          }}
        >
          {formatChange(data.change)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export function SummaryCards() {
  const cards = [
    summaryData.totalBalance,
    summaryData.totalCredits,
    summaryData.totalDebits,
    summaryData.transactionCount,
  ];

  return (
    <Box sx={{ mb: 6 }}>
      <Grid container spacing={4}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} lg={3} key={index}>
            <SummaryCard data={card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
