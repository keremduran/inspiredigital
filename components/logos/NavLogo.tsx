import { Box } from '@chakra-ui/react';
import React from 'react';
import NavLink from '../links/NavLink';
import LogoSvg from '../graphics/LogoSvg';

const NavLogo = () => {
  return (
    <Box className='logo' color={'whiteAlpha.900'} fontWeight={'700'}>
      <NavLink icon={<LogoSvg />} href={'/'} />
    </Box>
  );
};

export default NavLogo;
