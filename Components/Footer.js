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
<<<<<<< HEAD
              <i>{social.src}</i>
=======
              <Link href={social.link}>
                <a href={social.link} target="_blank">
                  <img src={social.src} alt=""/>
                </a>
              </Link>
>>>>>>> c92459ed04b0f581d90fdecbaff7285fd17a3430
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>{footerV.hd2}</h3>
        <ul className={style.verlist}>
<<<<<<< HEAD
          {footerV.links.map( social =>(
            <li key={social.id}>
              <Link href={social.src}>{social.title}</Link>
=======
          {footerV.links.map( link =>(
            <li key={link.id}>
              <Link href={link.src}>{link.title}</Link>
>>>>>>> c92459ed04b0f581d90fdecbaff7285fd17a3430
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
<<<<<<< HEAD
              <p>{contact.text}</p>
=======
              <h4>{contact.text}</h4>
>>>>>>> c92459ed04b0f581d90fdecbaff7285fd17a3430
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
