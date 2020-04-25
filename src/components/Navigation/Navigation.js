import React from 'react';

import { CssBaseline } from '@material-ui/core';

import Sidebar from './Sidebar'
import Header from './Header'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const handleOpenMenu = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <div className="Navigation">
      <CssBaseline />

      <Header open={menuOpen} openMenu={handleOpenMenu} />
      <Sidebar open={menuOpen} closeMenu={handleCloseMenu} />
    </div>
  );
}
