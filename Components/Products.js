import React from 'react'
import {productsV} from "../data/TextData"
import styles from '../styles/Products.module.scss'


const Products = (texts) => {
  return (
    <section id={styles.products}>
        <div>
          <h1>{productsV.mHr}</h1>
          <h3>{productsV.sHr}</h3>
          <p>{productsV.par}</p>
        </div>
        <div className={styles.pics}>
          {productsV.images.map(image => (
            <div key={image.id}>
              <div className={styles.info}>
                <img src={image.src} alt={image.alt}/>
                <p>{image.desc}</p>
              </div>
              <div className={styles.background}></div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Products
