import {
  ColorTags,
  GradientText,
  Experience,
  Section,
  Tag,
  TechColors,
} from '../atoms';

const ExperienceList = () => (
  <Section
    title={
      <>
        <GradientText>Experiences</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Experience
        name="Audacia"
        from="12/2021"
        to="04/2023"
        category={
          <>
            <Tag color={TechColors.Microservices}>Microservices</Tag>
            <Tag color={TechColors['Node.JS']}>Node.JS</Tag>
            <Tag color={TechColors.React}>React</Tag>
            <Tag color={TechColors.Docker}>Docker</Tag>
            <Tag color={TechColors.GCP}>GCP</Tag>
            <Tag color={TechColors.Magento}>Magento</Tag>
            <Tag color={TechColors.MySQL}>MySQL</Tag>
          </>
        }
      />
      <Experience
        name="Zucchetti"
        from="02/2020"
        to="12/2021"
        category={
          <>
            <Tag color={TechColors.Laravel}>Laravel</Tag>
            <Tag color={TechColors.Angular}>Angular</Tag>
            <Tag color={TechColors.Docker}>Docker</Tag>
            <Tag color={TechColors.MySQL}>MySQL</Tag>
          </>
        }
      />
      <Experience
        name="Netskin"
        from="08/2017"
        to="02/2020"
        category={
          <>
            <Tag color={TechColors.Angular}>Angular</Tag>
            <Tag color={TechColors.Docker}>Docker</Tag>
            <Tag color={TechColors.MySQL}>MySQL</Tag>
          </>
        }
      />
    </div>
  </Section>
);

export { ExperienceList };
