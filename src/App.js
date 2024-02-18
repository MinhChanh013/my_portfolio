import React, { useState, useEffect, useRef } from "react";
import About from "./about/About";
import "./App.scss";
import Header from "./components/header/Header";

import Loading from "./components/Loading/Loading";
import Home from "./home/Home";
import Exp from "./experience/Exp";
import Project from "./project/Project";
import Contact from "./contact/Contact";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const cursor = useRef(null);
  useEffect(() => {
    axios
      .post("https://note-api.adaptable.app/user/send-mail", {
        email: "minhchanh1910@gmail.com",
        subject: "Welcome to my portfolio",
        body: "<p>Hello portfolio</p>",
      })
      .catch((err) => {
        console.log("🚀 ~ send email ~ err:", err);
      });

    setTimeout(() => {
      setLoading(false);
      handelCursor();
    }, 2500);
  }, []);
  const handelCursor = () => {
    window.onmousemove = function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursor.current.style.left = x + "px";
      cursor.current.style.top = y + "px";
    };
  };
  return (
    <div className="App">
      {loading === true ? (
        <Loading />
      ) : (
        <div className="App-container">
          <div className="App-home">
            <div id="cursor" ref={cursor}></div>
            <Header />
            <Home />
            <About />
            <Exp />
            <Project />
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
