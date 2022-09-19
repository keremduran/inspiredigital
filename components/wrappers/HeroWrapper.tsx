import { Container, Stack } from '@chakra-ui/react';
import React from 'react';
import useTheme from '../../hooks/useTheme';
import { Wrapper } from '../../types';

const HeroWrapper = ({ children }: Wrapper) => {
  const theme = useTheme();
  return (
    <Container
      maxW={'full'}
      backgroundImage={`${theme.mode}-layered-peaks-haikei.svg`}
      backgroundPosition={'center'}
      backgroundRepeat={'no-repeat'}
    >
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10, lg: 6 }}
        pt={{ base: 10, md: 4 }}
        bgRepeat={'no-repeat'}
        bgPosition={'top'}
        bgSize={'20rem'}
      >
        {children}
      </Stack>
    </Container>
  );
};

export default HeroWrapper;
