import { Repository } from '../../interfaces';
import { ColorTags, GradientText, Project, Section, Tag } from '../atoms';

interface ProjectListProps {
  repositories: Repository[];
}

const ProjectList: React.FC<ProjectListProps> = ({ repositories }) => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      {repositories.map((repository) => (
        <Project
          key={repository.id}
          repository={repository}
          //   name={repository.name}
          //   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          // bibendum. Nunc non posuere consectetur, justo erat semper enim, non
          // hendrerit dui odio id enim."
          //   link={repository.url}
          //   img={{
          //     src: '/assets/images/project-web-design.png',
          //     alt: 'Project Web Design',
          //   }}
          //   category={
          //     <>
          //       <Tag color={ColorTags.FUCHSIA}>Astro.js</Tag>
          //       <Tag color={ColorTags.LIME}>Web design</Tag>
          //       <Tag color={ColorTags.SKY}>Tailwind.css</Tag>
          //       <Tag color={ColorTags.ROSE}>TypeScript</Tag>
          //     </>
          //   }
        />
      ))}
    </div>
  </Section>
);

export { ProjectList };
