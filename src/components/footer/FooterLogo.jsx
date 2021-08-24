import s from "./Footer.module.css";

import { ReactComponent as Logo } from "../../images/Logo.svg";
export default function FooterLogo() {
  return (
    <a href="/" className={s.logo}>
      <Logo />
    </a>
  );
}
