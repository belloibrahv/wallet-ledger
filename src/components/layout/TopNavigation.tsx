"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  GridView as GridViewIcon,
} from "@mui/icons-material";

interface TopNavigationProps {
  onMobileMenuToggle?: () => void;
}

export function TopNavigation({ onMobileMenuToggle }: TopNavigationProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        borderBottom: "1px solid #E5E7EB",
        color: "text.primary",
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ 
        justifyContent: "space-between", 
        px: { xs: 2, sm: 3 },
        py: 1,
        minHeight: "64px",
      }}>
        {/* Left Section - Mobile Menu Only */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={onMobileMenuToggle}
              sx={{
                color: "text.secondary",
                "&:hover": {
                  bgcolor: "rgba(107, 114, 128, 0.1)",
                },
                "&:focus-visible": {
                  outline: "2px solid #0D9488",
                  outlineOffset: "2px",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>

        {/* Right Section - Search, Grid View, User Avatar */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton
            size="small"
            aria-label="search"
            sx={{
              color: "text.secondary",
              p: 1,
              "&:hover": {
                bgcolor: "rgba(107, 114, 128, 0.1)",
              },
              "&:focus-visible": {
                outline: "2px solid #0D9488",
                outlineOffset: "2px",
              },
            }}
          >
            <SearchIcon fontSize="small" />
          </IconButton>

          <IconButton
            size="small"
            aria-label="grid view"
            sx={{
              color: "text.secondary",
              p: 1,
              "&:hover": {
                bgcolor: "rgba(107, 114, 128, 0.1)",
              },
              "&:focus-visible": {
                outline: "2px solid #0D9488",
                outlineOffset: "2px",
              },
            }}
          >
            <GridViewIcon fontSize="small" />
          </IconButton>

          <Avatar
            sx={{
              width: 32,
              height: 32,
              ml: 1,
              cursor: "pointer",
              border: "2px solid transparent",
              "&:hover": {
                border: "2px solid #E5E7EB",
              },
              "&:focus-visible": {
                outline: "2px solid #0D9488",
                outlineOffset: "2px",
              },
            }}
            src="https://i.pravatar.cc/32?img=5"
            alt="User Avatar"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
