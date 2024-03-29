import { useColorModeValue, Link } from '@chakra-ui/react';
import React from 'react';

const NavLink = (link: {
  name?: string;
  icon?: React.ReactNode;
  href: string;
}) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    fontSize={18}
    color={'whiteAlpha.900'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('orange.300', 'teal.700'),
    }}
    href={link.href}
  >
    {link.name || link.icon}
  </Link>
);
export default NavLink;
