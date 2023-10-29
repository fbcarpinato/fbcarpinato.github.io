import { GradientText, HeroAvatar, Section } from '../atoms';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I&apos;m <GradientText>Fabio Carpinato</GradientText> 👋
        </>
      }
      description="Hello! I'm Fabio Carpinato, a skilled Software Engineer with 6 years of experience."
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
    />
  </Section>
);

export { Hero };
