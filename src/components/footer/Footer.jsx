import s from "./Footer.module.css";
import items from "./Footer.json";

import FooterList from "./FooterList";
import FooterSocialList from "./FooterSocialList";
import FooterCopyright from "./FooterCopyright";
import FooterForm from "./FooterForm";
import FooterContent from "./FooterContent";
import FooterLogo from "./FooterLogo";
import Container from "../Container/Container";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <Container>
        <FooterLogo />
        <FooterContent>
          <FooterForm />
          <FooterList items={items} />
          <FooterList items={items} />
        </FooterContent>
        <FooterSocialList />
        <FooterCopyright />
      </Container>
    </footer>
  );
}
