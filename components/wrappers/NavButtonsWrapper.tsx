import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Wrapper } from '../../types';

const NavButtonsWrapper = ({ children }: Wrapper) => {
  return (
    <Flex h={10} alignItems={'center'} justifyContent={'space-between'}>
      {children}
    </Flex>
  );
};

export default NavButtonsWrapper;
