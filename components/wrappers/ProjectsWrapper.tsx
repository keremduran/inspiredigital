import { Container } from '@chakra-ui/react';
import React from 'react';
import { Wrapper } from '../../types';

const ProjectsWrapper = ({ children }: Wrapper) => {
  return (
    <Container id='projects' className='projects' minW={'100vw'} p={0} m={0}>
      {children}
    </Container>
  );
};

export default ProjectsWrapper;
