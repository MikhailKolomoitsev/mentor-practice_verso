import { ReactComponent as Facebook } from "../../images/facebook.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";
import { ReactComponent as Twitter } from "../../images/twitter.svg";
import s from "./Footer.module.css";

export default function FooterSocialList() {
  return (
    <ul className={s.footer__socialList}>
      <li className={s.footer__socialItem}>
        <a href="">
          <Facebook />
        </a>
      </li>
      <li className={s.footer__socialItem}>
        <a href="">
          <Twitter />
        </a>
      </li>
      <li className={s.footer__socialItem}>
        <a href="">
          <Instagram />
        </a>
      </li>
    </ul>
  );
}
