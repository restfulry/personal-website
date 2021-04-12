import React from "react";
import { TextSection, InfoSection } from "../../components";
import { CodeTextHeader } from './Data';

import "./CodePage.css"

const codePage = () => {
  return (
    <>
    <TextSection {...CodeTextHeader}/>
    <div className="code-page">
      <div className="title">
        <h1 className="header-small code">Ryan Lee, <br></br>Software Engineer</h1>
      </div>
      <div>
          <h3 className="flex-h subheading">I bridge the gap between real-world and digital experience, <br></br> solving human problems and taking ideas from 0 to 1.</h3>
      </div>
      <div>
        <h3 className="sub-title">Select Projects</h3>
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
      <div>
        <h3 className="sub-title">Skills</h3>
        <div className="skills">
          <br></br>
          <ul>
            <li className="skills-item">
              <p>React</p>
            </li>
            <li className="skills-item">
              <p>Express</p>
            </li>
            <li className="skills-item">
              <p>Node.js</p>
            </li>
          </ul>
          <ul>
            <li className="skills-item">
              <p>MongoDB</p>
            </li>
            <li className="skills-item">
              <p>SQL</p>
            </li>
            <li className="skills-item">
              <p>Django</p>
            </li>
          </ul>
          <ul>
            <li className="skills-item">
              <p>JavaScript</p>            
            </li>
            <li className="skills-item">
              <p>HTML</p>
            </li>
            <li className="skills-item">
              <p>CSS</p>
            </li>
          </ul>
          <br></br>
        </div>
      </div>
    </div>
    </>
  )
}

export default codePage;