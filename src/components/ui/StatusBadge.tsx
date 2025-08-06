import Chip from "@mui/material/Chip";
import { ChipProps } from "@mui/material";

interface StatusBadgeProps extends Omit<ChipProps, 'label'> {
  status: 'active' | 'inactive' | 'pending' | 'completed';
  label?: string;
}

const statusConfig = {
  active: {
    color: '#10B981',
    bgcolor: '#10B981',
    textColor: 'white',
  },
  inactive: {
    color: '#6B7280',
    bgcolor: '#F3F4F6',
    textColor: '#6B7280',
  },
  pending: {
    color: '#F59E0B',
    bgcolor: '#FEF3C7',
    textColor: '#92400E',
  },
  completed: {
    color: '#10B981',
    bgcolor: '#D1FAE5',
    textColor: '#065F46',
  },
};

export function StatusBadge({ status, label, ...props }: StatusBadgeProps) {
  const config = statusConfig[status];
  const displayLabel = label || status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <Chip
      label={displayLabel}
      size="small"
      sx={{
        bgcolor: config.bgcolor,
        color: config.textColor,
        fontSize: '0.75rem',
        height: 24,
        fontWeight: 500,
        borderRadius: 1,
        '& .MuiChip-label': {
          px: 1.5,
        },
        ...props.sx,
      }}
      {...props}
    />
  );
}
