import s from "../footer/Footer.module.css";
export default function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}
