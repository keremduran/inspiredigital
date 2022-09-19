import { Button, Box, Link } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import useTheme from '../../hooks/useTheme';

const MotionBox = motion(Box);

type Props = {
  label: string;
  href: string;
};

const ProjectsMotionLinkButton = ({ label, href }: Props) => {
  const theme = useTheme();
  return (
    <MotionBox
      drag='x'
      dragConstraints={{ left: -10, right: 10 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0.2 }}
      whileInView={{ opacity: 1 }}
      key={label}
      viewport={{ once: true }}
    >
      <Link isExternal href={href} _hover={{ textDecoration: 'none' }}>
        <Button
          width='100%'
          opacity='0.9'
          textTransform={'uppercase'}
          fontWeight={'bold'}
          overflow={'hidden'}
          bgImage={`${theme.mode}-polygon-scatter-haikei.svg`}
          bgPosition={'bottom'}
          bgSize={'300px'}
          boxShadow={'xl'}
          transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
          _hover={{ bg: `teal.${theme.useColorModeValue(50, 600)}` }}
          bg={'blue.200'}
        >
          {label}
        </Button>
      </Link>
    </MotionBox>
  );
};

export default ProjectsMotionLinkButton;
