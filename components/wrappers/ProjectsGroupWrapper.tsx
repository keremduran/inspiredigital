import { Box, VStack } from '@chakra-ui/react';
import React from 'react';
import { Wrapper } from '../../types';

type Props = Wrapper & {
  variant: string;
};

const ProjectsArticleWrapper = ({ variant, children }: Props) => {
  const isDev = variant === 'developer';
  const textColor = `${isDev ? 'orange' : 'teal'}.600`;
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
      <VStack
        p={3}
        spacing={3}
        alignItems={alignItems}
        textColor={`${textColor}.500`}
      >
        {children}
      </VStack>
    </Box>
  );
};

export default ProjectsArticleWrapper;
