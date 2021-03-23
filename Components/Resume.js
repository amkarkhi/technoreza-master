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
              <img src={attribute.src} alt=""/>
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
        <img src={resumeV.pic} alt=""/>
        <div>
          <h2>{resumeV.cap.num}</h2>
          <h2>{resumeV.cap.text}</h2>
        </div>
      </div>
    </article>
  )
}

export default Resume
