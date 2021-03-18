import React from 'react'
import {textHome} from "../data/TextData"


const Showcase = (texts) => {
  return (
    <article>
      <div>
        <h2>{textHome.showHead}</h2>
        <p>{textHome.showPar}</p>
        <div>
          <div>
            <img src="" alt=""/>
            <p>{textHome.showPic1}</p>
          </div>
          <div>
            <img src="" alt=""/>
            <p>{textHome.showPic2}</p>
          </div>
          <div>
            <img src="" alt=""/>
            <p>{textHome.showPic2}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Showcase
