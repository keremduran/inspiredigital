import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

type Props = {
  field: {
    type: string;
    label: string;
    placeholder: string;
  };
  name: string;
  setter: Function;
};

const getLeftElement = (field: string) => {
  switch (field) {
    case 'name':
      return <BsPerson />;
    case 'email':
      return <MdOutlineEmail />;

    default:
      break;
  }
};

const ContactFormInput = ({ field, setter, name }: Props) => {
  return (
    <FormControl isRequired>
      <FormLabel>{field.label}</FormLabel>

      <InputGroup>
        <InputLeftElement>{getLeftElement(name)}</InputLeftElement>
        <Input
          onChange={(e: any) => setter(e.target.value)}
          type={field.type}
          name={name}
          placeholder={field.placeholder}
        />
      </InputGroup>
    </FormControl>
  );
};

export default ContactFormInput;
