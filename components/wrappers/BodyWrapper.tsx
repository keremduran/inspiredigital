import { Box } from '@chakra-ui/react';
import React from 'react';
import { Wrapper } from '../../types';
import useTheme from '../../hooks/useTheme';

const BodyWrapper = ({ children }: Wrapper) => {
  const theme = useTheme();
  console.log(theme.mode);
  console.log(
    `${theme.mode.toString().toLowerCase()}BodyBg-stacked-waves-haikei.svg`
  );

  return (
    <Box
      backgroundImage={`url(${theme.mode
        .toString()
        .toLowerCase()}BodyBg-stacked-waves-haikei.svg)`}
      textColor={theme.textColor}
    >
      {children}
    </Box>
  );
};

export default BodyWrapper;
