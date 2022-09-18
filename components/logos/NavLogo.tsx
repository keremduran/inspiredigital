import { Box } from '@chakra-ui/react';
import React from 'react';
import NavLink from '../links/NavLink';

const NavLogo = () => {
  return (
    <Box className='logo' color={'whiteAlpha.900'} fontWeight={'700'}>
      <NavLink name={'INSPIREDIGITAL'} href={'/'} />
    </Box>
  );
};

export default NavLogo;
