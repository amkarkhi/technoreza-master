import React from "react";
import UpperNav from './UpperNav'
import LowerNav from './LowerNav'
import Slides from "./Slides"
import style from "../styles/Header.module.scss";

const SimpleHeader = () => (
  <header className={`${style.navbar} ${style.homeHeader}`}>
    <UpperNav />
    <LowerNav />  
  </header>
);

export default SimpleHeader;