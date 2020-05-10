import React from 'react';
import { useTheme } from '@material-ui/core';

import Sidebar from './Sidebar'
import Header from './Header'

export default function Navigation() {
  const theme = useTheme();
  const mobile = window.innerWidth < theme.breakpoints.values['sm'];

  const [menuOpen, setMenuOpen] = React.useState(!mobile);
  const handleOpenMenu = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <div className="Navigation">
      <Header open={menuOpen} openMenu={handleOpenMenu} />
      <Sidebar open={menuOpen} closeMenu={handleCloseMenu} openMenu={handleOpenMenu} />
    </div>
  );
}
