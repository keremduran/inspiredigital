import React from 'react';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label='Toggle color mode'
      onClick={toggleColorMode}
      colorScheme={colorMode === 'light' ? 'orange' : 'teal'}
      size='xs'
      icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
    />
  );
};

export default ColorModeSwitch;
