import React from "react";
import UpperNav from './UpperNav'
import LowerNav from './LowerNav'
import {productsV} from "../data/TextData"
import style from "../styles/Header.module.scss"
import pstyle from "../styles/Products.module.scss"

const ProductsHeader = () => (
  <header className={`${style.navbar} ${style.productsHeader}`}>
    <UpperNav />
    <LowerNav />  
    <div id={pstyle.header}>
      <div>
        <h2>{productsV.title}</h2>
        <h3>{productsV.titp}</h3>
      </div>
    </div>
  </header>
);

export default ProductsHeader;