import React from 'react'

import './Contact.scss'
const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className="contact-container">
                <div className="contact-left">
                    <h2>Contact Info</h2>
                    <p>Address: 283/32 Thien Ho Duong, Go Vap, Tp Ho Chi Minh</p>
                    <p>Phone: 0703428823</p>
                    <p>Email: nguyenminhchanh1910@gmail.com</p>
                </div>
                <div className="contact-right">
                    <h2>Contact Form</h2>
                    <form action="mailto:nguyenminhchanh1910@gmail.com">
                        <div>
                            <label htmlFor="name">YourName</label> <br />
                            <input type="text" id='name' placeholder='Enter your name' /> <br />
                        </div>
                        <div>
                            <label htmlFor="email">Your email</label> <br />
                            <input type="email" name="" id="email" placeholder='Enter your email' /> <br />
                        </div>
                        <div>
                            <label htmlFor="subject">Question</label> <br />
                            <input type="text" id='subject' placeholder='Enter what you want to ask me' /> <br />
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact