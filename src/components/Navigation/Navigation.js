import React from 'react';
import { Box } from '@material-ui/core';

import Sidebar from './Sidebar';
import Header from './Header';

export default function Navigation(props) {
  const [menuOpen, setMenuOpen] = React.useState(!props.isMobile);
  const handleOpenMenu = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <Box>
      <Header open={menuOpen} openMenu={handleOpenMenu} title={props.title} />
      <Sidebar open={menuOpen} closeMenu={handleCloseMenu} openMenu={handleOpenMenu} mobile={props.isMobile} />
    </Box>
  );
}
