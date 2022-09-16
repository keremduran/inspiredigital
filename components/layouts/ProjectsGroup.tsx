import React from 'react';
import H3 from '../headings/H3';
import ProjectList from '../lists/ProjectList';
import ProjectsGroupWrapper from '../wrappers/ProjectsGroupWrapper';

type Props = {
  projects: {
    heading: 'string';
    items: Array<Object>;
  };
  variant: string;
};

const ProjectsGroup = ({ projects, variant }: Props) => {
  const { heading, items } = projects;

  return (
    <ProjectsGroupWrapper variant={variant}>
      <H3 heading={heading} />
      <ProjectList projects={items} />
    </ProjectsGroupWrapper>
  );
};

export default ProjectsGroup;
