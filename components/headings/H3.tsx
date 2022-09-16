import { Heading } from '@chakra-ui/react';
import React from 'react';

type Props = {
  heading: string;
};

const H3 = ({ heading }: Props) => {
  return (
    <Heading
      as='h3'
      m='5'
      p='3'
      size='lg'
      fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
      textTransform={'uppercase'}
    >
      {heading}
    </Heading>
  );
};

export default H3;
