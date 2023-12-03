import React from 'react';

import MobileHeader from '../Header/MobileHeader';

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  return (
    <nav>
      <MobileHeader />
    </nav>
  );
};

export default Navbar;
