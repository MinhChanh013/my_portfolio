import React from 'react'

import './Home.scss'
import ai from '../img/ai.png'
const Home = () => {
  return (
    <div className='home' id='home'>
        <div className="home-container">
            <div className="home-content">
                <h4>Let's My Personal Portfolio</h4>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className='home-input'>
                  <input type="text" name="" id="" placeholder='Your email address'/> 
                  <button>Send CV</button>
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