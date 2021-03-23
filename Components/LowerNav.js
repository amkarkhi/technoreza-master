import React from "react";
import  Link  from 'next/link'
import style from "../styles/Header.module.scss";
import { headerV } from "../data/TextData";

const LowerNav = () => {
  return (
    <nav id={style.navDown}>
      <div className={style.segment}>
        <ul>
          {headerV.tabs.map( tab =>(
            <li key={tab.id}>
              <Link href={tab.src}>{tab.text}</Link>
            </li>
          ))}
        </ul>
        <form action="">
          <input type="text" placeholder="جستجو"/>
<<<<<<< HEAD
          <button>?</button>
=======
          <button><img src={headerV.pic} alt=""/></button>
>>>>>>> c92459ed04b0f581d90fdecbaff7285fd17a3430
        </form>
      </div>
    </nav>
  )
}

export default LowerNav
