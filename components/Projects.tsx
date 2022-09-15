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
import useContent from '../hooks/useContent';

const MotionBox = motion(Box);
// const clients = {
//   contentManager: [
//     { link: 'https://www.guncelozturk.com/', name: 'Op. Dr. Güncel Öztürk' },
//     { link: 'https://drgoksel.com/', name: 'Op. Dr. Abdülkadir Göksel' },
//     {
//       link: 'http://www.ahmetgunay.com/',
//       name: 'DR. AHMET GÜNAY',
//     },
//     { link: 'https://www.hairneva.com/', name: 'Hairneva' },
//     { link: 'http://www.cagatayruhi.com/', name: 'OP. DR. ÇAĞATAY RUHİ' },
//   ],
//   developer: [
//     {
//       link: 'https://real-estate-roan-nine.vercel.app/',
//       name: 'Inspire Emlak',
//     },
//     {
//       link: 'https://doktorwebsite-demo-next.vercel.app/',
//       name: 'Demo Doktor Sitesi',
//     },
//   ],
// };

interface iProjects {
  [key: string]: {
    heading: string;
    items: [
      {
        link: string;
        name: string;
      }
    ];
  };
}

let projects: iProjects;
// let projects = {
//   contentManager: {
//     heading: '',
//     items: [{ link: '', name: '' }],
//   },
//   developer: {
//     heading: '',
//     items: [{ link: '', name: '' }],
//   },
// };

export default function Projects() {
  const content = useContent('projects');
  projects = {
    contentManager: content.contentManager,
    developer: content.developer,
  };

  return (
    <Container id='projects' className='projects' minW={'100vw'} p={0} m={0}>
      <Heading
        as='h2'
        p='2'
        mt='7'
        fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
        lineHeight={'110%'}
        textColor={'orange.500'}
        textAlign={'center'}
        textTransform={'uppercase'}
      >
        {content.heading}
      </Heading>
      <SimpleGrid minChildWidth='300px' gap={6}>
        <ProjectsContainer mode='content-manager' />
        <ProjectsContainer mode='developer' />
      </SimpleGrid>
    </Container>
  );
}

const ProjectsContainer = (props: { mode: string }) => {
  const isDev = props.mode === 'developer';
  const textColor = `${isDev ? 'orange' : 'teal'}.600`;
  const textAlign = isDev ? 'left' : 'right';
  const alignItems = isDev ? 'start' : 'end';
  const heading = isDev
    ? projects.developer.heading
    : projects.contentManager.heading;
  const clientsData = isDev
    ? projects.developer.items
    : projects.contentManager.items;
  return (
    <Box
      p='2'
      textColor={textColor}
      textAlign={textAlign}
      backgroundImage={`${props.mode}.svg`}
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
        alignItems={alignItems}
        textColor={`${textColor}.500`}
      >
        <Heading
          as='h3'
          m='5'
          p='3'
          size='lg'
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
          textTransform={'uppercase'}
        >
          {heading}
        </Heading>
        {clientsData.map((client) => (
          <MotionBox
            drag='x'
            dragConstraints={{ left: -10, right: 10 }}
            whileHover={{ scale: 1.1 }}
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
  );
};
