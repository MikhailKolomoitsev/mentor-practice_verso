import s from './Footer.module.css'
export default function Footer({link}) {
    return (
        <footer className={s.footer}>
            <a><svg>
                <use href={link}/>
            </svg>
            </a>
            <div className={s.container}>
                <div className={s.footer__content}>
                    <form className={s.footer__form}>
                        <label htmlFor="">
                            Subscribe to our
                            newsletter
                                 </label>
                        <input type="text" placeholder="email"/>
                </form>
                    <ul>
                        <li><a>Lorem Ipsum</a></li>
                        <li><a>Lorem Ipsum</a></li>
                        <li><a>Lorem Ipsum</a></li>
                     <li><a>Lorem Ipsum</a></li>
                </ul>
                    <ul>
                          <li><a>Lorem Ipsum</a></li>
                        <li><a>Lorem Ipsum</a></li>
                        <li><a>Lorem Ipsum</a></li>
                     <li><a>Lorem Ipsum</a></li>

                    </ul>
                </div>
                <ul className={s.footer__socialList}>
                  <li>
                      <a href="">
                          <svg>
                              <use></use>
                          </svg>
                      </a>
                  </li>
                  <li>
                      <a href="">
                          <svg>
                              <use></use>
                          </svg>
                      </a>
                  </li>
                  <li>
                      <a href="">
                          <svg>
                              <use></use>
                          </svg>
                      </a>
                  </li>
                </ul>
                <div className={s.footer__copyright}>
                    <p>Copyright © 2021. Verso Network AG. All rights reserved.</p>
                    <p>Privacy Policy</p>
                </div>
                
</div>
        </footer>
    )
}