import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import LanguageSwitch from './LanguageSwtich';
import useContent from '../hooks/useContent';

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const content = useContent('nav');
  const links = content.links;

  return (
    <>
      <Box
        bgGradient='linear(to-b, orange.400, orange.300, orange.100)'
        bgSize={'100vw'}
        p={4}
        pb={6}
      >
        <Flex h={10} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            bg={'orange.200'}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            as={'nav'}
            spacing={4}
            fontWeight={400}
            display={{ base: 'none', md: 'flex' }}
          >
            {links.map((link: any) => (
              <NavLink {...link} key={link.name} />
            ))}
          </HStack>

          <Flex alignItems={'center'}>
            <Box className='logo' color={'whiteAlpha.900'}>
              INSPIREDIGITAL&nbsp;
            </Box>
            <LanguageSwitch />
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {links.map((link: any) => (
                <NavLink {...link} key={link.name} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

const NavLink = (link: any) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    fontWeight={500}
    fontSize={18}
    color={'whiteAlpha.900'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('orange.300', 'orange.700'),
    }}
    href={link.href}
  >
    {link.name}
  </Link>
);
