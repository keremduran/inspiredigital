import { Box } from '@chakra-ui/react';
import React from 'react';
import { Wrapper } from '../../types';

const NavWrapper = ({ children }: Wrapper) => {
  return (
    <Box
      bgGradient='linear(to-b, orange.400, orange.300, orange.100)'
      bgSize={'100vw'}
      p={4}
      pb={6}
    >
      {children}
    </Box>
  );
};

export default NavWrapper;
