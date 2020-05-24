import React from 'react';

import Sidebar from './Sidebar';
import Header from './Header';

import { Box } from '@material-ui/core';

export default function Navigation(props) {
  const drawerSize = {
    width: 240,
    closedWidth: 60,
  }

  const [menuOpen, setMenuOpen] = React.useState(!props.isMobile);
  const handleOpenMenu = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <Box display="flex" minHeight="100vh" maxWidth="100vw">
      <Sidebar
        open={menuOpen}
        closeMenu={handleCloseMenu}
        openMenu={handleOpenMenu}
        mobile={props.isMobile}
        drawerSize={drawerSize}
      />

      <Box display="flex" flexGrow={1} flexDirection="column">
        <Header 
          open={menuOpen} 
          openMenu={handleOpenMenu} 
          title={props.title} 
          drawerSize={drawerSize}
          switchTheme={props.switchTheme}
        />

        {props.children}
      </Box>
    </Box>
  );
}
