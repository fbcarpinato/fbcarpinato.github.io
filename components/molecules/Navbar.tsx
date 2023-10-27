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
      <a href="/">
        <Logo name="Fabio Carpinato" />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Blog</NavMenuItem>
        <NavMenuItem href="https://github.com/fbcarpinato">GitHub</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
