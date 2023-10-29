import { Hero, ProjectList } from '../components/molecules';
import { ExperienceList } from '../components/molecules/ExperienceList';

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceList />
      <ProjectList />
    </>
  );
}
