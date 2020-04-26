import React from 'react';
import { useTheme } from '@material-ui/core/styles';

import Sidebar from './Sidebar'
import Header from './Header'

export default function Navigation() {
  const theme = useTheme();

  const [menuOpen, setMenuOpen] = React.useState(true);
  const handleOpenMenu = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <div className="Navigation">
      <Header open={menuOpen} openMenu={handleOpenMenu} />
      <Sidebar open={menuOpen} closeMenu={handleCloseMenu} />
    </div>
  );
}
