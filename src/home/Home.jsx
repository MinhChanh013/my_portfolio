import React from 'react'
import CV from "../img/CV.pdf"
import './Home.scss'
import ai from '../img/ai.png'
const Home = () => {
  return (
    <div className='home' id='home'>
      <div className="home-container">
        <div className="home-content">
          <h4>Let's My Personal Portfolio</h4>
          <p>Welcome to my portfolio, my name is Nguyen Minh Chanh. With the desire to become a front-end developer in the coming years and these are the results that I have obtained in the moments of practice. Please review, rate it and give me feedback. Sincere thanks.</p>
          <div className='home-input'>
            <input type="text" name="" id="" placeholder='Your email address' />
            <a href={CV} download="CV_NguyenMinhChanh">Send CV</a>
          </div>
        </div>
        <div className="home-face">
          <img src={ai} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home