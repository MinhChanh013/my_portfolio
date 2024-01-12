import React, { useState, useEffect, useRef } from "react";
import About from "./about/About";
import "./App.scss";
import Header from "./components/header/Header";

import Loading from "./components/Loading/Loading";
import Home from "./home/Home";
import Exp from "./experience/Exp";
import Project from "./project/Project";
import Contact from "./contact/Contact";

function App() {
  const [loading, setLoading] = useState(true);
  const cursor = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      handelCursor();
    }, 4000);
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
