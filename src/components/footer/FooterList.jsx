import s from "./Footer.module.css";
import PropTypes from "prop-types";
export default function FooterList({ items }) {
  return (
    <ul>
      {items.map(({ id, description }) => (
        <li key={id} className={s.footer__list_item}>
          <a href="/">{description}</a>
        </li>
      ))}
    </ul>
  );
}
FooterList.propTypes = {
  items: PropTypes.array.isRequired,
};
