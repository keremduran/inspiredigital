import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import useContent from '../hooks/useContent';
import H2 from './headings/H2';
import ProjectsGroup from './layouts/ProjectsGroup';
import ProjectsWrapper from './wrappers/ProjectsWrapper';

export default function Projects() {
  const { heading, contentManager, developer } = useContent('projects');

  return (
    <ProjectsWrapper>
      <H2>{heading}</H2>
      <SimpleGrid minChildWidth='300px' gap={6}>
        <ProjectsGroup projects={contentManager} variant='contentManager' />
        <ProjectsGroup projects={developer} variant='developer' />
      </SimpleGrid>
    </ProjectsWrapper>
  );
}
