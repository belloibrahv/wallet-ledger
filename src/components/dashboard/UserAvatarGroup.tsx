import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AvatarGroup from "@mui/material/AvatarGroup";
import { SxProps, Theme } from "@mui/material";
import { AvatarGroup as MuiAvatarGroup } from "@mui/material";

export interface User {
  id: string | number;
  name: string;
  avatar?: string;
  email?: string;
}

interface UserAvatarGroupProps {
  users: User[];
  max?: number;
  size?: "small" | "medium" | "large";
  sx?: SxProps<Theme>;
  showTotal?: boolean;
}

const sizeMap = {
  small: { width: 28, height: 28, typography: "caption" },
  medium: { width: 32, height: 32, typography: "body2" },
  large: { width: 40, height: 40, typography: "body1" },
};

export function UserAvatarGroup({
  users = [],
  max = 3,
  size = "medium",
  sx = {},
  showTotal = false,
}: UserAvatarGroupProps) {
  const { width, height, typography } = sizeMap[size];
  const totalUsers = users.length;
  const visibleUsers = users.slice(0, max);
  const remainingCount = Math.max(0, totalUsers - max);

  if (totalUsers === 0) {
    return (
      <Box display="flex" alignItems="center" sx={sx}>
        <Avatar
          sx={{
            width,
            height,
            bgcolor: "grey.200",
            color: "text.secondary",
            fontSize: typography,
          }}
        >
          ?
        </Avatar>
      </Box>
    );
  }

  return (
    <Box display="flex" alignItems="center" sx={sx}>
      <MuiAvatarGroup
        max={max}
        sx={{
          "& .MuiAvatar-root": {
            width,
            height,
            border: "2px solid",
            borderColor: "background.paper",
            backgroundColor: "background.paper",
            fontSize: typography,
          },
        }}
      >
        {visibleUsers.map((user) => (
          <Avatar
            key={user.id}
            alt={user.name}
            src={user.avatar}
            sx={{
              width,
              height,
              bgcolor: "primary.main",
              color: "primary.contrastText",
            }}
          >
            {user.name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .toUpperCase()}
          </Avatar>
        ))}
      </MuiAvatarGroup>

      {(remainingCount > 0 || showTotal) && (
        <Typography
          variant={typography as any}
          color="text.secondary"
          sx={{
            ml: 1,
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          {remainingCount > 0
            ? `+${remainingCount} more`
            : showTotal
              ? `${totalUsers} ${totalUsers === 1 ? "member" : "members"}`
              : ""}
        </Typography>
      )}
    </Box>
  );
}
