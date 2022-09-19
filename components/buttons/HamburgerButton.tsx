import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import useTheme from '../../hooks/useTheme';
import React from 'react';
import { UseDisclosure } from '../../types';
const HamburgerButton = ({
  disclosure: { isOpen, onOpen, onClose },
}: UseDisclosure) => {
  const { bgColor, baseColor } = useTheme();

  return (
    <IconButton
      size={'md'}
      icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon />}
      aria-label={'Open Menu'}
      display={{ md: 'none' }}
      bg={`${bgColor}`}
      color={'whiteAlpha.900'}
      _hover={{ backgroundColor: `${baseColor}.600` }}
      _focus={{ backgroundColor: `${baseColor}.400` }}
      onClick={isOpen ? onClose : onOpen}
    />
  );
};

export default HamburgerButton;
