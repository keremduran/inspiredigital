import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
const MotionBox = motion(Box);

export default function Projects() {
  const clients = {
    contentManager: [
      { link: 'https://www.guncelozturk.com/', name: 'Op. Dr. Güncel Öztürk' },
      { link: 'https://drgoksel.com/', name: 'Op. Dr. Abdülkadir Göksel' },
      {
        link: 'http://www.ahmetgunay.com/',
        name: 'DR. AHMET GÜNAY',
      },
      { link: 'https://www.hairneva.com/', name: 'Hairneva' },
      { link: 'http://www.cagatayruhi.com/', name: 'OP. DR. ÇAĞATAY RUHİ' },
    ],
    developer: [
      {
        link: 'https://real-estate-roan-nine.vercel.app/',
        name: 'Inspire Emlak',
      },
      {
        link: 'https://doktorwebsite-demo-next.vercel.app/',
        name: 'Demo Doktor Sitesi',
      },
    ],
  };

  return (
    <Container id='projects' className='projects' minW={'100vw'} p={0} m={0}>
      <Heading
        as='h2'
        p='2'
        m='3'
        mt='7'
        fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
        lineHeight={'110%'}
        textColor={'orange.500'}
        textAlign={'center'}
        textTransform={'uppercase'}
      >
        PROJELERİMİZ
      </Heading>
      <SimpleGrid minChildWidth='300px' gap={6}>
        <Box
          p='2'
          textAlign={'right'}
          backgroundImage={'content-manager.svg'}
          backgroundRepeat={'no-repeat'}
          backgroundSize={{
            base: '95vw, 95vw',
            sm: '80vw, 80vw',
            md: '45vw, 45vw',
          }}
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
        >
          <VStack
            p={3}
            spacing={3}
            alignItems='flex-end'
            textColor={'teal.500'}
          >
            <Heading
              as='h3'
              m='5'
              p='3'
              size='lg'
              fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
            >
              İÇERİK
            </Heading>
            {clients.contentManager.map((client) => (
              <MotionBox
                drag='x'
                dragConstraints={{ left: -20, right: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                key={client.name}
                viewport={{ once: true }}
              >
                <Link
                  isExternal
                  href={client.link}
                  _hover={{ textDecoration: 'none' }}
                >
                  <Button
                    width='100%'
                    opacity='0.9'
                    textTransform={'uppercase'}
                    fontWeight={'bold'}
                    overflow={'hidden'}
                    bgImage={'polygon-scatter-haikei.svg'}
                    bgPosition={'top'}
                    bgColor={'blue.200'}
                    bgSize={'300px'}
                    boxShadow={'xl'}
                    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                    _hover={{ bg: 'blue.100' }}
                  >
                    {client.name}
                  </Button>
                </Link>
              </MotionBox>
            ))}
          </VStack>
        </Box>
        <Box
          p='2'
          textColor={'orange.600'}
          textAlign={'left'}
          backgroundImage={'developer.svg'}
          backgroundRepeat={'no-repeat'}
          backgroundSize={{
            base: '95vw, 95vw',
            sm: '80vw, 80vw',
            md: '45vw, 45vw',
          }}
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
        >
          <VStack
            p={3}
            spacing={3}
            alignItems='flex-start'
            textColor={'orange.500'}
          >
            <Heading
              as='h3'
              m='5'
              p='3'
              size='lg'
              fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
            >
              YAZILIM
            </Heading>
            {clients.developer.map((client) => (
              <MotionBox
                drag='x'
                dragConstraints={{ left: -10, right: 10 }}
                whileHover={{ scale: 1.1, bg: 'transparent' }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0.2 }}
                whileInView={{ opacity: 1 }}
                key={client.name}
                viewport={{ once: true }}
              >
                <Link
                  isExternal
                  href={client.link}
                  _hover={{ textDecoration: 'none' }}
                >
                  <Button
                    width='100%'
                    opacity='0.9'
                    textTransform={'uppercase'}
                    fontWeight={'bold'}
                    overflow={'hidden'}
                    bgImage={'polygon-scatter-haikei.svg'}
                    bgPosition={'bottom'}
                    bgSize={'300px'}
                    boxShadow={'xl'}
                    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                    _hover={{ bg: 'blue.100' }}
                    bg={'blue.200'}
                  >
                    {client.name}
                  </Button>
                </Link>
              </MotionBox>
            ))}
          </VStack>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
