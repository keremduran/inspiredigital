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
        <ModalBody>{props.message}</ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={props.onClose}>
            Kapat
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default SystemMessageModal;
