import React from "react";
import Link from 'next/link'
import {footerV} from '../data/TextData'
import style from '../styles/Footer.module.scss'
const Footer = () => (
  <footer id={style.mainFooter}>
    <div className={style.container}>
      <div>
        <h3>{footerV.hd1}</h3>
        <p>{footerV.p11}</p>
        <p>{footerV.p12}</p>
        <ul className={style.hozlist}>
          {footerV.socials.map( social => (
            <li key={social.id}>
              <Link href={social.link}>
                <a href={social.link} target="_blank">
                  <img src={social.src} alt=""/>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>{footerV.hd2}</h3>
        <ul className={style.verlist}>
          {footerV.links.map( link =>(
            <li key={link.id}>
              <Link href={link.src}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>{footerV.hd3}</h3>
        <ul className={style.verlist}>
          {footerV.contacts.map( contact => (
            <li key={contact.id}>
              <img src={contact.src} alt=""/>
              <h4>{contact.text}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
