"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useDashboardStore } from "../../store/dashboardStore";

export function TabNavigation() {
  const { activeTab, setActiveTab } = useDashboardStore();
  
  const tabs = [
    { label: 'Overview', value: 'Overview' as const },
    { label: 'Transactions', value: 'Transactions' as const },
  ];

  return (
    <Box sx={{ 
      width: '100%',
      borderBottom: '1px solid #E5E7EB',
      mb: 3,
    }}>
      <Box sx={{ 
        display: 'flex', 
        gap: 0,
        width: '100%',
        maxWidth: '100%',
        overflowX: 'auto',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}>
        {tabs.map((tab) => (
          <Button
            key={tab.label}
            variant="text"
            onClick={() => setActiveTab(tab.value)}
            sx={{
              textTransform: 'none',
              fontWeight: activeTab === tab.value ? 600 : 500,
              color: activeTab === tab.value ? '#0D9488' : 'text.secondary',
              fontSize: '0.875rem',
              px: 2,
              py: 1.5,
              position: 'relative',
              minWidth: 'auto',
              borderRadius: 0,
              '&:hover': {
                bgcolor: 'transparent',
                color: activeTab === tab.value ? '#0D9488' : 'text.primary',
              },
              '&:focus-visible': {
                outline: "2px solid #0D9488",
                outlineOffset: "2px",
              },
              '&::after': activeTab === tab.value
                ? {
                    content: '""',
                    position: 'absolute',
                    bottom: -1,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: '#0D9488',
                  }
                : {},
            }}
          >
            {tab.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
