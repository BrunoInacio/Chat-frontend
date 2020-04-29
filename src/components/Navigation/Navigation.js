import React from 'react';
import { useTheme, useMediaQuery, } from '@material-ui/core';

import Sidebar from './Sidebar'
import Header from './Header'

export default function Navigation() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.up('xs'));

  console.log(mobile)

  const [menuOpen, setMenuOpen] = React.useState(true);
  const handleOpenMenu = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <div className="Navigation">
      <Header open={menuOpen} openMenu={handleOpenMenu} />
      <Sidebar open={menuOpen} closeMenu={handleCloseMenu} openMenu={handleOpenMenu} />
    </div>
  );
}
