import styles from "./header.module.css";
import PropTypes from "prop-types";
import logo from "../../images/Logo.svg";

const Header = ({ linksArr }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/">
          <img src={logo} alt="SiteLogo" />
        </a>
        <ul className={styles.stats}>
          {linksArr.map(({ link, url }) => (
            <li>
              <a href={url} className={styles.stat}>
                {link}
              </a>
            </li>
          ))}
        </ul>
        <button type="button" className={styles.button}>
          Buy $VSO
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  linksArr: PropTypes.array.isRequired,
};

export default Header;
