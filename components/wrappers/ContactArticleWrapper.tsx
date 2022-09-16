import { Stack } from '@chakra-ui/react';
import React from 'react';
import { Wrapper } from '../../types';

const ContactArticleWrapper = ({ children }: Wrapper) => {
  return (
    <Stack
      spacing={{ base: 4, md: 8, lg: 20 }}
      direction={{ base: 'column', md: 'row' }}
    >
      {children}
    </Stack>
  );
};

export default ContactArticleWrapper;
