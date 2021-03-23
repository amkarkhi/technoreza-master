import React from "react";
import UpperNav from './UpperNav'
import LowerNav from './LowerNav'
import Slides from "./Slides"
import style from "../styles/Header.module.scss";

const Header = () => (
  <header className={style.navbar}>
    <UpperNav />
    <LowerNav />  
    <Slides />
  </header>
);

export default Header;