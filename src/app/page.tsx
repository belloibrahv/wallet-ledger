import { MainLayout } from "../components/layout/MainLayout";
import { PageHeader } from "../components/dashboard/PageHeader";
import { SummaryCards } from "../components/dashboard/SummaryCards";
import { TransactionTable } from "../components/dashboard/TransactionTable";
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
        <SummaryCards />
        <TransactionTable />
      </Box>
    </MainLayout>
  );
}
