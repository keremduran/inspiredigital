import { VStack, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import SystemMessageModal from '../modals/SystemMessageModal';
import { useForm } from 'react-hook-form';
import ContactFormWrapper from '../wrappers/ContactFormWrapper';
import ContactFormInput from './input/ContactFormInput';
import ContactFormTextField from './input/ContactFormTextField';
import ContactFormSubmitButton from '../buttons/ContactFormSubmitButton';
import { sendEmail } from '../../proxies/sendEmail';

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

  const openSuccessModal = () => {
    setModalMessage(form.modal.messageOnSuccess);
    onOpen();
  };

  interface EmailData {
    name: string;
    email: string;
    emailContent: string;
  }

  const getEmailData = (): EmailData => {
    return {
      name,
      email,
      emailContent: message,
    };
  };

  function onSubmit() {
    let data: EmailData = getEmailData();
    sendEmail(data).then((isSuccess) => {
      isSuccess && openSuccessModal();
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
          <ContactFormInput
            name={'name'}
            field={form.fields.name}
            setter={setName}
          />
          <ContactFormInput
            name={'email'}
            field={form.fields.email}
            setter={setEmail}
          />
          <ContactFormTextField
            name={'message'}
            field={form.fields.message}
            setter={setMessage}
            value={message}
          />
          <ContactFormSubmitButton
            label={form.submit.label}
            isLoading={isSubmitting}
          />
        </VStack>
      </form>
    </ContactFormWrapper>
  );
}

export default ContactForm;
