import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Link,
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
            Kaliteli İçerik{' '}
          </Text>
          <br />
          <Text as={'span'} color={'orange.400'}>
            Modern Tasarım
          </Text>
        </Heading>
        <Text
          color={'gray.500'}
          letterSpacing={1}
          fontWeight={700}
          maxW={'3xl'}
        >
          Inspire Digital ile hem web tasarımı hem de içerik hizmetine tek
          kaynaktan ulaşabilirsiniz. Son teknoloji araçlarla geliştirdiğimiz
          ürünlerimiz ve uzman ekiplerle oluşturduğumuz içerikler sayesinde
          hayalinizdeki gibi bir web sitesine kolayca sahip olmak mümkün!
        </Text>
        <Stack
          spacing={6}
          direction={'row'}
          fontSize={{ sm: '10px', md: '12px', lg: '15px' }}
        >
          <Link href='#projects' _hover={{ textDecoration: 'none' }}>
            <Button
              rounded={'full'}
              colorScheme={'teal'}
              textColor={'whiteAlpha.900'}
              bg={'teal.500'}
              _hover={{ bg: 'teal.600' }}
              textTransform={'capitalize'}
              px={6}
              boxShadow={'xl'}
            >
              Projelerimiz
            </Button>
          </Link>
          <Link href='#contact' _hover={{ textDecoration: 'none' }}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.500'}
              _hover={{ bg: 'orange.600' }}
              boxShadow={'xl'}
            >
              Bize Ulaşın
            </Button>
          </Link>
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
