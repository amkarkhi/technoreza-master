import React from 'react'
import Link from 'next/link'
import {resumeV} from '../data/TextData'
import styles from '../styles/Home.module.scss'

const Resume = () => {
  return (
    <article id={styles.resume}>
      <div>
        <h2>{resumeV.mHr}</h2>
        <h3>{resumeV.sHr}</h3>
        <p>{resumeV.par}</p>
        <ul id={styles.attributes}>
          {resumeV.attributes.map(attribute => (
            <li key={attribute.id}>
<<<<<<< HEAD
              <i>{attribute.src}</i>
=======
              <img src={attribute.src} alt=""/>
>>>>>>> c92459ed04b0f581d90fdecbaff7285fd17a3430
              <p>{attribute.title}</p>
            </li>
          ))}
        </ul>
        <ul id={styles.btns}>
          {resumeV.btns.map(btn => (
            <li key={btn.id}>
              <Link href={btn.src}>{btn.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
<<<<<<< HEAD
        <div></div>
        <h2></h2>
=======
        <img src={resumeV.pic} alt=""/>
        <div>
          <h2>{resumeV.cap.num}</h2>
          <h2>{resumeV.cap.text}</h2>
        </div>
>>>>>>> c92459ed04b0f581d90fdecbaff7285fd17a3430
      </div>
    </article>
  )
}

export default Resume
