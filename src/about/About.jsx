import React, { useState } from 'react'
import './About.scss'
import CV from "../img/CV.pdf"
import html from '../img/html.svg'
import js from '../img/js.svg'
import css from '../img/css.svg'
import next from '../img/nextjs.webp'
import vuejs from '../img/vuejs.png'
import nuxtjs from "../img/nuxtjs.svg"
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
                        <div className={`img-skill ${active === true ? "active" : ""}`}><img src={next} alt="" /></div>
                        <div className={`img-skill ${active === true ? "active" : ""}`}><img src={vuejs} alt="" /></div>
                        <div className={`img-skill ${active === true ? "active" : ""}`}><img src={nuxtjs} alt="" /></div>
                        <div className={`img-skill ${active === true ? "active" : ""}`}><img src={scss} alt="" /></div>
                        <div className={`img-skill ${active === true ? "active" : ""}`}><img src={react} alt="" /></div>
                        <div className={`img-skill ${active === true ? "active" : ""}`}><img src={redux} alt="" /></div>
                        <img src={avatr} alt="" className='avatar' onClick={() => { setActive(!active) }} />
                    </div>
                </div>
                <div className="about-content">
                    Currently, I am a 3rd year student of Industrial University of Ho Chi Minh City. With the desire and desire to become a real website designer, I always try my best and give my best in everything!
                    <div className="about-content-button">
                        <a href={CV} download="CV_NguyenMinhChanh"><button><span>Download CV</span></button></a>
                        <a href='#contact'><button><span>Contact me</span></button></a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About