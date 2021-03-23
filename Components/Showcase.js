import React from 'react'
import {showV} from "../data/TextData"
import styles from '../styles/Home.module.scss'


const Showcase = (texts) => {
  return (
    <article id={styles.showcase}>
        <div id={styles.title}>
          <img src={showV.logo} alt=""/>
          <h2>{showV.mHr}</h2>
          <p>{showV.par}</p>
        </div>
        <div className={styles.pics}>
          {showV.images.map(image => (
            <div key={image.id}>
              <div className={styles.info}>
                <img src={image.src} alt={image.alt}/>
                <p>{image.desc}</p>
              </div>
              <div className={styles.background}></div>
            </div>
          ))}
        </div>
    </article>
  )
}

export default Showcase
