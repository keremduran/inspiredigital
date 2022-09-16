import { useColorModeValue, Link } from '@chakra-ui/react';
import React from 'react';

type Props = {};

const NavLink = (link: any) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    fontWeight={500}
    fontSize={18}
    color={'whiteAlpha.900'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('orange.300', 'orange.700'),
    }}
    href={link.href}
  >
    {link.name}
  </Link>
);
export default NavLink;
