import Image from 'next/image';
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
        // <Image
        //   className="h-80 w-64"
        //   src="/assets/images/avatar.svg"
        //   alt="Avatar image"
        //   loading="lazy"
        //   width={100}
        //   height={100}
        // />
        <></>
      }
    />
  </Section>
);

export { Hero };
