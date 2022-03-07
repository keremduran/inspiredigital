import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
const Links = [
  { name: 'Projeler', href: '#projects' },
  { name: 'İletişim', href: '#contact' },
];

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

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink {...link} key={link.name} />
            ))}
          </HStack>

          <Flex alignItems={'center'}>
            <Box className='logo' color={'whiteAlpha.900'}>
              INSPIREDIGITAL&nbsp;
            </Box>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={10}
                minH={10}
                bgImage={'sun-icon.svg'}
                bgSize={'100%'}
                bgPosition={'center'}
                aria-label='Opens Menu'
              />
              <MenuList bg='orange.200'>
                <MenuItem _hover={{ bg: 'orange.300' }}>Github</MenuItem>
                <MenuDivider />
                <MenuItem _hover={{ bg: 'orange.300' }}>Linkedin</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink {...link} key={link.name} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
