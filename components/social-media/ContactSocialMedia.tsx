import {
  Stack,
  Tooltip,
  IconButton,
  useColorModeValue,
  useClipboard,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

type Props = {
  socialMedia: any;
};

function ContactSocialMedia({ socialMedia }: Props) {
  const { hasCopied, onCopy } = useClipboard('keremduran@live.com');
  return (
    <Stack
      align='center'
      justify='space-around'
      direction={{ base: 'row', md: 'column' }}
    >
      <Tooltip
        label={hasCopied ? socialMedia.emailCopied : socialMedia.copyEmail}
        closeOnClick={false}
        hasArrow
      >
        <IconButton
          aria-label='email'
          variant='ghost'
          size='lg'
          fontSize='3xl'
          icon={<MdEmail />}
          _hover={{
            bg: 'blue.500',
            color: useColorModeValue('white', 'gray.700'),
          }}
          onClick={onCopy}
          isRound
        />
      </Tooltip>

      <Link href='https://github.com/keremduran/inspiredigital' isExternal>
        <IconButton
          aria-label='github'
          variant='ghost'
          size='lg'
          fontSize='3xl'
          icon={<BsGithub />}
          _hover={{
            bg: 'blue.500',
            color: useColorModeValue('white', 'gray.700'),
          }}
          isRound
        />
      </Link>

      <Link href='#'>
        <IconButton
          aria-label='twitter'
          variant='ghost'
          size='lg'
          icon={<BsTwitter size='28px' />}
          _hover={{
            bg: 'blue.500',
            color: useColorModeValue('white', 'gray.700'),
          }}
          isRound
        />
      </Link>

      <Link href='https://www.linkedin.com/in/kerem-duran/' isExternal>
        <IconButton
          aria-label='linkedin'
          variant='ghost'
          size='lg'
          icon={<BsLinkedin size='28px' />}
          _hover={{
            bg: 'blue.500',
            color: useColorModeValue('white', 'gray.700'),
          }}
          isRound
        />
      </Link>
    </Stack>
  );
}

export default ContactSocialMedia;
