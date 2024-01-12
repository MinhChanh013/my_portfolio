import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons'
import { faSliders, faTimes } from '@fortawesome/free-solid-svg-icons'
import { IoLogoGitlab } from "react-icons/io5";

import './Header.scss'
const Header = () => {
    const [active, setActive] = useState(false)
    const [windowSize, setWindowSize] = useState(getWindowSize());

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    useEffect(() => {
        if (windowSize.innerWidth >= 880)
            setActive(false)
    }, [windowSize])

    return (
        <div className='page'>
            <div className="header">
                <div className="header-container">
                    <h4>Portfolio</h4>
                    <ul className='nav-header'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#project">Project</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <ul className='nav-icon'>
                        <li onClick={() => { setActive(true) }}><FontAwesomeIcon icon={faSliders} className="icon-toggle" /></li>
                        <li>
                            <a href='https://www.facebook.com/profile.php?id=100042129560871'>
                                <button><FontAwesomeIcon icon={faFacebookF} className="icon-header" /></button>
                            </a>
                        </li>
                        <li><a href='https://github.com/MinhChanh013'><button><FontAwesomeIcon icon={faGithub} className="icon-header" /></button></a></li>
                        <li><a href='https://gitlab.com/Chanh013'><button><FontAwesomeIcon icon={faGitlab} className="icon-header" /></button></a></li>
                    </ul>
                </div>
            </div>
            <div className={`nav-toggle ${active === true ? "active" : ""}`}>
                <div className="toggle-container">
                    <FontAwesomeIcon icon={faTimes} className="icon-toggle-time" onClick={() => { setActive(false) }} />
                    <ul className='nav-toggle-menu'>
                        <li onClick={() => { setActive(false) }}><a href="#home">Home</a></li>
                        <li onClick={() => { setActive(false) }}><a href="#about">About</a></li>
                        <li onClick={() => { setActive(false) }}><a href="#experience">Experience</a></li>
                        <li onClick={() => { setActive(false) }}><a href="#project">Project</a></li>
                        <li onClick={() => { setActive(false) }}><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Header