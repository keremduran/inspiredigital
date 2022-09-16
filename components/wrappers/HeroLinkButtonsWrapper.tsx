import { Stack } from '@chakra-ui/react';
import React from 'react';
import { Wrapper } from '../../types';

const HeroLinkButtonsWrapper = ({ children }: Wrapper) => {
  return (
    <Stack
      spacing={6}
      direction={'row'}
      fontSize={{ sm: '10px', md: '12px', lg: '15px' }}
    >
      {children}
    </Stack>
  );
};

export default HeroLinkButtonsWrapper;
