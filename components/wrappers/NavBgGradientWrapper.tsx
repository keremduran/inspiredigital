import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import useTheme from '../../hooks/useTheme';
import { Wrapper } from '../../types';

const lightGradientPoints = [400, 300, 100];
const darkGradientPoints = [500, 800, 900];

const NavWrapper = ({ children }: Wrapper) => {
  const { baseColor, mode } = useTheme();

  const gradientPoints: number[] =
    mode === 'light' ? lightGradientPoints : darkGradientPoints;

  const getBgGradient = () => {
    let gradientAppendix = '';
    gradientPoints.forEach((point: number) => {
      gradientAppendix += `, ${baseColor}.${point}`;
    });

    return `linear(to-b, ${gradientAppendix})`;
  };

  return (
    <Box bgGradient={getBgGradient()} bgSize={'100vw'} p={4} pb={6}>
      {children}
    </Box>
  );
};

export default NavWrapper;
