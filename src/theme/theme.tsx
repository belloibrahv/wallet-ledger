import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4B8B9F', // Updated from #0D9488 to #4B8B9F
    },
    secondary: {
      main: '#6B7280', // Gray color
    },
    success: {
      main: '#10B981', // Green for positive changes
    },
    error: {
      main: '#EF4444', // Red for negative changes
    },
    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1F2937',
      secondary: '#6B7280',
    },
  },
  typography: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    h3: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.1,
      letterSpacing: '-0.025em',
    },
    h4: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.2,
      letterSpacing: '-0.025em',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          border: '1px solid #F3F4F6',
          borderRadius: 12,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
          '&:focus-visible': {
            outline: '2px solid #4B8B9F',
            outlineOffset: '2px',
          },
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#3A6D7C', // Darker shade for hover state
            boxShadow: 'none',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&:focus-visible': {
            outline: '2px solid #4B8B9F',
            outlineOffset: '2px',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #F3F4F6',
          padding: '24px 16px',
        },
        head: {
          fontWeight: 700,
          color: '#6B7280',
          backgroundColor: '#FAFAFA',
          borderBottom: '1px solid #E5E7EB',
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          '& .MuiTableSortLabel-icon': {
            opacity: 0.5,
            color: '#6B7280',
          },
          '&.Mui-active .MuiTableSortLabel-icon': {
            opacity: 1,
            color: '#4B8B9F',
          },
          '&:hover .MuiTableSortLabel-icon': {
            opacity: 0.7,
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          border: '2px solid white',
        },
      },
    },
    MuiAvatarGroup: {
      styleOverrides: {
        root: {
          '& .MuiAvatar-root': {
            border: '2px solid white',
            marginLeft: -8,
            '&:first-of-type': {
              marginLeft: 0,
            },
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&:focus-visible': {
            outline: '2px solid #4B8B9F',
            outlineOffset: '2px',
          },
        },
      },
    },
  },
});
