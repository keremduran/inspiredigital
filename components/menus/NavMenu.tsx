import { Box, HStack, Stack } from '@chakra-ui/react';
import React from 'react';
import NavLink from '../links/NavLink';

type Link = { name: string; href: string };
type Props = { links: Array<Link>; variant?: string };

const NavMenu = ({ links, variant }: Props) => {
  const desktopNavMenu = (
    <HStack
      as={'nav'}
      spacing={4}
      fontWeight={600}
      display={{ base: 'none', md: 'flex' }}
    >
      {links.map((link: any) => (
        <NavLink {...link} key={link.name} />
      ))}
    </HStack>
  );

  const mobileNavMenu = (
    <Box p={2}>
      <Stack display={{ md: 'none' }} fontWeight={600} as={'nav'} spacing={2}>
        {links.map((link: { href: string; name: string }) => (
          <NavLink {...link} key={link.name} />
        ))}
      </Stack>
    </Box>
  );

  const getComponent = () => {
    return variant === 'desktop' ? desktopNavMenu : mobileNavMenu;
  };

  return getComponent();
};

export default NavMenu;
