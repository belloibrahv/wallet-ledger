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

  const handleMobileMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Sidebar mobileOpen={mobileOpen} onMobileClose={handleMobileClose} />

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0, // Prevents flex item from growing beyond container
          width: "100%",
          transition: "margin-left 0.3s ease-in-out",
          marginLeft: { xs: 0, md: "72px" }, // Account for collapsed sidebar width
          position: "relative",
        }}
      >
        <TopNavigation onMobileMenuToggle={handleMobileMenuToggle} />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 3, sm: 4, md: 5 },
            maxWidth: "100%",
            bgcolor: "background.default",
            position: "relative",
            zIndex: 1, // Ensure content is below sidebar when expanded
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
