import React, { useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap, faDisplay, faScrollTorah, faLayerGroup } from "@fortawesome/free-solid-svg-icons"

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
import gitlab from '../img/gitlab.png'
import node from '../img/node.png'
import mongodb from '../img/mongodb.png'
import socket from '../img/socket.png'
import aws from '../img/aws-logo.png'
import heroku from '../img/heroku.webp'
import vuejs from '../img/vuejs.png'
import typescript from '../img/typescript.png'
import nextjs from '../img/nextjs.webp'
import nuxtjs from '../img/nuxtjs.svg'

// icon
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3, DiSass } from "react-icons/di";
import { SiJavascript, SiTypescript, SiNestjs, SiNuxtdotjs } from "react-icons/si";
import { FaReact, FaNode } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaVuejs } from "react-icons/fa6";
import { SiMui, SiTailwindcss, SiAntdesign } from "react-icons/si";

const Exp = () => {
    const [active, setActive] = useState("education")
    const [number, setNumber] = useState(0)
    return (
        <div className='exp' id='experience'>
            <h2 className='exp-content'>Experience Me</h2>
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
                <div className='exp-hiddent'>
                    <div className="exp-main" style={{ transform: `translateY(${-315 * number}px)` }}>
                        <div className='exp-main-slide'>
                            <div className="exp-main-container education">
                                <div>
                                    <div className='education-time'>
                                        <h4>Industrial University</h4>
                                        <p>2019-2023</p>
                                    </div>
                                    <span>Industrial University of Ho Chi Minh City</span>
                                </div>
                                <div className='bottom-education'>
                                    <div className='education-time'>
                                        <h4>Hight School</h4>
                                        <p>2016-2019</p>
                                    </div>
                                    <span>Truong THPT Nguyen Du</span>
                                </div>
                            </div>
                            <div className="exp-main-container skill">
                                <h4><AiOutlineHtml5 /><DiCss3 /> <DiSass />Html/ Css/ Scss</h4>
                                <h4><SiJavascript /><SiTypescript />Javascript/ Typescript</h4>
                                <h4><FaReact /><TbBrandNextjs />ReactJs/ NextJS</h4>
                                <h4><FaVuejs /><SiNuxtdotjs />VueJS/ NuxtJS</h4>
                                <h4><FaNode /><SiNestjs />NodeJs/ NestJS</h4>
                                <h4><SiMui /><SiTailwindcss /><SiAntdesign />MUI/ Tailwind/ AntDesign</h4>
                            </div>
                            <div className="exp-main-container certificates">
                                <img src={chungchi} alt="" />
                            </div>
                            <div className="exp-main-container project">
                                <h3>Amount Project</h3>
                                <div>
                                    <h4>Html and Css</h4>
                                </div>
                                <div>
                                    <h4>Html and Css and Javascript</h4>
                                </div>
                                <div>
                                    <h4>Html and Css and ReactJs</h4>
                                </div>
                                <div>
                                    <h4>Html and Css and ReactJs and NodeJs</h4>
                                </div>
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
                    <img src={typescript} alt="" />
                    <img src={scss} alt="" />
                    <img src={react} alt="" />
                    <img src={nextjs} alt="" />
                    <img src={redux} alt="" />
                    <img src={firebase} alt="" />
                    <img src={github} alt="" />
                    <img src={gitlab} alt="" />
                    <img src={node} alt="" />
                    <img src={mongodb} alt="" />
                    <img src={socket} alt="" />
                    <img src={aws} alt="" />
                    <img src={heroku} alt="" />
                    <img src={vuejs} alt="" />
                    <img src={nuxtjs} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Exp