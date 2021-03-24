import React from "react";

import "./CodePage.css"

const codePage = () => {
  return (
    <div className="code">
      <div className="flex-h title">
        <h1 className="header-small code">Ryan Lee, Software Engineer</h1>
        <h3 className="subheading">I bridge the gap between real-world and digital experiences, solving human problems and taking ideas from 0 to 1.</h3>
      </div>
      <div className="description">
        <ul>
          <li className="description-list">
            <p>React</p>
          </li>
          <li className="description-list">
            <p>Express</p>
          </li>
          <li className="description-list">
            <p>Node.js</p>
          </li>
        </ul>
        <ul>
          <li className="description-list">
            <p>Mongo</p>
          </li>
          <li className="description-list">
            <p>SQL</p>
          </li>
          <li className="description-list">
            <p>Django</p>
          </li>
        </ul>
        <ul>
          <li className="description-list">
            <p>JavaScript</p>            
          </li>
          <li className="description-list">
            <p>HTML</p>
          </li>
          <li className="description-list">
            <p>CSS</p>
          </li>
        </ul>
      </div>
      <div><h3>Select Projects</h3></div>
      <div className="header-small code-projects">
        <ul>
          <li className="code-project">
            <a href="" >TokTik</a>
          </li>
          <li className="code-project">
            <a href="">ScrambleWords</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default codePage;