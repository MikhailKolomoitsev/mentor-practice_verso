import { ReactComponent as ArrowRight } from "../../images/arrow-right.svg";
import s from "./Footer.module.css";
import { useState } from "react";
export default function FooterForm({ submit }) {
  const [mail, setMail] = useState("");

  const handleInputChange = (e) => {
    setMail(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    submit(mail);
  };
  return (
    <form className={s.footer__form} onSubmit={submitForm}>
      <label htmlFor="footer-input" className={s.form__title}>
        Subscribe to our newsletter
      </label>
      <input
        onChange={handleInputChange}
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
