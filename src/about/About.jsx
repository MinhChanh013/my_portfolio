import React, { useState } from 'react'
import './About.scss'

import html from '../img/html.svg'
import js from '../img/js.svg'
import css from '../img/css.svg'
import react from '../img/react.svg'
import redux from '../img/redux.svg'
import scss from '../img/sass.svg'
import avatr from '../img/21847a9315add6f38fbc.jpg'
const About = () => {
    const [active, setActive] = useState(true)
    return (
        <div className='about' id='about'>
            <div className="about-container">
                <div className="about-img">
                    <h2>ABOUT ME</h2>
                    <p>I'm</p>
                    <h3>MINH CHANH</h3>
                    <h4>FRONT-END WEB DEVELOPER</h4>
                    <div className="about-img-cotainer">
                        <div className={`img-skill ${active === true ? "active" : ""}`}><img src={html} alt="" /></div>
                        <div className={`img-skill ${active === true ? "active" : ""}`}><img src={css} alt="" /></div>
                        <div className={`img-skill ${active === true ? "active" : ""}`}><img src={js} alt="" /></div>
                        <div className={`img-skill ${active === true ? "active" : ""}`}><img src={scss} alt="" /></div>
                        <div className={`img-skill ${active === true ? "active" : ""}`}><img src={react} alt="" /></div>
                        <div className={`img-skill ${active === true ? "active" : ""}`}><img src={redux} alt="" /></div>
                        <img src={avatr} alt="" className='avatar' onClick={() => { setActive(!active) }} />
                    </div>
                </div>
                <div className="about-content">
                    Currently, I am a junior who is self-taught and really determined on becoming a good frontend developer. With all of effort, I will try my best to contribute to any projects!
                    <div className="about-content-button">
                        <button><span>Download CV</span></button>
                        <button><span>Contact me</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About