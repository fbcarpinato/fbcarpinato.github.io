import { ColorTags, GradientText, Project, Section, Tag } from '../atoms';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Project 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tag color={ColorTags.FUCHSIA}>Astro.js</Tag>
            <Tag color={ColorTags.LIME}>Web design</Tag>
            <Tag color={ColorTags.SKY}>Tailwind.css</Tag>
            <Tag color={ColorTags.ROSE}>TypeScript</Tag>
          </>
        }
      />
      <Project
        name="Project 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tag color={ColorTags.VIOLET}>Next.js</Tag>
            <Tag color={ColorTags.EMERALD}>Blog</Tag>
            <Tag color={ColorTags.YELLOW}>JavaScript</Tag>
          </>
        }
      />
      <Project
        name="Project 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tag color={ColorTags.FUCHSIA}>Astro.js</Tag>
            <Tag color={ColorTags.INDIGO}>Bootstrap</Tag>
            <Tag color={ColorTags.ROSE}>TypeScript</Tag>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
