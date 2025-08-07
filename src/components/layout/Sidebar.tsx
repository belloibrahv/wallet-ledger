"use client";
import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useTheme } from "@mui/material/";
import {
  Dashboard as DashboardIcon,
  Receipt as TransactionsIcon,
  Assessment as ReportsIcon,
  Settings as SettingsIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { Logo } from '@/components/ui/Logo';

interface SidebarProps {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
  isMobile?: boolean;
  onSidebarExpand?: (expanded: boolean) => void;
}

const DRAWER_WIDTH = 240;
const DRAWER_WIDTH_COLLAPSED = 72;

const menuItems = [
  { text: "Dashboard", icon: DashboardIcon, active: true, path: "/" },
  { text: "Transactions", icon: TransactionsIcon, active: false, path: "/transactions" },
  { text: "Reports", icon: ReportsIcon, active: false, path: "/reports" },
  { text: "Settings", icon: SettingsIcon, active: false, path: "/settings" },
];

export function Sidebar({
  mobileOpen = false,
  onMobileClose,
  isMobile = false,
  onSidebarExpand,
}: SidebarProps) {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");
  const sidebarRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleItemClick = (text: string) => {
    setActiveItem(text);
    // Here you would typically navigate to the route
    console.log(`Navigating to: ${text}`);
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setIsExpanded(true);
      onSidebarExpand?.(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      // Set a timeout to collapse the sidebar
      timeoutRef.current = setTimeout(() => {
        setIsExpanded(false);
        onSidebarExpand?.(false);
      }, 500); // Increased delay for better UX
    }
  };

  const handleItemMouseEnter = () => {
    if (!isMobile && !isExpanded) {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setIsExpanded(true);
      onSidebarExpand?.(true);
    }
  };

  // Handle clicks outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !isMobile &&
        isExpanded
      ) {
        setIsExpanded(false);
        onSidebarExpand?.(false);
      }
    };

    // Add event listener for clicks outside
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Clean up timeout on unmount
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isExpanded, isMobile, onSidebarExpand]);

  // Reset states when mobile changes
  useEffect(() => {
    if (isMobile) {
      setIsExpanded(false);
      onSidebarExpand?.(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }
  }, [isMobile, onSidebarExpand]);

  const sidebarContent = (
    <Box 
      ref={sidebarRef}
      sx={{ 
        width: isExpanded ? DRAWER_WIDTH : DRAWER_WIDTH_COLLAPSED, 
        height: "100%", 
        bgcolor: "#F8F9FA",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        overflow: "hidden",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 1200, // Ensure sidebar is above other content
        boxShadow: isExpanded ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none",
        borderRight: "1px solid #E5E7EB",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Logo Section */}
      <Box sx={{ 
        p: 2, 
        borderBottom: "1px solid #E5E7EB",
        display: "flex",
        alignItems: "center",
        justifyContent: isExpanded ? "space-between" : "center",
        minHeight: "64px",
        position: 'relative',
      }}>
        {isExpanded ? (
          <>
            <Logo variant="default" size={112} />
            <IconButton
              size="small"
              sx={{
                color: "text.secondary",
                display: { md: "none" },
                "&:hover": {
                  bgcolor: "rgba(107, 114, 128, 0.1)",
                },
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
              }}
              onClick={onMobileClose}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
          </>
        ) : (
          <Logo variant="icon" size={32} />
        )}
      </Box>

      {/* Navigation Menu */}
      <List sx={{ pt: 1, px: 1, flex: 1 }}>
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeItem === item.text;
          
          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
              {isExpanded ? (
                <ListItemButton
                  onClick={() => handleItemClick(item.text)}
                  selected={isActive}
                  sx={{
                    borderRadius: 2,
                    backgroundColor: isActive
                      ? "rgba(13, 148, 136, 0.1)"
                      : "transparent",
                    color: isActive ? "#0D9488" : "#6B7280",
                    py: 1.5,
                    px: 2,
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      backgroundColor: isActive 
                        ? "rgba(13, 148, 136, 0.15)"
                        : "rgba(107, 114, 128, 0.05)",
                      transform: "translateX(4px)",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    },
                    "&:focus-visible": {
                      outline: "2px solid #0D9488",
                      outlineOffset: "2px",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "rgba(13, 148, 136, 0.1)",
                      color: "#0D9488",
                    },
                    "&.Mui-selected:hover": {
                      backgroundColor: "rgba(13, 148, 136, 0.15)",
                    },
                  }}
                >
                  <ListItemIcon sx={{ 
                    minWidth: 40, 
                    color: "inherit",
                    "& .MuiSvgIcon-root": {
                      fontSize: "1.25rem",
                      transition: "transform 0.2s ease-in-out",
                    },
                    "&:hover .MuiSvgIcon-root": {
                      transform: "scale(1.1)",
                    }
                  }}>
                    <IconComponent />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 600 : 500,
                      fontSize: "0.875rem",
                    }}
                  />
                </ListItemButton>
              ) : (
                <Tooltip title={item.text} placement="right">
                  <ListItemButton
                    onClick={() => handleItemClick(item.text)}
                    onMouseEnter={handleItemMouseEnter}
                    selected={isActive}
                    sx={{
                      borderRadius: 2,
                      backgroundColor: isActive
                        ? "rgba(13, 148, 136, 0.1)"
                        : "transparent",
                      color: isActive ? "#0D9488" : "#6B7280",
                      py: 1.5,
                      px: 1.5,
                      justifyContent: "center",
                      minHeight: 48,
                      "&:hover": {
                        backgroundColor: isActive 
                          ? "rgba(13, 148, 136, 0.15)"
                          : "rgba(107, 114, 128, 0.05)",
                        transform: "scale(1.05)",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      },
                      "&:focus-visible": {
                        outline: "2px solid #0D9488",
                        outlineOffset: "2px",
                      },
                      "&.Mui-selected": {
                        backgroundColor: "rgba(13, 148, 136, 0.1)",
                        color: "#0D9488",
                      },
                      "&.Mui-selected:hover": {
                        backgroundColor: "rgba(13, 148, 136, 0.15)",
                      },
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    <ListItemIcon sx={{ 
                      minWidth: 0, 
                      color: "inherit",
                      "& .MuiSvgIcon-root": {
                        fontSize: "1.5rem",
                        transition: "transform 0.2s ease-in-out",
                      },
                      "&:hover .MuiSvgIcon-root": {
                        transform: "scale(1.1)",
                      }
                    }}>
                      <IconComponent />
                    </ListItemIcon>
                  </ListItemButton>
                </Tooltip>
              )}
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  if (isMobile) {
    return (
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
            borderRight: "none",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          },
        }}
      >
        <Box 
          sx={{ 
            width: DRAWER_WIDTH, 
            height: "100%", 
            bgcolor: "#F8F9FA",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Mobile Logo Section */}
          <Box sx={{ 
            p: 2, 
            borderBottom: "1px solid #E5E7EB",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "64px",
          }}>
            <Logo variant="default" size={112} />
            <IconButton
              size="small"
              sx={{
                color: "text.secondary",
                "&:hover": {
                  bgcolor: "rgba(107, 114, 128, 0.1)",
                },
              }}
              onClick={onMobileClose}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Mobile Navigation Menu */}
          <List sx={{ pt: 1, px: 1, flex: 1 }}>
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeItem === item.text;
              
              return (
                <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton
                    onClick={() => handleItemClick(item.text)}
                    selected={isActive}
                    sx={{
                      borderRadius: 2,
                      backgroundColor: isActive
                        ? "rgba(13, 148, 136, 0.1)"
                        : "transparent",
                      color: isActive ? "#0D9488" : "#6B7280",
                      py: 1.5,
                      px: 2,
                      "&:hover": {
                        backgroundColor: isActive 
                          ? "rgba(13, 148, 136, 0.15)"
                          : "rgba(107, 114, 128, 0.05)",
                      },
                      "&:focus-visible": {
                        outline: "2px solid #0D9488",
                        outlineOffset: "2px",
                      },
                      "&.Mui-selected": {
                        backgroundColor: "rgba(13, 148, 136, 0.1)",
                        color: "#0D9488",
                      },
                      "&.Mui-selected:hover": {
                        backgroundColor: "rgba(13, 148, 136, 0.15)",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ 
                      minWidth: 40, 
                      color: "inherit",
                      "& .MuiSvgIcon-root": {
                        fontSize: "1.25rem",
                      }
                    }}>
                      <IconComponent />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        fontWeight: isActive ? 600 : 500,
                        fontSize: "0.875rem",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    );
  }

  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      {sidebarContent}
    </Box>
  );
}
