import React from "react";
import  Link  from 'next/link'
import headerStyles from "../styles/Header.module.scss";
import { textValue } from "../data/TextData";

const Social = () => (
  <div className={`${headerStyles.navSeg} ${headerStyles.navFlex}`}>
    <ul>
      <li className={headerStyles.social}><Logo src={"/res/icons/insta.svg"} /></li>
      <li className={headerStyles.social}><Logo src={"/res/icons/linkedin.svg"} /></li>
      <li className={headerStyles.social}><Logo src={"/res/icons/telegram.svg"} /></li>
    </ul>
    <p>{textValue.followUs}</p>
  </div>
);

const Phone = () => (
  <div className={`${headerStyles.navSeg} ${headerStyles.navFlex}`}>
    <ul>
      <li className={headerStyles.social}>
      <Logo src={"/res/icons/phone.svg"} />
      </li>
    </ul>
    <p>{textValue.phone}</p>
  </div>
);

const Address = () => (
  <div className={`${headerStyles.navSeg} ${headerStyles.navFlex}`}>
    <ul>
      <li className={headerStyles.social}>
      <Logo className={headerStyles.social}  src={"/res/icons/location.svg"} /></li>
    </ul>
    <p>{textValue.location}</p>
  </div>
);

const Logo = ({ src, alt }) => <img src={src} alt={alt} />;

const Header = () => (
  <nav id={headerStyles.navbar}>
    <div id={headerStyles.navUp} className={headerStyles.navFlex}>
      <div>
        <Social />
        <Phone />
        <Address />
      </div>
      <div>
       <img src={"/res/icons/LOGO.svg"} />
      </div>
    </div>

    <div id={headerStyles.navDown}>
      <nav className={`${headerStyles.navSeg} ${headerStyles.navFlex}`}>
        <form action="get">
          <input type="text" placeholder="جستجو"/>
          <button>?</button>
        </form>
        <ul>
          <li>
            <Link href="/">خانه</Link>
          </li>
          <li>
            <Link href="/products">محصولات</Link>
          </li>
          <li>
            <Link href="/aboutUs">درباره ما</Link>
          </li>
          <li>
            <Link href="/contactUs">تماس با ما</Link>
          </li>
        </ul>
      </nav>
    </div>
  </nav>
);

export default Header;