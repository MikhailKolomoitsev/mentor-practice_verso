import s from "./Footer.module.css";
import items from "./Footer.json";

import FooterList from "./FooterList";
import FooterSocialList from "./FooterSocialList";
import FooterCopyright from "./FooterCopyright";
import FooterForm from "./FooterForm";
import FooterContent from "./FooterContent";
import FooterLogo from "./FooterLogo";
import Container from "../Container/Container";
import { useState, useEffect } from "react";

export default function Footer() {
  const [value, setValue] = useState(
    () => JSON.parse(localStorage.getItem("mail")) ?? "",
  );

  const handleFormSubmit = (query) => {
    setValue(query);
  };

  useEffect(() => {
    localStorage.setItem("mail", JSON.stringify(value));
  }, [value]);

  return (
    <footer className={s.footer}>
      <Container>
        <FooterLogo />
        <FooterContent>
          <FooterForm submit={handleFormSubmit} />
          <FooterList items={items} />
          <FooterList items={items} />
        </FooterContent>
        <FooterSocialList />
        <FooterCopyright />
      </Container>
    </footer>
  );
}
