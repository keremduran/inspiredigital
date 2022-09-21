import { Button } from '@chakra-ui/react';
import React from 'react';

type Props = {
  label: string;
  isLoading: boolean;
};

const ContactFormSubmitButton = ({ label, isLoading }: Props) => {
  return (
    <Button
      colorScheme='blue'
      bg='teal.500'
      color='white'
      _hover={{ bg: 'teal.600' }}
      isFullWidth
      type='submit'
      isLoading={isLoading}
    >
      {label}
    </Button>
  );
};

export default ContactFormSubmitButton;
