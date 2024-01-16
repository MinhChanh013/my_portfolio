import React from 'react'
import './Project.scss'
import customCursor from "../img/custom-cursor.png"
import protfilo from "../img/protfilo.png"
import headphone from "../img/headphone.png"
import timisora from "../video/timisora.mp4"
import discord from "../img/discord.png"
import Appchat from "../video/Appchat.mp4"
import NoteTodo from "../img/note_todo.png"

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
import vuejs from '../img/vuejs.png'
import typescript from '../img/typescript.png'
import vite from '../img/vite.png'
import nestjs from '../img/nestjs.svg'
const Project = () => {
    return (
        <div className='project' id='project'>
            <div className="project-container">
                <h2>A few Project stand out </h2>
                <div className="project-main">
                    <div className='card-project'>
                        <div className="card-project-container-reverse">
                            <div className="card-project-right">
                                <img src={NoteTodo} alt="" />
                            </div>
                            <div className="card-project-left">
                                <h3>Note Todo</h3>
                                <h4>Note provides the ability to create notes images and statistics of job status.</h4>
                                <h4 className='project-function'>More function: login, register by OTP nodemailer, CRUD note and allow custom custom cover, color text, title, progress and status of work, create sticky allows dragging and dropping positions, create tag and auto notification when work progress is late.</h4>
                                <h4>Responsive: No</h4>
                                <div className='card-language'>
                                    <img src={html} alt="" className='img-project' />
                                    <img src={css} alt="" className='img-project' />
                                    <img src={typescript} alt="" className='img-project' />
                                    <img src={vuejs} alt="" className='img-project' />
                                    <img src={scss} alt="" className='img-project' />
                                    <img src={vite} alt="" className='img-project' />
                                    <img src={nestjs} alt="" className='img-project' />
                                </div>
                                <a href='https://note-web-nine.vercel.app/login'><button> Live Demo</button></a>
                            </div>
                        </div>
                        <div className="card-project-container">
                            <div className="card-project-left">
                                <h3>App Chat</h3>
                                <h4>Degister and clone UI/UX website App Chat, ReactJS, NodeJs and Redux.</h4>
                                <h4 className='project-function'>More function: login, register by OTP firebase, CRUD Group, socket message, add friend, send image, status active, role admin, ... </h4>
                                <h4>Responsive: No</h4>
                                <div className='card-language'>
                                    <img src={html} alt="" className='img-project' />
                                    <img src={css} alt="" className='img-project' />
                                    <img src={js} alt="" className='img-project' />
                                    <img src={scss} alt="" className='img-project' />
                                    <img src={react} alt="" className='img-project' />
                                    <img src={firebase} alt="" className='img-project' />
                                    <img src={github} alt="" className='img-project' />
                                    <img src={gitlab} alt="" className='img-project' />
                                    <img src={node} alt="" className='img-project' />
                                    <img src={mongodb} alt="" className='img-project' />
                                    <img src={socket} alt="" className='img-project' />
                                    <img src={aws} alt="" className='img-project' />
                                </div>
                                <a href='https://appchat-dev-1v5z.vercel.app/'><button> Live Demo</button></a>
                            </div>
                            <div className="card-project-right">
                                <video src={Appchat} loop autoPlay muted></video>
                            </div>
                        </div>
                        <div className="card-project-container-reverse">
                            <div className="card-project-right">
                                <img src={discord} alt="" />
                            </div>
                            <div className="card-project-left">
                                <h3>Discord</h3>
                                <h4>Degister and clone UI/UX website Discord, ReactJS and Redux. </h4>
                                <h4>Responsive: Yes</h4>
                                <div className='card-language'>
                                    <img src={html} alt="" className='img-project' />
                                    <img src={css} alt="" className='img-project' />
                                    <img src={js} alt="" className='img-project' />
                                    <img src={redux} alt="" className='img-project' />
                                    <img src={react} alt="" className='img-project' />
                                    <img src={scss} alt="" className='img-project' />
                                </div>
                                <a href='https://minhchanh013.github.io/discord_clone/'><button> Live Demo</button></a>
                            </div>
                        </div>
                        <div className="card-project-container">
                            <div className="card-project-left">
                                <h3> Custom Cursor</h3>
                                <h4>Degister and clone UI/UX website CustomCusor and some javascript function. </h4>
                                <h4>Responsive: No</h4>
                                <div className='card-language'>
                                    <img src={html} alt="" className='img-project' />
                                    <img src={css} alt="" className='img-project' />
                                    <img src={js} alt="" className='img-project' />
                                </div>
                                <a href='https://cursor-f4482.web.app/#'><button> Live Demo</button></a>
                            </div>
                            <div className="card-project-right">
                                <img src={customCursor} alt="" />
                            </div>
                        </div>
                        <div className="card-project-container-reverse">
                            <div className="card-project-right">
                                <video src={timisora} loop autoPlay muted></video>
                            </div>
                            <div className="card-project-left">
                                <h3>Timisoara</h3>
                                <h4>Degister and clone UI/UX website Timisoara and some javascript function. </h4>
                                <h4>Responsive: Yes</h4>
                                <div className='card-language'>
                                    <img src={html} alt="" className='img-project' />
                                    <img src={css} alt="" className='img-project' />
                                    <img src={js} alt="" className='img-project' />
                                </div>
                                <a href='https://timisoara-f11e4.web.app/#'><button> Live Demo</button></a>
                            </div>
                        </div>
                        <div className="card-project-container">
                            <div className="card-project-left">
                                <h3>Protfilo</h3>
                                <h4>Degister and clone UI/UX website Protfilo and some javascript function. </h4>
                                <h4>Responsive: Yes</h4>
                                <div className='card-language'>
                                    <img src={html} alt="" className='img-project' />
                                    <img src={css} alt="" className='img-project' />
                                    <img src={js} alt="" className='img-project' />
                                </div>
                                <a href='https://protfilo-js.web.app/#banner'><button> Live Demo</button></a>
                            </div>
                            <div className="card-project-right">
                                <img src={protfilo} alt="" />
                            </div>
                        </div>
                        <div className="card-project-container-reverse">
                            <div className="card-project-right">
                                <img src={headphone} alt="" />
                            </div>
                            <div className="card-project-left">
                                <h3>Headphone</h3>
                                <h4>Degister and clone UI/UX website Headphone and some javascript function. </h4>
                                <h4>Responsive: Yes</h4>
                                <div className='card-language'>
                                    <img src={html} alt="" className='img-project' />
                                    <img src={css} alt="" className='img-project' />
                                    <img src={js} alt="" className='img-project' />
                                </div>
                                <a href='https://headphone-7ad4d.web.app/'><button> Live Demo</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project