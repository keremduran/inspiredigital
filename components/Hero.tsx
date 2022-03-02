import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';
import { HeroIllustration } from './HeroIllustration';

export default function Hero() {
  return (
    <Container
      maxW={'full'}
      backgroundImage={'layered-peaks-haikei.svg'}
      backgroundPosition={'center'}
      backgroundRepeat={'no-repeat'}
    >
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        pt={{ base: 10, md: 20 }}
        bgRepeat={'no-repeat'}
        bgPosition={'top'}
        bgSize={'20rem'}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
          overflow={''}
        >
          <Text as={'span'} color={'teal.400'}>
            Modern Icerik{' '}
          </Text>
          <br />
          <Text as={'span'} color={'orange.400'}>
            Modern Tasarim
          </Text>
        </Heading>
        <Text
          color={'gray.500'}
          letterSpacing={1}
          fontWeight={700}
          maxW={'3xl'}
        >
          Inspire Digital ile icerik ve website servisine tek bir kaynaktan
          ulasarak yorulmaniza artik gerek kalmadi. Son teknoloji araclarla
          gelistirdigimiz urunlerimiz ve icerik servisimiz sayesinde bastan sona
          efor sarfetmeden kisa surede websitenize sahip olmaniz mumkun.
        </Text>
        <Stack
          spacing={6}
          direction={'row'}
          fontSize={{ sm: '10px', md: '12px', lg: '15px' }}
        >
          <Button
            rounded={'full'}
            colorScheme={'teal'}
            textColor={'whiteAlpha.900'}
            bg={'teal.400'}
            _hover={{ bg: 'teal.500' }}
            px={6}
          >
            Projelerimiz
          </Button>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}
          >
            Bize Ulasin
          </Button>
        </Stack>
        <Flex w={'full'}>
          <HeroIllustration
            height={{ sm: '24rem', lg: '28rem' }}
            mt={{ base: 12, sm: 16 }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}
