import React, {Component} from 'react'
import  Link  from 'next/link'
import Slider from "react-slick"
import {slidesV} from "../data/TextData"
import styles from '../styles/Slides.module.scss'

export default class Slides extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section>
        <div className={styles.slideshowContainer}>
          <Slider {...settings}>
            <div className={styles.slides}>
              <div className={styles.grid}>
                <div>
                  <h1>{slidesV.mHr}</h1>
                  <h3>{slidesV.sHr}</h3>
                  <p>{slidesV.par}</p>
                    <Link href={slidesV.btn.src}>{slidesV.btn.text}</Link>
                </div>
                <div>
                  <img src={slidesV.pic} alt=""/>
                </div>
              </div>
            </div>
            <div className={styles.slides}>
              <h3>2</h3>
            </div>
            <div className={styles.slides}>
              <h3>3</h3>
            </div>
            <div className={styles.slides}>
              <h3>4</h3>
            </div>
          </Slider>
      </div>
      </section>
    );
  }
}
