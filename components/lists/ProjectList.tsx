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
