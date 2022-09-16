import {
  VStack,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Textarea,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import SystemMessageModal from '../modals/SystemMessageModal';
import { useForm } from 'react-hook-form';
import ContactFormWrapper from '../wrappers/ContactFormWrapper';

type Props = {
  form: any;
};

function ContactForm({ form }: Props) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit() {
    let data = {
      name,
      email,
      emailContent: message,
    };
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setModalMessage(form.modal.messageOnSuccess);
        onOpen();
      }
    });
  }
  return (
    <ContactFormWrapper>
      <SystemMessageModal
        message={modalMessage}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={5}>
          <FormControl isRequired>
            <FormLabel>{form.name.label}</FormLabel>

            <InputGroup>
              <InputLeftElement>
                <BsPerson />
              </InputLeftElement>
              <Input
                onChange={(e: any) => setName(e.target.value)}
                type='text'
                name='name'
                placeholder={form.name.placeholder}
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>{form.email.label}</FormLabel>

            <InputGroup>
              <InputLeftElement>
                <MdOutlineEmail />
              </InputLeftElement>
              <Input
                type='email'
                name='email'
                placeholder={form.email.placeholder}
                onChange={(e: any) => setEmail(e.target.value)}
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>{form.message.label}</FormLabel>

            <Textarea
              name='message'
              placeholder={form.message.placeholder}
              rows={6}
              value={message}
              resize='none'
              onChange={(e: any) => setMessage(e.target.value)}
            />
          </FormControl>

          <Button
            colorScheme='blue'
            bg='teal.500'
            color='white'
            _hover={{ bg: 'teal.600' }}
            isFullWidth
            type='submit'
            isLoading={isSubmitting}
          >
            {form.submit.label}
          </Button>
        </VStack>
      </form>
    </ContactFormWrapper>
  );
}

export default ContactForm;
