import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons'
import './Header.scss'
const Header = () => {
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
                        <li><button><FontAwesomeIcon icon={faFacebookF} className="icon-header"/></button></li>
                        <li><button><FontAwesomeIcon icon={faGithub} className="icon-header"/></button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header