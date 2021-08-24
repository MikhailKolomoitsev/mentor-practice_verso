import s from "./Footer.module.css";
export default function FooterContent({ children }) {
  return <div className={s.footer__content}>{children}</div>;
}
