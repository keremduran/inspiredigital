import { Flex, useDisclosure } from '@chakra-ui/react';
import LanguageSwitch from './buttons/LanguageSwtich';
import useContent from '../hooks/useContent';
import NavWrapper from './wrappers/NavWrapper';
import HamburgerButton from './buttons/HamburgerButton';
import NavLogo from './logos/NavLogo';
import NavMenu from './menus/NavMenu';

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const disclosure = { isOpen, onOpen, onClose };
  const content = useContent('nav');
  const links = content.links;

  return (
    <NavWrapper>
      <Flex h={10} alignItems={'center'} justifyContent={'space-between'}>
        <HamburgerButton disclosure={disclosure} />
        <NavMenu variant='desktop' links={links} />
        <Flex alignItems={'center'}>
          <NavLogo />
          <LanguageSwitch />
        </Flex>
      </Flex>
      {isOpen ? <NavMenu links={links} /> : <></>}
    </NavWrapper>
  );
}
