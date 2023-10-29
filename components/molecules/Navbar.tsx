import Link from 'next/link';
import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from '../atoms';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <Link href="/">
        <Logo name="Fabio Carpinato" />
      </Link>

      <NavMenu>
        <NavMenuItem href="https://github.com/fbcarpinato">GitHub</NavMenuItem>
        <NavMenuItem href="https://www.linkedin.com/in/fabio-carpinato-aa5093208/">
          LinkedIn
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
