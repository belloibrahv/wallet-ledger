"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AvatarGroup from "@mui/material/AvatarGroup";
import {
  KeyboardArrowDown as ArrowDownIcon,
  MoreHoriz as MoreHorizIcon,
  Share as ShareIcon,
} from "@mui/icons-material";
import { sampleUsers } from "../../data/sampleData";
import { TabNavigation } from "./TabNavigation";
import { StatusBadge } from "../ui/StatusBadge";

export function PageHeader() {
  return (
    <Box sx={{ mb: 5 }}>
      {/* Page Title Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
          mb: 3,
          mx: 4,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: 'text.primary',
                fontSize: '2rem',
                lineHeight: 1.2,
                letterSpacing: '-0.025em',
              }}
            >
              Wallet Ledger
            </Typography>
            <IconButton 
              size="small" 
              sx={{ 
                color: 'text.secondary', 
                p: 0.5,
                "&:hover": {
                  bgcolor: "rgba(107, 114, 128, 0.1)",
                },
                "&:focus-visible": {
                  outline: "2px solid #0D9488",
                  outlineOffset: "2px",
                },
              }}
            >
              <ArrowDownIcon fontSize="small" />
            </IconButton>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, border: 'solid 1px #eaeff0', width: '70px', height: '30px', borderRadius: '25px', justifyContent: 'center', backgroundColor: '#EAEFF0' }}>
            <Typography sx={{ 
              fontSize: '0.875rem', 
              color: 'text.primary',
              fontWeight: 500,
              paddingLeft: '10px',
            }}>
              Active
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#0D9488',
              color: 'white',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '0.875rem',
              px: 3,
              py: 1,
              borderRadius: 2,
              boxShadow: 'none',
              '&:hover': {
                bgcolor: '#0F766E',
                boxShadow: 'none',
              },
              '&:focus-visible': {
                outline: "2px solid #4B8B9F",
                outlineOffset: "2px",
              },
            }}
          >
            Share
          </Button>
          
          <IconButton
            size="small"
            sx={{
              color: '#000',
              border: 'solid 1px #EAEFF0',
              width: '40px',
              height: '40px',
              borderRadius: '17px',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              p: 1,
              '&:hover': {
                bgcolor: 'rgba(107, 114, 128, 0.1)',
              },
              '&:focus-visible': {
                outline: "2px solid #0D9488",
                outlineOffset: "2px",
              },
            }}
          >
            <MoreHorizIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* User Avatars and Tabs Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 3,
          mb: 4,
        }}
      >
        {/* User Avatar Group */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mx: 4 }}>
          <AvatarGroup
            max={4}
            sx={{
              '& .MuiAvatar-root': {
                width: 36,
                height: 36,
                fontSize: '0.875rem',
                border: '2px solid white',
                ml: -1,
                '&:first-of-type': {
                  ml: 0,
                },
              },
              '& .MuiAvatarGroup-avatar': {
                bgcolor: '#6B7280',
                fontSize: '0.875rem',
                width: 36,
                height: 36,
                border: '2px solid white',
              },
            }}
          >
            {sampleUsers.map((user, index) => (
              <Avatar
                key={user.name}
                src={user.avatar}
                alt={user.name}
                sx={{ 
                  width: 36, 
                  height: 36,
                  border: '2px solid white',
                }}
              />
            ))}
            {/* Add extra avatars to show "+12 others" */}
            {Array.from({ length: 12 }, (_, i) => (
              <Avatar
                key={`extra-${i}`}
                src={`https://i.pravatar.cc/36?img=${i + 10}`}
                sx={{ 
                  width: 36, 
                  height: 36,
                  border: '2px solid white',
                }}
              />
            ))}
          </AvatarGroup>
          
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              fontSize: '0.875rem',
              fontWeight: 500,
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Ava, Liam, Noah +12 others
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
