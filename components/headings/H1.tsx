import { Heading, Text } from '@chakra-ui/react';
import React from 'react';

type Props = {
  data: any;
};

function H1({ data }: Props) {
  return (
    <Heading
      fontWeight={600}
      fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
      lineHeight={'110%'}
      overflow={''}
    >
      <Text as={'span'} color={'teal.400'}>
        {data.top + ' '}
      </Text>
      <br />
      <Text as={'span'} color={'orange.400'}>
        {data.bottom + ' '}
      </Text>
    </Heading>
  );
}

export default H1;
