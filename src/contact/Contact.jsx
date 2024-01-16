import React from 'react'

import './Contact.scss'
const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className="contact-container">
                <div className="contact-left">
                    <h2>Contact Info</h2>
                    <p>Address: Go Vap, Tp Ho Chi Minh</p>
                    <p>Phone: 0703428823</p>
                    <p>Email: nguyenminhchanh1910@gmail.com</p>
                </div>
                <div className="contact-right">
                    <h2>Contact Form</h2>
                    <form action="mailto:nguyenminhchanh1910@gmail.com" method="post" enctype="text/plain" accept-charset="UTF-8">
                        <div>
                            <label htmlFor="name">YourName</label> <br />
                            <input type="text" id='name' name="name" placeholder='Enter your name' /> <br />
                        </div>
                        <div>
                            <label htmlFor="subject">Question</label> <br />
                            <input type="text" id='subject' name="question" placeholder='Enter what you want to ask me' /> <br />
                        </div>
                        <button type='submit' value="Send">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact