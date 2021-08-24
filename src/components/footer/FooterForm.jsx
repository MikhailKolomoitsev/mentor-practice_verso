import { ReactComponent as ArrowRight } from "../../images/arrow-right.svg";
import s from "./Footer.module.css";
export default function FooterForm() {
  return (
    <form className={s.footer__form}>
      <label htmlFor="footer-input" className={s.form__title}>
        Subscribe to our newsletter
      </label>
      <input
        type="text"
        placeholder="Email address"
        id="footer-input"
        className={s.form__input}
      />
      <button type="button" className={s.form__button}>
        <ArrowRight />
      </button>
    </form>
  );
}
