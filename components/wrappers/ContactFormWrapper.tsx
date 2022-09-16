import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Wrapper } from '../../types';

const ContactFormWrapper = ({ children }: Wrapper) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      borderRadius='lg'
      p={8}
      color={useColorModeValue('gray.700', 'whiteAlpha.900')}
      shadow='base'
      width={{ base: '90vw', md: '80vw', lg: '55rem' }}
    >
      {children}
    </Box>
  );
};

export default ContactFormWrapper;
