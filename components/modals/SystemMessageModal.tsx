import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

interface Props {
  message: string;
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
}

function SystemMessageModal(props: Props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sistem</ModalHeader>
        <ModalCloseButton />
        <ModalBody paddingBottom={'3rem'}>{props.message}</ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SystemMessageModal;
