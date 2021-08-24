import s from "./Footer.module.css";

export default function FooterCopyright() {
  return (
    <div className={s.footer__copyright}>
      <p className={s.copyright}>
        Copyright © 2021. Verso Network AG. All rights reserved.
      </p>
      <p>Privacy Policy</p>
    </div>
  );
}
