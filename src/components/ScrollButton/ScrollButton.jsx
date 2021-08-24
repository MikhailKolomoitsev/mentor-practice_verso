import { ReactComponent as ArrowTop } from "../../images/arrow-top.svg";
import s from "./ScrollButton.module.css";
export default function ScrollButton() {
  return (
    <button type="button" className={s.button}>
      <ArrowTop />
    </button>
  );
}
