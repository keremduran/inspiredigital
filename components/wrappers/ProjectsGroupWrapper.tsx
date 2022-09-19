import { Box, VStack } from '@chakra-ui/react';
import React from 'react';
import useTheme from '../../hooks/useTheme';
import { Wrapper } from '../../types';

type Props = Wrapper & {
  variant: string;
};

const ProjectsArticleWrapper = ({ variant, children }: Props) => {
  const theme = useTheme();
  const isDev = variant === 'developer';
  const textColor = `${isDev ? theme.primary : theme.secondary}.${
    theme.textShade
  }`;

  const alignItems = isDev ? 'start' : 'end';

  return (
    <Box
      p='2'
      textColor={textColor}
      backgroundImage={`${variant}.svg`}
      backgroundRepeat={'no-repeat'}
      backgroundSize={{
        base: '95vw, 95vw',
        sm: '80vw, 80vw',
        md: '45vw, 45vw',
      }}
      fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
    >
      <VStack p={3} spacing={3} alignItems={alignItems} textColor={textColor}>
        {children}
      </VStack>
    </Box>
  );
};

export default ProjectsArticleWrapper;
