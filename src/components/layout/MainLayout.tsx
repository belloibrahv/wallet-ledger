"use client";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useMediaQuery, useTheme } from "@mui/material";
import { Sidebar } from "./Sidebar";
import { TopNavigation } from "./TopNavigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  const handleSidebarExpand = (expanded: boolean) => {
    setSidebarExpanded(expanded);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <TopNavigation onMobileMenuToggle={handleMobileMenuToggle} />
      
      <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <Sidebar 
          mobileOpen={mobileOpen} 
          onMobileClose={handleMobileClose} 
          isMobile={isMobile} 
          onSidebarExpand={handleSidebarExpand}
        />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 3, sm: 4, md: 5 },
            maxWidth: "100%",
            overflow: "auto",
            bgcolor: "background.default",
            position: "relative",
            marginLeft: { xs: 0, md: sidebarExpanded ? "240px" : "72px" }, // Dynamic margin based on sidebar state
            transition: "margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              px: { xs: 0, sm: 0 },
              maxWidth: "100% !important",
            }}
          >
            {children}
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
