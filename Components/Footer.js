import React from "react";
import Link from 'next/link'
import footerStyoles from '../styles/Footer.module.scss'
const Footer = () => (
  <footer id={footerStyoles.mainFooter}>
    <div className={footerStyoles.container}>
      <div>
        <h3>درباره ما</h3>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع </p>
        <p>شرکت ما را در شبکه های اجتماعی دنبال کنید:</p>
        <ul className={footerStyoles.hozlist}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
      <div>
        <h3>لینک ها</h3>
        <ul className={footerStyoles.verlist}>
          <li>
            <Link href="/products">محصولات</Link>
          </li>
          <li>
            <Link href="/aboutUs">درباره ما</Link>
          </li>
          <li>
            <Link href="/contactUs">ارتباط با ما</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3>ارتباط با ما</h3>
        <ul className={footerStyoles.verlist}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
