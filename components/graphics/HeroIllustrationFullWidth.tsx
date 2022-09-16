import { Flex } from '@chakra-ui/react';
import React from 'react';
import { HeroIllustration } from './HeroIllustration';

const HeroIllustrationFullWidth = () => {
  return (
    <Flex w={'full'}>
      <HeroIllustration
        height={{ sm: '24rem', lg: '28rem' }}
        mt={{ base: 12, sm: 2 }}
      />
    </Flex>
  );
};

export default HeroIllustrationFullWidth;
