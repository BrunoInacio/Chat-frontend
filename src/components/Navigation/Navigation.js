import React from 'react';
import { Box, useTheme } from '@material-ui/core';

import Sidebar from './Sidebar';
import Header from './Header';

import { useWidth } from '../../utils';

export default function Navigation() {
  const theme = useTheme();
  const isMobile = useWidth() < theme.breakpoints.values['sm'];

  const [menuOpen, setMenuOpen] = React.useState(!isMobile);
  const handleOpenMenu = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <Box>
      <Header open={menuOpen} openMenu={handleOpenMenu} />
      <Sidebar open={menuOpen} closeMenu={handleCloseMenu} openMenu={handleOpenMenu} mobile={isMobile} />
    </Box>
  );
}
