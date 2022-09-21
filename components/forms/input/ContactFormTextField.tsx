import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';

type Props = {
  field: {
    type: string;
    label: string;
    placeholder: string;
  };
  name: string;
  setter: Function;
  value: string;
};

const ContactFormInput = ({ field, setter, name, value }: Props) => {
  return (
    <FormControl isRequired>
      <FormLabel>{field.label}</FormLabel>

      <Textarea
        onChange={(e: any) => setter(e.target.value)}
        name={name}
        value={value}
        placeholder={field.placeholder}
      />
    </FormControl>
  );
};
export default ContactFormInput;
