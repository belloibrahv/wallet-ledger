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
      display: 'flex', 
      gap: 0, 
      borderBottom: '1px solid #E5E7EB', 
      ml: 'auto',
      minWidth: 'fit-content',
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
                  height: 2,
                  bgcolor: '#0D9488',
                  borderRadius: '1px 1px 0 0',
                }
              : {},
          }}
        >
          {tab.label}
        </Button>
      ))}
    </Box>
  );
}
