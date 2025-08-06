import { MainLayout } from "../components/layout/MainLayout";
import { PageHeader } from "../components/dashboard/PageHeader";
import { SummaryCards } from "../components/dashboard/SummaryCards";
import { TransactionTable } from "../components/dashboard/TransactionTable";
import { TabNavigation } from "../components/dashboard/TabNavigation";
import { Box } from "@mui/material";

export default function HomePage() {
  return (
    <MainLayout>
      <Box sx={{ 
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
      }}>
        <PageHeader />
        <Box sx={{ 
          width: '100%',
          maxWidth: '100%',
          px: { xs: 3, sm: 4, md: 5 },
          mx: 'auto',
        }}>
          <TabNavigation />
          <SummaryCards />
          <TransactionTable />
        </Box>
      </Box>
    </MainLayout>
  );
}
