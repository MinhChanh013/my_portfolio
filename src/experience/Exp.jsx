import React, { useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap, faDisplay, faScrollTorah, faLayerGroup, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons"

import './exp.scss'
import chungchi from "../img/ChungChi.png"
import html from '../img/html.svg'
import js from '../img/js.svg'
import css from '../img/css.svg'
import react from '../img/react.svg'
import redux from '../img/redux.svg'
import scss from '../img/sass.svg'
import firebase from '../img/firebase.svg'
import github from '../img/github.png'
const Exp = () => {
    const [active, setActive] = useState("education")
    const [number, setNumber] = useState(0)
    return (
        <div className='exp' id='experience'>
            <div className="exp-container">
                <div className="exp-content">
                    <h2>Experience Me</h2>
                </div>
                <div className="exp-header">
                    <ul>
                        <li className={active === "education" ? "active" : ""} onClick={() => {
                            setActive("education")
                            setNumber(0)
                        }}>
                            <FontAwesomeIcon icon={faGraduationCap} className="icon-exp-nav" />
                            <span>Education</span>
                        </li>
                        <li className={active === "skill" ? "active" : ""} onClick={() => {
                            setActive("skill")
                            setNumber(1)
                        }}>
                            <FontAwesomeIcon icon={faDisplay} className="icon-exp-nav" />
                            <span>Programming skill</span>
                        </li>
                        <li className={active === "certificates" ? "active" : ""} onClick={() => {
                            setActive("certificates")
                            setNumber(2)
                        }}>
                            <FontAwesomeIcon icon={faScrollTorah} className="icon-exp-nav" />
                            <span>Certificates</span>
                        </li>
                        <li className={active === "project" ? "active" : ""} onClick={() => {
                            setActive("project")
                            setNumber(3)
                        }}>
                            <FontAwesomeIcon icon={faLayerGroup} className="icon-exp-nav" />
                            <span>Project</span>
                        </li>
                    </ul>
                </div>
                <div className="exp-main" style={{ transform: `translateY(${-315 * number}px)` }}>
                    <div className='exp-main-slide'>
                        <div className="exp-main-container education">
                            <div>
                                <div className='education-time'>
                                    <h4>Industrial University</h4>
                                    <p>2019-2023</p>
                                </div>
                                <span>Đại học công nghiệp tp.Hồ Chí Minh</span>
                            </div>
                            <div className='bottom-education'>
                                <div className='education-time'>
                                    <h4>Hight School</h4>
                                    <p>2016-2019</p>
                                </div>
                                <span>Trường THPT Nguyễn Du</span>
                            </div>
                        </div>
                        <div className="exp-main-container skill">
                            <h4>Html</h4> <span></span>
                            <h4>Css</h4> <span></span>
                            <h4>Javascript</h4> <span></span>
                            <h4>ReactJs</h4> <span></span>
                        </div>
                        <div className="exp-main-container certificates">
                            <img src={chungchi} alt="" />
                        </div>
                        <div className="exp-main-container project">
                            <h3>Amount Project</h3>
                            <div>
                                <h4>Html and Css</h4>
                                <FontAwesomeIcon icon={faStar} className="icon-star-project" />
                                <FontAwesomeIcon icon={faStar} className="icon-star-project" />
                                <FontAwesomeIcon icon={faStar} className="icon-star-project" />
                                <FontAwesomeIcon icon={faStar} className="icon-star-project" />
                                <FontAwesomeIcon icon={faStarHalf} className="icon-star-project" />
                            </div>
                            <div>
                                <h4>Html and Css and Javascript</h4>
                                <FontAwesomeIcon icon={faStar} className="icon-star-project" />
                                <FontAwesomeIcon icon={faStar} className="icon-star-project" />
                                <FontAwesomeIcon icon={faStar} className="icon-star-project" />
                                <FontAwesomeIcon icon={faStarHalf} className="icon-star-project" />
                            </div>
                            <div>
                                <h4>Html and Css and ReactJs</h4>
                                <FontAwesomeIcon icon={faStar} className="icon-star-project" />
                                <FontAwesomeIcon icon={faStar} className="icon-star-project" />
                                <FontAwesomeIcon icon={faStarHalf} className="icon-star-project" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="exp-more-skill">
                <h2>My skills & Knowledge</h2>
                <h3>Technologies and languages that I use to make my product everyday</h3>
                <div className="skill-img">
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={js} alt="" />
                    <img src={scss} alt="" />
                    <img src={react} alt="" />
                    <img src={redux} alt="" />
                    <img src={firebase} alt="" />
                    <img src={github} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Exp