import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import H3 from '../headings/H3';
import ProjectListWrapper from '../wrappers/ProjectsGroupWrapper';
import ProjectsMotionLinkButton from '../buttons/ProjectsMotionLinkButton';

type Props = {
  projects: Array<any>;
};

function ProjectList({ projects }: Props) {
  return (
    <>
      {projects.map((project: any) => (
        <ProjectsMotionLinkButton
          key={project.name}
          label={project.name}
          href={project.href}
        />
      ))}
    </>
  );
}

export default ProjectList;
