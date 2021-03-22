import React from "react";
import  Link  from 'next/link'
import style from "../styles/Header.module.scss";
import { headerV } from "../data/TextData";

const Social = () => (
  <div className={style.segment}>
    <p>{headerV.followUs}</p>
    <ul>
      <li className={style.social}><Logo src={"/res/icons/insta.svg"} /></li>
      <li className={style.social}><Logo src={"/res/icons/linkedin.svg"} /></li>
      <li className={style.social}><Logo src={"/res/icons/telegram.svg"} /></li>
    </ul>
  </div>
);

const Phone = () => (
  <div className={style.segment}>
    <p>{headerV.phone}</p>
    <ul>
      <li className={style.social}>
      <Logo src={"/res/icons/phone.svg"} />
      </li>
    </ul>
  </div>
);

const Address = () => (
  <div className={style.segment}>
    <p>{headerV.location}</p>
    <ul>
      <li className={style.social}>
      <Logo className={style.social}  src={"/res/icons/location.svg"} /></li>
    </ul>
  </div>
);

const Logo = ({ src, alt }) => <img src={src} alt={alt} />;

const UpperNav = () => {
  return (
    <nav id={style.navbar}>
      <div id={style.navUp} className={style.segment}>
        <div>
          <img src={"/res/icons/LOGO.svg"} />
        </div>
        <div>
          <Address />
          <Phone />
          <Social />
        </div>
      </div>
    </nav>
  )
}

export default UpperNav
