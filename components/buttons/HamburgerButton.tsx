import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import React from 'react';
import { UseDisclosure } from '../../types';
const HamburgerButton = ({
  disclosure: { isOpen, onOpen, onClose },
}: UseDisclosure) => {
  return (
    <IconButton
      size={'md'}
      icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
      aria-label={'Open Menu'}
      display={{ md: 'none' }}
      bg={'orange.200'}
      onClick={isOpen ? onClose : onOpen}
    />
  );
};

export default HamburgerButton;
