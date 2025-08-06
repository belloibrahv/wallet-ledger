import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

export interface LogoProps {
  /**
   * The variant of the logo to display
   * @default 'default'
   */
  variant?: 'default' | 'icon';
  
  /**
   * Custom size for the logo
   * @default 112
   */
  size?: number;
  
  /**
   * Additional styles to apply to the logo container
   */
  sx?: React.CSSProperties;
  
  /**
   * Whether the logo should be shown in its collapsed state
   * @default false
   */
  collapsed?: boolean;
  
  /**
   * Custom width for the logo in its expanded state
   * @default 112
   */
  width?: number;
  
  /**
   * Custom height for the logo
   * @default 33
   */
  height?: number;
}

/**
 * A standalone Logo component that can be used anywhere in the application.
 * It handles its own hover state and transitions.
 */
export const Logo: React.FC<LogoProps> = ({
  variant = 'default',
  size = 112,
  collapsed = false,
  width,
  height,
  sx = {},
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const showExpanded = !collapsed || isHovered;
  
  const logoWidth = variant === 'icon' ? 32 : width || size;
  const logoHeight = variant === 'icon' ? 32 : height || (size * 33) / 112; // Maintain aspect ratio
  const logoSrc = variant === 'icon' ? '/logo-icon.svg' : '/logo.svg';

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        transition: 'all 0.2s ease-in-out',
        ...sx,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={logoSrc}
        alt="Wallet Ledger Logo"
        width={showExpanded ? logoWidth : Math.min(32, logoWidth)}
        height={logoHeight}
        style={{
          height: 'auto',
          transition: 'all 0.2s ease-in-out',
          display: 'block',
        }}
        priority
      />
    </Box>
  );
};

interface IndependentLogoProps {
  variant?: 'default' | 'icon';
  size?: number;
}

export function IndependentLogo({ variant = 'default', size = 112 }: IndependentLogoProps) {
  const isIcon = variant === 'icon';
  const height = isIcon ? 33 : 25;
  const width = isIcon ? 32 : size;
  
  return (
    <Box 
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& img': {
          height: 'auto',
          width: isIcon ? '24px' : `${size}px`,
          minWidth: isIcon ? '24px' : `${size}px`,
          transition: 'width 0.2s ease-in-out',
        },
      }}
    >
      <Image
        src={isIcon ? "/logo-icon.svg" : "/logo.svg"}
        alt="Wallet Ledger Logo"
        width={width}
        height={height}
        style={{ height: 'auto' }}
        priority
      />
    </Box>
  );
}

export default Logo;
