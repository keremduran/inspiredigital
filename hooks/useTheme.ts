import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
const primary = 'orange';
const secondary = 'teal';

const useTheme = () => {
  return {
    primary,
    secondary,
    useColorModeValue: useColorModeValue,
    mode: useColorMode().colorMode,
    baseColor: useColorModeValue(primary, secondary),
    baseShade: useColorModeValue('200', '600'),
    textShade: useColorModeValue('600', '200'),
    bgColor: useColorModeValue(`${primary}.500`, `${secondary}.500`),
    textColor: useColorModeValue(`${primary}.800`, `${secondary}.50`),
  };
};

export default useTheme;
