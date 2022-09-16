import { Heading } from '@chakra-ui/react';
import React from 'react';

type Props = {
  children: JSX.Element;
};

const H2 = (props: Props) => {
  return (
    <Heading
      as='h2'
      p='2'
      mt='7'
      fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
      lineHeight={'110%'}
      textColor={'orange.500'}
      textAlign={'center'}
      textTransform={'uppercase'}
    >
      {props.children}
    </Heading>
  );
};

export default H2;
